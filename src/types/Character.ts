import type { Job } from './Job';
import type { Item } from './Item';
import type { Location } from './Location';

export interface Stats {
  health: number;
  happiness: number;
  money: number;
}

export interface Character {
  id: string;
  name: string;
  age: number;
  stats: Stats;
  job?: Job;
  experience: number;
  educationLevel: number;
  inventory: Item[];
  currentLocation: Location;
}