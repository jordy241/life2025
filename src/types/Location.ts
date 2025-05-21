export interface Location {
    id: string;
    name: string;
    description?: string;
    coordinates: { x: number; y: number };
  }