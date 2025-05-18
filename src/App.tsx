import { useState } from 'react';
import { useCharacterState } from './hooks/useCharacterState';
import { OverviewTab } from './components/OverviewTab';
import { WorkTab } from './components/WorkTab';
import { ShopTab } from './components/ShopTab';
import { InventoryTab } from './components/InventoryTab';
import { jobEvents } from './data/jobEvents';
import type { JobEvent } from './types/JobEvent';
import { JobEventDialog } from './components/JobEventDialog';
import { LocationTab } from './components/LocationTab';
import { locations } from './data/locations';
import { Header } from './components/Header';



function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'work' | 'shop' | 'inventory' | 'location'>('overview');
  const [jobEvent, setJobEvent] = useState<JobEvent | null>(null);

  const {
    character,
    increaseAge,
    changeStat,
    isAlive,
    applyForJob,
    resetCharacter,
    buyItem,
    travelTo
  } = useCharacterState();

  const handleEventChoice = (effectFn: (char: any) => any) => {
    const updated = effectFn(character);
    // Force state update
    changeStat('health', updated.stats.health - character.stats.health);
    changeStat('happiness', updated.stats.happiness - character.stats.happiness);
    changeStat('money', updated.stats.money - character.stats.money);
    setJobEvent(null);
  };
  

  const nextMonth = () => {
    increaseAge(); // assuming age = months now
    changeStat('health', -5);
    changeStat('happiness', +2);
    changeStat('money', character.job?.baseSalary ?? 0);
  
    // Trigger job event if applicable
    if (character.job) {
      const possibleEvents = jobEvents.filter(e => e.jobId === character.job?.id);
      if (possibleEvents.length > 0 && Math.random() < 0.5) {
        const random = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];
        setJobEvent(random);
      }
    }
  };
  

  return (
    <>
      <Header character={character} /><div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🧬 Life Simulator</h1>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => setActiveTab('overview')}>📊 Overview</button>
        <button onClick={() => setActiveTab('work')}>💼 Work</button>
        <button onClick={() => setActiveTab('shop')}>🛒 Shop</button>
        <button onClick={() => setActiveTab('inventory')}>🎒 Inventory</button>
        <button onClick={() => setActiveTab('location')}>📍 Location</button>
      </div>

      {jobEvent && <JobEventDialog event={jobEvent} onSelect={handleEventChoice} />}


      <div style={{ minHeight: '500px' }}>
        {activeTab === 'overview' && (
          <OverviewTab
            character={character}
            nextMonth={nextMonth}
            isAlive={isAlive}
            resetCharacter={resetCharacter} />
        )}

        {activeTab === 'work' && (
          <WorkTab character={character} applyForJob={applyForJob} />
        )}
        {activeTab === 'shop' && <ShopTab buyItem={buyItem} money={character.stats.money} />}
        {activeTab === 'inventory' && <InventoryTab items={character.inventory ?? []} />}
        {activeTab === 'location' && (
          <LocationTab
            currentLocation={character.currentLocation}
            allLocations={locations}
            travelTo={travelTo} />
        )}

      </div>

      </div>
    </>
  );
}

export default App;
