export type LocationType = 'village' | 'town' | 'city';

export interface Location {
  id: string;
  name: string;
  type: LocationType;
  population: number;
  temperature: {
    min: number;
    max: number;
  };
  shopIds: string[]; // shops available in this location
  description?: string;
  events?: string[]; // IDs of unique local events
}