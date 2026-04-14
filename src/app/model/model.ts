export interface TTTEvent {
  heldBy: Colleague | Colleague[];
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
