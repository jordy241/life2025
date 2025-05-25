import React from 'react';
import type { Country } from '../types/Location';

interface Props {
  countries: Country[];
  selectedCountry?: Country | null;
  selectedCity: string;
  onCountryChange: (name: string) => void;
  onCityChange: (city: string) => void;
}

export default function LocationSelector({
  countries,
  selectedCountry,
  selectedCity,
  onCountryChange,
  onCityChange,
}: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1">Country</label>
        <select
          value={selectedCountry?.name || ''}
          onChange={(e) => onCountryChange(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">— Select country —</option>
          {countries.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div>
          <label className="block mb-1">City</label>
          <select
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">— Select city —</option>
            {selectedCountry.cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
