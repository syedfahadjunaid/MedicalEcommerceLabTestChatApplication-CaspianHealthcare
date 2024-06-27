import React from 'react';

import { Chart } from 'react-charts';

export default function Chart2() {
  const data = React.useMemo(
    () => [
      {
        specialLabel: 'Hello World!',
        data: [
          //...
        ],
      },
    ],
    []
  );

  const getLabel = React.useCallback((series) => series.specialLabel, []);

  return (
    <div
      style={{
        width: '400px',
        height: '300px',
      }}
    >
      <Chart data={data} getLabel={getLabel} />
    </div>
  );
}
