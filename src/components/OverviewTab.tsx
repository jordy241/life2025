import { FaHeartbeat, FaSmile, FaMoneyBill } from 'react-icons/fa';
import type { Character } from '../types/Character';

interface Props {
  character: Character;
  nextMonth: () => void;
  isAlive: () => boolean;
  resetCharacter: () => void;
}

export const OverviewTab = ({ character, nextMonth, isAlive, resetCharacter }: Props) => {
  return (
    <>
      <p><strong>Name:</strong> {character.name}</p>
      <p><strong>Age:</strong> {character.age}</p>
      <p><FaHeartbeat /> Health: {character.stats.health}</p>
      <p><FaSmile /> Happiness: {character.stats.happiness}</p>
      <p><FaMoneyBill /> Money: ${character.stats.money}</p>

      {!isAlive() ? (
        <>
          <p>💀 You died!</p>
          <button onClick={resetCharacter}>🔁 Restart Life</button>
        </>
      ) : (
        <>
          <button onClick={nextMonth} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
            ⏭️ Next Month
          </button>
          <button onClick={resetCharacter} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
            🔁 Reset Life
          </button>
        </>
      )}
    </>
  );
};
