// 実際にFirestoreに保存されるもの
export type MessageBase = {
  text: string;
  postedAt: number; // unixtime
}

export type Message = MessageBase & {
  id: string;
}
