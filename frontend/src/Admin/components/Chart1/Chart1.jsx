import React from 'react';
import './Chart1.css';

import { Chart } from 'react-charts';

export default function Chart1() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          { x: 1, y: 2 },
          { x: 2, y: 5 },
          { x: 3, y: 10 },
        ],
      },
      {
        label: 'Series 2',
        data: [
          { x: 1, y: 4 },
          { x: 2, y: 10 },
          { x: 3, y: 10 },
        ],
      },
      {
        label: 'Series 3',
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 10 },
          { x: 3, y: 6 },
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <div
      style={{
        width: '100%',
        height: '300px',
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}
