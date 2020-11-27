import React, { FunctionComponent, LegacyRef, memo } from 'react';

import { useRenderBlink } from '../../hooks/useRenderBlink/useRenderBlink';
import { Header } from '../Header/Header';
import { Item } from '../helpers';
import { Row } from '../Row/Row';

export interface GridProps {
  items: Item[];
  columns: string[];
}

const GridRaw: FunctionComponent<GridProps> = ({ items, columns }): JSX.Element => {
  const ref = useRenderBlink('#3b9ae7', 400);

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className="grid">
      <Header columns={columns} />

      {items.map((item) => (
        <Row key={item.id} item={item} columns={columns} />
      ))}
    </div>
  );
};

export const Grid = memo(GridRaw);
