import type { Country } from '../types/Location';

const initialCountries: Country[] = [
  {
    name: 'Belgium',
    cities: [
      { name: 'Brussels',     wageMultiplier: 1.2, costMultiplier: 1.3 },
      { name: 'Antwerp',      wageMultiplier: 1.1, costMultiplier: 1.2 },
      { name: 'Ghent',        wageMultiplier: 1.0, costMultiplier: 1.1 },
    ],
  },
  {
    name: 'Netherlands',
    cities: [
      { name: 'Amsterdam',    wageMultiplier: 1.3, costMultiplier: 1.4 },
      { name: 'Rotterdam',    wageMultiplier: 1.1, costMultiplier: 1.2 },
      { name: 'Utrecht',      wageMultiplier: 1.0, costMultiplier: 1.1 },
    ],
  },
];

export default initialCountries;
