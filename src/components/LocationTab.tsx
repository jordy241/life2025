import type { Location } from '../types/Location';

interface Props {
  currentLocation: Location;
  allLocations: Location[];
  travelTo: (location: Location) => void;
}

export const LocationTab = ({ currentLocation, allLocations, travelTo }: Props) => {
  return (
    <div>
      <h2>📍 Current Location: {currentLocation.name}</h2>
      <p><strong>Type:</strong> {currentLocation.type}</p>
      <p><strong>Population:</strong> {currentLocation.population.toLocaleString()}</p>
      <p><strong>Temperature Range:</strong> {currentLocation.temperature.min}°C – {currentLocation.temperature.max}°C</p>
      <p>{currentLocation.description}</p>

      <hr style={{ margin: '2rem 0' }} />

      <h3>🌍 Travel to Another Location</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {allLocations.filter(loc => loc.id !== currentLocation.id).map(loc => (
          <div
            key={loc.id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px',
              background: '#727272FF',
            }}
          >
            <strong>{loc.name}</strong> <span style={{ fontStyle: 'italic' }}>({loc.type})</span>
            <p>Pop: {loc.population.toLocaleString()}</p>
            <p>Temp: {loc.temperature.min}° – {loc.temperature.max}°C</p>
            <button onClick={() => travelTo(loc)} style={{ marginTop: '0.5rem' }}>
              ✈️ Travel Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
