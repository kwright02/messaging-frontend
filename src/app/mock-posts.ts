import { Post } from './post';

export const POSTS: Post[] = [
  {id: 1,  pending: true,  title: 'TEST STRING ONE',      date: new Date(2018,  7,  1, 0, 0, 0, 0)},
  {id: 2,  pending: true,  title: 'TEST STRING TWO',      date: new Date(2018,  7,  1, 0, 0, 0, 0)},
  {id: 3,  pending: false, title: 'TEST STRING THREE',    date: new Date(2018,  8,  1, 0, 0, 0, 0)},
  {id: 4,  pending: false, title: 'TEST STRING FOUR',     date: new Date(2018,  8,  1, 0, 0, 0, 0)},
  {id: 5,  pending: false, title: 'TEST STRING FIVE',     date: new Date(2018,  9,  1, 0, 0, 0, 0)},
  {id: 6,  pending: false, title: 'TEST STRING SIX',      date: new Date(2018,  9,  1, 0, 0, 0, 0)},
  {id: 7,  pending: false, title: 'TEST STRING SEVEN',    date: new Date(2018,  11, 1, 0, 0, 0, 0)},
  {id: 8,  pending: false, title: 'TEST STRING EIGHT',    date: new Date(2018,  1,  1, 0, 0, 0, 0)},
  {id: 9,  pending: false, title: 'TEST STRING NINE',     date: new Date(2018,  8,  1, 0, 0, 0, 0)},
  {id: 10, pending: false, title: 'TEST STRING TEN',      date: new Date(2019,  0,  5, 0, 0, 0, 0)},
  {id: 11, pending: false, title: 'TEST STRING ELEVEN',   date: new Date(2019,  0,  9, 0, 0, 0, 0)},
  {id: 12, pending: false, title: 'TEST STRING TWELVE',   date: new Date(2019,  0,  10, 0, 0, 0, 0)},
  {id: 13, pending: false, title: 'TEST STRING THIRTEEN', date: new Date(2019,  0,  10, 0, 0, 0, 0)},
];
