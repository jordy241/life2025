import type { Job } from "../types/Job";

export const jobList: Job[] = [
  {
    id: 'cashier',
    name: 'Cashier',
    baseSalary: 50,
    requiredEducationLevel: 0,
    availableIn: { locationTypes: ['village', 'town', 'city'] },
    description: 'Work the register at a local grocery store.',
  },
  {
    id: 'junior_dev',
    name: 'Junior Developer',
    baseSalary: 120,
    requiredEducationLevel: 2,
    availableIn: { locationTypes: ['town', 'city'] },
    description: 'Write code and fix bugs.',
  },
  {
    id: 'bank_manager',
    name: 'Bank Manager',
    baseSalary: 220,
    requiredEducationLevel: 3,
    availableIn: { locationIds: ['nova-city'] },
    description: 'Oversee operations in a major city bank.',
  },
];
