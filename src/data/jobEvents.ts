import type { JobEvent } from '../types/JobEvent';

export const jobEvents: JobEvent[] = [
  {
    jobId: 'cashier',
    text: 'A customer yells at you for something that wasn’t your fault. How do you respond?',
    options: [
      {
        text: 'Stay calm and apologize',
        effect: (char) => ({
          ...char,
          stats: { ...char.stats, happiness: char.stats.happiness - 2 },
        }),
      },
      {
        text: 'Snap back and risk trouble',
        effect: (char) => ({
          ...char,
          stats: { ...char.stats, happiness: char.stats.happiness + 2, money: char.stats.money - 10 },
        }),
      },
    ],
  },
];
