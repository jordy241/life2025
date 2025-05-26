interface StatsSectionProps<T extends object> {
  title: string;
  stats: Record<keyof T, number>;
}

const StatsSection = <T extends object>({ title, stats }: StatsSectionProps<T>) => {
  // Tell TS that each entry is [string, number]
  const entries = Object.entries(stats) as [string, number][];

  return (
    <div className="stats-section">
      <h3>{title}</h3>
      <ul>
        {entries.map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsSection;