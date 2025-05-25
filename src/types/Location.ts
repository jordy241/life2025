export interface City {
  name: string;
  wageMultiplier: number;
  costMultiplier: number;
}

export interface Country {
  name: string;
  cities: City[];
}

export interface Location {
  country: string;
  city: string;
}
