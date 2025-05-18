import type { Character } from '../types/Character';

interface Props {
  character: Character;
}

export const Header = ({ character }: Props) => {
  return (
    <header
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0, // ✅ Add this
            width: '100%',
            backgroundColor: 'lightblue',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box', // ✅ Important for padding to behave properly
        }}
    >

      <div>
        <strong style={{ fontSize: '1.2rem' }}>{character.name}</strong>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          {character.job ? character.job.name : 'Unemployed'}
        </div>
      </div>
      <div style={{ fontSize: '1.2rem' }}>
        💰 ${character.stats.money}
      </div>
    </header>
  );
};
