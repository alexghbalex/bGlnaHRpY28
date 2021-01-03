export interface Note {
  id: string;
  name: string;
  content: string;
  date: Date;
}

export interface Notes {
  [id: string]: Note;
}
