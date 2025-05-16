import type { LocationType } from "./Location";

export interface Job {
  id: string;
  name: string;
  baseSalary: number;
  requiredEducationLevel?: number;
  requiredExperience?: number;
  stressLevel?: number;
  prestige?: number;
  hoursPerDay?: number;
  description?: string;

  availableIn?: {
    locationIds?: string[];         // Specific cities/towns/villages
    locationTypes?: LocationType[]; // Or by type: 'city', 'town', 'village'
  };
}
