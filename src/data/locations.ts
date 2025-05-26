import type { Country } from "../types/Location"

const initialCountries: Country[] = [
  {
    name: 'Belgium',
    regions: [
      { name: 'Brussels', type: 'city' },
      { name: 'Waterloo', type: 'town' },
      { name: 'Arendonk', type: 'village' },
    ],
  },
  {
    name: 'Netherlands',
    regions: [
      { name: 'Amsterdam', type: 'city' },
      { name: 'Ede',       type: 'town' },
      { name: 'Zunderdorp',type: 'village' },
    ],
  },
]

export default initialCountries