export interface TTTEvent {
  heldBy: Colleague;
  topic: string;
  date: Date | null;
  note?: string;
}

export interface Colleague {
  name: string;
  image?: string;
}

export interface Wish {
  name: string;
  date?: Date;
  note?: string;
}
