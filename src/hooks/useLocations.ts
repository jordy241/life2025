import { useState } from 'react';
import type { Country, Location } from '../types/Location';
import initialCountries from '../data/locations';

export function useLocations() {
  const [countries] = useState<Country[]>(initialCountries);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('');

  function selectCountry(name: string) {
    const country = countries.find((c) => c.name === name) ?? null;
    setSelectedCountry(country);
    setSelectedCity('');
  }

  function selectCity(city: string) {
    setSelectedCity(city);
  }

  const location: Location | undefined =
    selectedCountry && selectedCity
      ? { country: selectedCountry.name, city: selectedCity }
      : undefined;

  return {
    countries,
    selectedCountry,
    selectedCity,
    selectCountry,
    selectCity,
    location,
  };
}
