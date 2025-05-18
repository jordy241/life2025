import { useEffect, useState } from 'react';
import type { JobEvent } from '../types/JobEvent';

interface Props {
  event: JobEvent;
  onSelect: (effectFn: (char: any) => any) => void;
}

export const JobEventDialog = ({ event, onSelect }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: '#727272FF',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        <h2>📣 Work Situation</h2>
        <p>{event.text}</p>
        <div style={{ marginTop: '1rem' }}>
          {event.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onSelect(opt.effect)}
              style={{ display: 'block', marginTop: '0.5rem', width: '100%' }}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
