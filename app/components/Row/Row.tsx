import React, { FunctionComponent } from 'react';

import { Cell } from '../Cell/Cell';
import { Item } from '../helpers';

export interface RowProps {
  item: Item;
  columns: string[];
}

export const Row: FunctionComponent<RowProps> = ({ item, columns }): JSX.Element => {
  return (
    <div className="grid-row">
      {columns.map((column) => (
        <Cell key={column} item={item} column={column} />
      ))}
    </div>
  );
};
