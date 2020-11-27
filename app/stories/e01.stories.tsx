import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import { Grid } from '../components/Grid/Grid';
import { generateColumns, getItems } from '../components/helpers';

export default { title: 'Examples / 01', decorators: [withKnobs] };

export const Base: React.FunctionComponent = () => {
  const count = number('Row count', 10, { step: 10, min: 0 });
  const columnsCount = number('Columns count', 8, { step: 1, min: 0 });
  const columns = generateColumns(columnsCount);
  const items = getItems(count, columnsCount);

  return (
    <div style={{ width: '900px', height: '600px', marginLeft: '50px', marginTop: '50px' }}>
      <Grid items={items} columns={columns} />
    </div>
  );
};
