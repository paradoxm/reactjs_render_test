import React, { FunctionComponent, LegacyRef, memo } from 'react';
import isEqual from 'react-fast-compare';

import { useRenderBlink } from '../../hooks/useRenderBlink/useRenderBlink';
import { Cell } from '../Cell/Cell';
import { Item } from '../helpers';

export interface RowProps {
  item: Item;
  columns: string[];
}

const RowRaw: FunctionComponent<RowProps> = ({ item, columns }): JSX.Element => {
  const ref = useRenderBlink('#d99e44', 350);

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className="grid-row">
      {columns.map((column) => (
        <Cell key={column} item={item} column={column} />
      ))}
    </div>
  );
};

export const Row = memo(RowRaw);
