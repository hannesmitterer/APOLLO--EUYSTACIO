import React, { useEffect, useState } from 'react';

const metrics = [
  'Seedbringer Treasury',
  'Emergency Protocol',
  'Resonance School',
  'NSR / OLF Drift',
];

const MetricsVisualization = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        'Seedbringer Treasury': Math.random() * 100,
        'Emergency Protocol': Math.random() * 100,
        'Resonance School': Math.random() * 100,
        'NSR / OLF Drift': Math.random() * 100,
      };
      setData(newData);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Metrics Visualization</h2>
      <ul>
        {metrics.map((metric) => (
          <li key={metric}>
            {metric}: {data[metric] ? data[metric].toFixed(2) : 'Loading...'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetricsVisualization;
