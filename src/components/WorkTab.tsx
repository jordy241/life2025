import { jobList } from '../data/jobs';
import type { Character } from '../types/Character';
import type { Job } from '../types/Job';

interface Props {
  character: Character;
  applyForJob: (id: string) => void;
}

export const WorkTab = ({ character, applyForJob }: Props) => {

  const isAvailable = (job: Job) => {
    const locIdOk = job.availableIn?.locationIds?.includes(character.currentLocation.id);
    const typeOk = job.availableIn?.locationTypes?.includes(character.currentLocation.type);
    return locIdOk || typeOk || !job.availableIn;
  };
  
  const availableJobs = jobList.filter(isAvailable);

  
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
        {availableJobs.map(job => (
            <div
            key={job.id}
            style={{
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '8px',
                background: '#464646FF',
            }}
            >
            <h3>{job.name} (${job.baseSalary}/month)</h3>
            <p>{job.description}</p>
            <button onClick={() => applyForJob(job.id)}>Apply</button>
            </div>
        ))}
        </div>


      {character.job && (
        <div style={{ marginTop: '2rem' }}>
          <h3>✅ Current Job: {character.job.name}</h3>
          <p>💵 Salary: ${character.job.baseSalary}/day</p>
        </div>
      )}
    </>
  );
};
