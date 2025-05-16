import { jobList } from '../data/jobs';
import type { Character } from '../types/Character';

interface Props {
  character: Character;
  applyForJob: (id: string) => void;
}

export const WorkTab = ({ character, applyForJob }: Props) => {
  return (
    <>
      <h2>Available Jobs</h2>
      <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
        }}
        >
        {jobList.map(job => (
            <div
            key={job.id}
            style={{
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '8px',
                background: '#464646FF',
            }}
            >
            <h3>{job.name} (${job.salary}/month)</h3>
            <p>{job.description}</p>
            <button onClick={() => applyForJob(job.id)}>Apply</button>
            </div>
        ))}
        </div>


      {character.job && (
        <div style={{ marginTop: '2rem' }}>
          <h3>✅ Current Job: {character.job.name}</h3>
          <p>💵 Salary: ${character.job.salary}/day</p>
        </div>
      )}
    </>
  );
};
