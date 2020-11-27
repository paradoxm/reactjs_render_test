import { number, withKnobs } from '@storybook/addon-knobs';
import React, { useEffect, useMemo, useState } from 'react';

import { GridContext, GridContextProps } from 'app/components/GridContext/GridContext';

import { Grid } from '../components/Grid/Grid';
import { generateColumns, getItems } from '../components/helpers';

export default { title: 'Examples / 01', decorators: [withKnobs] };

export const Base: React.FunctionComponent = () => {
  const count = number('Row count', 10, { step: 10, min: 0 });
  const columnsCount = number('Columns count', 8, { step: 1, min: 0 });
  const columns = useMemo(() => generateColumns(columnsCount), [columnsCount]);
  const items = useMemo(() => getItems(count, columnsCount), [count, columnsCount]);

  const gridContext: GridContextProps = { columnWidths: { 0: 100, 1: 200 } };

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ width: '900px', height: '600px', marginLeft: '50px', marginTop: '50px' }}>
      <div>Interval: {timer}</div>

      <GridContext.Provider value={gridContext}>
        <Grid items={items} columns={columns} />
      </GridContext.Provider>
    </div>
  );
};
