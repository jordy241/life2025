export interface Job {
    id: string;
    title: string;
    salary: number;
    skillRequirements: Record<string, number>;
  }