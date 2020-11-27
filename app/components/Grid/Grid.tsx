import React, { FunctionComponent, LegacyRef, memo } from 'react';
import isEqual from 'react-fast-compare';

import { useRenderBlink } from '../../hooks/useRenderBlink/useRenderBlink';
import { Header } from '../Header/Header';
import { Item } from '../helpers';
import { Row } from '../Row/Row';

export interface GridProps {
  items: Item[];
  columns: string[];
  onChange: () => void;
}

const GridRaw: FunctionComponent<GridProps> = ({
  items,
  columns,
  onChange = () => {},
}): JSX.Element => {
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

export const Grid = memo(GridRaw, isEqual);

(Grid as any).whyDidYouRender = true;
