import React from 'react';
import MetricsVisualization from './MetricsVisualization';
import EternalLog from './EternalLog';

const Dashboard = () => {
  return (
    <div>
      <h1>Permanent Status Dashboard</h1>
      <MetricsVisualization />
      <EternalLog />
    </div>
  );
};

export default Dashboard;
