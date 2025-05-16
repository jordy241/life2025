import { useCharacterState } from './hooks/useCharacterState';
import { FaHeartbeat, FaSmile, FaMoneyBill } from 'react-icons/fa';

function App() {
  const { character, increaseAge, changeStat, isAlive } = useCharacterState();

  const nextDay = () => {
    increaseAge();
    changeStat('health', -5);
    changeStat('happiness', +2);
    changeStat('money', +20);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🧬 Life Simulator</h1>
      <p><strong>Name:</strong> {character.name}</p>
      <p><strong>Age:</strong> {character.age}</p>
      <p><FaHeartbeat /> Health: {character.stats.health}</p>
      <p><FaSmile /> Happiness: {character.stats.happiness}</p>
      <p><FaMoneyBill /> Money: ${character.stats.money}</p>

      {!isAlive() ? (
        <p>💀 You died!</p>
      ) : (
        <button onClick={nextDay} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          ⏭️ Next Day
        </button>
      )}
    </div>
  );
}

export default App;
