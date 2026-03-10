import type { ICardListData, ICardListState, IGame } from '../src/Types/types';

export const mockCardListData: ICardListData = {
  isLoading: true,
  games: [],
  count: 0,
  responseOk: true,
  currentPage: '1',
};

export const mocCardListState: ICardListState = {
  item: null,
  selectItems: [],
  enableCacheGameList: true,
  enableCacheGameDetails: true,
};

export const games20: IGame[] = [
  {
    id: 3498,
    name: 'Grand Theft Auto V',
    released: '2013-09-17',
    ratings_count: 7151,
  },
  {
    id: 3328,
    name: 'The Witcher 3: Wild Hunt',
    released: '2015-05-18',
    ratings_count: 6958,
  },
  {
    id: 4200,
    name: 'Portal 2',
    released: '2011-04-18',
    ratings_count: 5939,
  },
  {
    id: 4291,
    name: 'Counter-Strike: Global Offensive',
    released: '2012-08-21',
    ratings_count: 3586,
  },
  {
    id: 5286,
    name: 'Tomb Raider (2013)',
    released: '2013-03-05',
    ratings_count: 4018,
  },
  {
    id: 13536,
    name: 'Portal',
    released: '2007-10-09',
    ratings_count: 4896,
  },
  {
    id: 12020,
    name: 'Left 4 Dead 2',
    released: '2009-11-17',
    ratings_count: 3355,
  },
  {
    id: 5679,
    name: 'The Elder Scrolls V: Skyrim',
    released: '2011-11-11',
    ratings_count: 4802,
  },
  {
    id: 28,
    name: 'Red Dead Redemption 2',
    released: '2018-10-26',
    ratings_count: 5288,
  },
  {
    id: 4062,
    name: 'BioShock Infinite',
    released: '2013-03-26',
    ratings_count: 4121,
  },
  {
    id: 13537,
    name: 'Half-Life 2',
    released: '2004-11-16',
    ratings_count: 3992,
  },
  {
    id: 802,
    name: 'Borderlands 2',
    released: '2012-09-18',
    ratings_count: 3261,
  },
  {
    id: 3439,
    name: 'Life is Strange',
    released: '2015-01-29',
    ratings_count: 3717,
  },
  {
    id: 4286,
    name: 'BioShock',
    released: '2007-08-21',
    ratings_count: 3321,
  },
  {
    id: 32,
    name: 'Destiny 2',
    released: '2017-09-06',
    ratings_count: 2648,
  },
  {
    id: 58175,
    name: 'God of War (2018)',
    released: '2018-04-20',
    ratings_count: 4998,
  },
  {
    id: 3070,
    name: 'Fallout 4',
    released: '2015-11-09',
    ratings_count: 3359,
  },
  {
    id: 3939,
    name: 'PAYDAY 2',
    released: '2013-08-13',
    ratings_count: 2217,
  },
  {
    id: 1030,
    name: 'Limbo',
    released: '2010-07-21',
    ratings_count: 3339,
  },
  {
    id: 11859,
    name: 'Team Fortress 2',
    released: '2007-10-10',
    ratings_count: 2911,
  },
];

export const games12: IGame[] = [
  {
    id: 992502,
    name: 'Warcraft: Remastered',
    released: '2024-11-13',
    ratings_count: 3,
  },
  {
    id: 261226,
    name: 'Warcraft III: Reforged',
    released: '2020-01-29',
    ratings_count: 164,
  },
  {
    id: 552856,
    name: 'World of Warcraft: Demon Hunter',
    released: '2008-01-29',
    ratings_count: 1,
  },
  {
    id: 30445,
    name: 'Warcraft 3: Reign of Chaos',
    released: '2002-07-03',
    ratings_count: 1400,
  },
  {
    id: 31113,
    name: 'Warcraft 2: Battle.net Edition',
    released: '1999-01-01',
    ratings_count: 47,
  },
  {
    id: 29590,
    name: 'Warcraft: Orcs & Humans',
    released: '1994-11-23',
    ratings_count: 159,
  },
  {
    id: 57967,
    name: 'Warcraft II: Tides of Darkness',
    released: '1995-12-09',
    ratings_count: 301,
  },
  {
    id: 30016,
    name: 'Warcraft 2: Beyond the Dark Portal',
    released: '1996-05-16',
    ratings_count: 144,
  },
  {
    id: 34744,
    name: 'Warcraft 3: The Frozen Throne',
    released: '2003-06-30',
    ratings_count: 1120,
  },
  {
    id: 992025,
    name: 'Lord of the Clans',
    released: '2024-06-14',
    ratings_count: 0,
  },
  {
    id: 388315,
    name: 'World of Warcraft: Shadowlands',
    released: '2020-11-23',
    ratings_count: 88,
  },
  {
    id: 43432,
    name: 'World of Warcraft: Legion',
    released: '2016-08-30',
    ratings_count: 152,
  },
];
