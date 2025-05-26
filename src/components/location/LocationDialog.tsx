import React, { useState, useEffect } from 'react'
import type { Country, Location } from '../../types/Location'

interface Props {
  isOpen: boolean
  onClose: () => void
  onConfirm: (location: Location) => void
  countries: Country[]
  initialLocation: Location
}

const LocationDialog: React.FC<Props> = ({ isOpen, onClose, onConfirm, countries, initialLocation }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(initialLocation.country)
  const [selectedRegion, setSelectedRegion] = useState<string>(initialLocation.regionName)

  useEffect(() => {
    if (isOpen) {
      setSelectedCountry(initialLocation.country)
      setSelectedRegion(initialLocation.regionName)
    }
  }, [isOpen, initialLocation])

  const country = countries.find(c => c.name === selectedCountry)
  const regions = country?.regions ?? []

  const selectedRegionType = country?.regions.find(r => r.name === selectedRegion)?.type ?? 'city'

  const handleConfirm = () => {
    if (!selectedCountry || !selectedRegion) return
    onConfirm({
      country: selectedCountry,
      regionName: selectedRegion,
      regionType: selectedRegionType,
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Change Location</h2>

        <label className="block text-sm mb-1">Country</label>
        <select
          value={selectedCountry}
          onChange={e => {
            setSelectedCountry(e.target.value)
            setSelectedRegion('')
          }}
          className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="">Select a country…</option>
          {countries.map(c => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>

        {regions.length > 0 && (
          <>
            <label className="block text-sm mb-1">Region</label>
            <select
              value={selectedRegion}
              onChange={e => setSelectedRegion(e.target.value)}
              className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="">Select a region…</option>
              {regions.map(r => (
                <option key={r.name} value={r.name}>
                  {r.name} ({r.type})
                </option>
              ))}
            </select>
          </>
        )}

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocationDialog
