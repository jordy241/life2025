import type { Job } from '../types/Job';

export const jobList: Job[] = [
  {
    id: 'cashier',
    name: 'Cashier',
    salary: 1000,
    requiredEducationLevel: 0,
    requiredExperience: 0,
    stressLevel: 4,
    prestige: 10,
    hoursPerDay: 8,
    description: 'Work the register at a local grocery store.',
  },
  {
    id: 'junior_dev',
    name: 'Junior Developer',
    salary: 5000,
    requiredEducationLevel: 2,
    requiredExperience: 1,
    stressLevel: 6,
    prestige: 50,
    hoursPerDay: 9,
    description: 'Write code and fix bugs in a tech company.',
  },
  {
    id: 'doctor',
    name: 'Doctor',
    salary: 12000,
    requiredEducationLevel: 4,
    requiredExperience: 5,
    stressLevel: 9,
    prestige: 90,
    hoursPerDay: 12,
    description: 'Treat patients and save lives.',
  }
];
