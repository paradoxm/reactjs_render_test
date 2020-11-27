import React, { FunctionComponent } from 'react';

import { Header } from '../Header/Header';
import { Item } from '../helpers';
import { Row } from '../Row/Row';

export interface GridProps {
  items: Item[];
  columns: string[];
}

export const Grid: FunctionComponent<GridProps> = ({ items, columns }): JSX.Element => {
  return (
    <div className="grid">
      <Header columns={columns} />

      {items.map((item) => (
        <Row key={item.id} item={item} columns={columns} />
      ))}
    </div>
  );
};
