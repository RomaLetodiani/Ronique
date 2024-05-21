export interface TimeStamps {
  created_at: string;
  updated_at: string;
}

export interface Item extends TimeStamps {
  id: string;
}
