import type { Job } from './Job';


export interface CharacterStats {
  health: number;
  happiness: number;
  money: number;
}

export interface Character {
  name: string;
  age: number;
  stats: CharacterStats;
  job?: Job; // optional if unemployed
  experience?: number;
  educationLevel?: number;
}
