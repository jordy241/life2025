export interface CharacterStats {
  health: number;
  happiness: number;
  money: number;
}

export interface Character {
  name: string;
  age: number;
  stats: CharacterStats;
}
