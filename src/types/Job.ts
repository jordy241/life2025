export interface Job {
  id: string;
  name: string;
  salary: number; // per day or per tick
  requiredEducationLevel?: number; // e.g., 0 = none, 1 = high school, 2 = college
  requiredExperience?: number; // years or points
  stressLevel?: number; // 1–10
  prestige?: number; // 1–100
  hoursPerDay?: number;
  description?: string;
}
