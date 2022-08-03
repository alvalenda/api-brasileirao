const tabela = [
  {
    posicao: 1,
    pontos: 42,
    time: {
      time_id: 17,
      nome_popular: 'Palmeiras',
      sigla: 'PAL',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ccc90039.svg',
    },
    jogos: 20,
    vitorias: 12,
    empates: 6,
    derrotas: 2,
    gols_pro: 33,
    gols_contra: 14,
    saldo_gols: 19,
    aproveitamento: 70,
    variacao_posicao: 0,
    ultimos_jogos: ['e', 'v', 'v', 'v', 'v'],
  },
  {
    posicao: 2,
    pontos: 38,
    time: {
      time_id: 8,
      nome_popular: 'Corinthians',
      sigla: 'COR',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7ab48fa.svg',
    },
    jogos: 20,
    vitorias: 11,
    empates: 5,
    derrotas: 4,
    gols_pro: 25,
    gols_contra: 19,
    saldo_gols: 6,
    aproveitamento: 63.3,
    variacao_posicao: 0,
    ultimos_jogos: ['v', 'd', 'v', 'v', 'v'],
  },
  {
    posicao: 3,
    pontos: 35,
    time: {
      time_id: 12,
      nome_popular: 'Fluminense',
      sigla: 'FLU',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg',
    },
    jogos: 20,
    vitorias: 10,
    empates: 5,
    derrotas: 5,
    gols_pro: 31,
    gols_contra: 22,
    saldo_gols: 9,
    aproveitamento: 58.3,
    variacao_posicao: 0,
    ultimos_jogos: ['v', 'e', 'v', 'v', 'e'],
  },
  {
    posicao: 4,
    pontos: 34,
    time: {
      time_id: 2,
      nome_popular: 'Athletico-PR',
      sigla: 'CAP',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999e2864a27.svg',
    },
    jogos: 20,
    vitorias: 10,
    empates: 4,
    derrotas: 6,
    gols_pro: 25,
    gols_contra: 20,
    saldo_gols: 5,
    aproveitamento: 56.7,
    variacao_posicao: 1,
    ultimos_jogos: ['d', 'e', 'v', 'd', 'v'],
  },
  {
    posicao: 5,
    pontos: 33,
    time: {
      time_id: 11,
      nome_popular: 'Flamengo',
      sigla: 'FLA',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c95084cb.svg',
    },
    jogos: 20,
    vitorias: 10,
    empates: 3,
    derrotas: 7,
    gols_pro: 30,
    gols_contra: 19,
    saldo_gols: 11,
    aproveitamento: 55,
    variacao_posicao: 1,
    ultimos_jogos: ['d', 'v', 'v', 'v', 'v'],
  },
  {
    posicao: 6,
    pontos: 33,
    time: {
      time_id: 15,
      nome_popular: 'Internacional',
      sigla: 'INT',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999cbb0b297.svg',
    },
    jogos: 20,
    vitorias: 8,
    empates: 9,
    derrotas: 3,
    gols_pro: 30,
    gols_contra: 20,
    saldo_gols: 10,
    aproveitamento: 55,
    variacao_posicao: 1,
    ultimos_jogos: ['v', 'e', 'e', 'd', 'v'],
  },
  {
    posicao: 7,
    pontos: 32,
    time: {
      time_id: 4,
      nome_popular: 'Atlético-MG',
      sigla: 'CAM',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ca6bfd30.svg',
    },
    jogos: 20,
    vitorias: 8,
    empates: 8,
    derrotas: 4,
    gols_pro: 27,
    gols_contra: 23,
    saldo_gols: 4,
    aproveitamento: 53.3,
    variacao_posicao: -3,
    ultimos_jogos: ['e', 'v', 'e', 'd', 'd'],
  },
  {
    posicao: 8,
    pontos: 30,
    time: {
      time_id: 18,
      nome_popular: 'Bragantino',
      sigla: 'BGT',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d770dbb2.svg',
    },
    jogos: 20,
    vitorias: 8,
    empates: 6,
    derrotas: 6,
    gols_pro: 31,
    gols_contra: 23,
    saldo_gols: 8,
    aproveitamento: 50,
    variacao_posicao: 0,
    ultimos_jogos: ['v', 'v', 'v', 'd', 'v'],
  },
  {
    posicao: 9,
    pontos: 27,
    time: {
      time_id: 19,
      nome_popular: 'Santos',
      sigla: 'SAN',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d7525121.svg',
    },
    jogos: 20,
    vitorias: 6,
    empates: 9,
    derrotas: 5,
    gols_pro: 24,
    gols_contra: 18,
    saldo_gols: 6,
    aproveitamento: 45,
    variacao_posicao: 0,
    ultimos_jogos: ['v', 'd', 'v', 'e', 'e'],
  },
  {
    posicao: 10,
    pontos: 26,
    time: {
      time_id: 20,
      nome_popular: 'São Paulo',
      sigla: 'SAO',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ccdc1656.svg',
    },
    jogos: 20,
    vitorias: 5,
    empates: 11,
    derrotas: 4,
    gols_pro: 28,
    gols_contra: 25,
    saldo_gols: 3,
    aproveitamento: 43.3,
    variacao_posicao: 0,
    ultimos_jogos: ['e', 'e', 'e', 'e', 'd'],
  },
  {
    posicao: 11,
    pontos: 25,
    time: {
      time_id: 14,
      nome_popular: 'Goiás',
      sigla: 'GOI',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999dc97b4e2.svg',
    },
    jogos: 20,
    vitorias: 6,
    empates: 7,
    derrotas: 7,
    gols_pro: 22,
    gols_contra: 25,
    saldo_gols: -3,
    aproveitamento: 41.7,
    variacao_posicao: 3,
    ultimos_jogos: ['v', 'e', 'd', 'e', 'v'],
  },
  {
    posicao: 12,
    pontos: 24,
    time: {
      time_id: 6,
      nome_popular: 'Botafogo',
      sigla: 'BOT',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c9b06760.svg',
    },
    jogos: 20,
    vitorias: 7,
    empates: 3,
    derrotas: 10,
    gols_pro: 19,
    gols_contra: 25,
    saldo_gols: -6,
    aproveitamento: 40,
    variacao_posicao: -1,
    ultimos_jogos: ['d', 'd', 'd', 'v', 'd'],
  },
  {
    posicao: 13,
    pontos: 24,
    time: {
      time_id: 1,
      nome_popular: 'América-MG',
      sigla: 'AMG',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999cac0b5cc.svg',
    },
    jogos: 20,
    vitorias: 7,
    empates: 3,
    derrotas: 10,
    gols_pro: 16,
    gols_contra: 23,
    saldo_gols: -7,
    aproveitamento: 40,
    variacao_posicao: 2,
    ultimos_jogos: ['d', 'd', 'd', 'v', 'v'],
  },
  {
    posicao: 14,
    pontos: 24,
    time: {
      time_id: 7,
      nome_popular: 'Ceará',
      sigla: 'CEA',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999dba767ba.svg',
    },
    jogos: 20,
    vitorias: 5,
    empates: 9,
    derrotas: 6,
    gols_pro: 21,
    gols_contra: 21,
    saldo_gols: 0,
    aproveitamento: 40,
    variacao_posicao: -2,
    ultimos_jogos: ['d', 'v', 'v', 'd', 'd'],
  },
  {
    posicao: 15,
    pontos: 22,
    time: {
      time_id: 9,
      nome_popular: 'Coritiba',
      sigla: 'CFC',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d991e8b8.svg',
    },
    jogos: 20,
    vitorias: 6,
    empates: 4,
    derrotas: 10,
    gols_pro: 22,
    gols_contra: 31,
    saldo_gols: -9,
    aproveitamento: 36.7,
    variacao_posicao: -2,
    ultimos_jogos: ['e', 'd', 'd', 'v', 'd'],
  },
  {
    posicao: 16,
    pontos: 21,
    time: {
      time_id: 5,
      nome_popular: 'Avaí',
      sigla: 'AVA',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999c8488adb.svg',
    },
    jogos: 20,
    vitorias: 6,
    empates: 3,
    derrotas: 11,
    gols_pro: 21,
    gols_contra: 33,
    saldo_gols: -12,
    aproveitamento: 35,
    variacao_posicao: 0,
    ultimos_jogos: ['d', 'v', 'd', 'd', 'd'],
  },
  {
    posicao: 17,
    pontos: 20,
    time: {
      time_id: 10,
      nome_popular: 'Cuiabá',
      sigla: 'CUI',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999e4424264.svg',
    },
    jogos: 20,
    vitorias: 5,
    empates: 5,
    derrotas: 10,
    gols_pro: 14,
    gols_contra: 21,
    saldo_gols: -7,
    aproveitamento: 33.3,
    variacao_posicao: 0,
    ultimos_jogos: ['v', 'd', 'e', 'd', 'd'],
  },
  {
    posicao: 18,
    pontos: 18,
    time: {
      time_id: 13,
      nome_popular: 'Fortaleza',
      sigla: 'FOR',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999ddaa261b.svg',
    },
    jogos: 20,
    vitorias: 4,
    empates: 6,
    derrotas: 10,
    gols_pro: 16,
    gols_contra: 23,
    saldo_gols: -7,
    aproveitamento: 30,
    variacao_posicao: 2,
    ultimos_jogos: ['e', 'v', 'd', 'e', 'v'],
  },
  {
    posicao: 19,
    pontos: 17,
    time: {
      time_id: 3,
      nome_popular: 'Atlético-GO',
      sigla: 'ACG',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999db078911.svg',
    },
    jogos: 20,
    vitorias: 4,
    empates: 5,
    derrotas: 11,
    gols_pro: 19,
    gols_contra: 32,
    saldo_gols: -13,
    aproveitamento: 28.3,
    variacao_posicao: -1,
    ultimos_jogos: ['d', 'd', 'd', 'd', 'd'],
  },
  {
    posicao: 20,
    pontos: 16,
    time: {
      time_id: 16,
      nome_popular: 'Juventude',
      sigla: 'JUV',
      escudo:
        'https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999cb997a01.svg',
    },
    jogos: 20,
    vitorias: 3,
    empates: 7,
    derrotas: 10,
    gols_pro: 16,
    gols_contra: 33,
    saldo_gols: -17,
    aproveitamento: 26.7,
    variacao_posicao: -1,
    ultimos_jogos: ['e', 'e', 'd', 'v', 'd'],
  },
];

module.exports = tabela;
