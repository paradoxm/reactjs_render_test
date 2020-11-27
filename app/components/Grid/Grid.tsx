import React, { FunctionComponent, LegacyRef, memo } from 'react';
import isEqual from 'react-fast-compare';

import { useRenderBlink } from '../../hooks/useRenderBlink/useRenderBlink';
import { Header } from '../Header/Header';
import { Item } from '../helpers';
import { Row } from '../Row/Row';

export interface GridProps {
  num: number;
  items: Item[];
  columns: string[];
  onChange?: () => void;
}

const GridRaw: FunctionComponent<GridProps> = ({
  num,
  items,
  columns,
  onChange = () => {},
}): JSX.Element => {
  const ref = useRenderBlink('', 0);

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className="grid">
      <Header columns={columns} />

      {items.map((item) => (
        <Row key={item.id} item={item} columns={columns} onChange={onChange} />
      ))}
    </div>
  );
};

export const Grid = memo(GridRaw, isEqual);
