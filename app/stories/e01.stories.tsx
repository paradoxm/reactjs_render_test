import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Grid } from '../components/Grid/Grid';

export default { title: 'Examples / 01', decorators: [withKnobs] };

export const Base: React.FunctionComponent = () => {

  return (
    <>
      <div style={{ width: '900px', height: '600px', marginLeft: '50px', marginTop: '50px' }}>
          <Grid/>
      </div>
    </>
  );
};

