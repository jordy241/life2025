import { useState } from 'react';
import { useCharacterState } from './hooks/useCharacterState';
import { OverviewTab } from './components/OverviewTab';
import { WorkTab } from './components/WorkTab';

function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'work'>('overview');
  const {
    character,
    increaseAge,
    changeStat,
    isAlive,
    applyForJob,
    resetCharacter
  } = useCharacterState();

  const nextMonth = () => {
    increaseAge();
    changeStat('health', -5);
    changeStat('happiness', +2);
    changeStat('money', character.job?.salary ?? 0);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🧬 Life Simulator</h1>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => setActiveTab('overview')}>📊 Overview</button>
        <button onClick={() => setActiveTab('work')}>💼 Work</button>
      </div>

      <div style={{ minHeight: '500px' }}>
        {activeTab === 'overview' && (
          <OverviewTab
            character={character}
            nextMonth={nextMonth}
            isAlive={isAlive}
            resetCharacter={resetCharacter}
          />
        )}

        {activeTab === 'work' && (
          <WorkTab character={character} applyForJob={applyForJob} />
        )}
      </div>

    </div>
  );
}

export default App;
