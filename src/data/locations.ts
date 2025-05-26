import type { Country } from "../types/Location"

const initialCountries: Country[] = [
  {
    name: 'Belgium',
    regions: [
      { name: 'Brussels', type: 'city' },
      { name: 'Waterloo', type: 'town' },
      { name: 'Arendonk', type: 'village' },
      { name: 'Antwerp', type: 'city' },
      { name: 'Ghent', type: 'city' },
    ],
  },
  {
    name: 'Netherlands',
    regions: [
      { name: 'Amsterdam', type: 'city' },
      { name: 'Ede',       type: 'town' },
      { name: 'Zunderdorp',type: 'village' },
      { name: 'Rotterdam', type: 'city' },
      { name: 'Utrecht',   type: 'city' },
    ],
  },
    {
    name: 'Bahamas',
    regions: [
      { name: 'Bahama City', type: 'city' },
    ],
  },
]

export default initialCountries