export interface Message {
  sender: string;
  message: string;
  date: string;
  id: number;
}
export type Messages = Message[];
