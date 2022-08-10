const timesService = require('../services/times.service');
const ObjEntity = require('../entities/obj.entity');
const mongoose = require('mongoose');

/* CONTROLLERS */
/*   GET_ALL   */
const findAllTimesControler = async (req, res) => {
  const allTimes = await timesService.findAllTimesService();
  res.send(allTimes);
};

/*   GET_BY_ID   */
const findByIdTimeController = async (req, res) => {
  try {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      throw new Error('Invalid ID!');
    }

    const chosenTime = await timesService.findByIdTimeService(idParam);
    if (!chosenTime) throw new Error('Team not found.');

    res.send(chosenTime);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

/*   GET_TABELA   */
const findAllTimesByPositionController = async (req, res) => {
  try {
    const timesSortedByPosition =
      await timesService.findAllTimesByPositionService();
    res.send(timesSortedByPosition);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

/*   POST_TIME   */
const createTimeController = async (req, res) => {
  try {
    ObjEntity.validadeObject(req.body);
    const time = new timesService.TeamEntity(req.body);
    time.validateTeam();
    const newTime = await timesService.createTimeService(time);

    res.status(201).send(newTime);
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
};

/*   UPDATE_BY_ID   */
const updateTimeController = (req, res) => {
  try {
    const editedTime = req.body;
    const editedId = Number(req.params.id);
    ObjEntity.validadeObject(editedTime);
    ObjEntity.validadeId(editedId);
    editedTime.time.time_id = editedId;
    const editedEntity = new timesService.TeamEntity(editedTime);
    editedEntity.validateTeam();
    const updatedTime = timesService.updateTimeService(editedEntity);

    res.send(updatedTime);
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
};

/*   DELETE_BY_ID   */
const deleteTimeController = async (req, res) => {
  try {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      throw new Error('Invalid ID!');
    }
    const deletedTime = await timesService.deleteTimeService(idParam);
    if (deletedTime === null || deletedTime === undefined) {
      throw new Error('ID not found!');
    }
    res.send({ message: 'Team successfully deleted!', team: deletedTime });
  } catch (err) {
    return res.status(400).send({
      message: err.message,
    });
  }
};

/*   END OF CONTROLLERS   */

module.exports = {
  findAllTimesControler,
  findByIdTimeController,
  findAllTimesByPositionController,
  createTimeController,
  updateTimeController,
  deleteTimeController,
};
