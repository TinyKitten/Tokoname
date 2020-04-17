import { Moment } from 'moment';

// 実際にFirestoreに保存されるもの
export type MessageBase = {
  text: string;
  postedAt: number; // unixtime
}

export type Message = MessageBase & {
  postedMoment: Moment;
}
