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
