import React, { FunctionComponent, LegacyRef } from 'react';

import { useRenderBlink } from '../../hooks/useRenderBlink/useRenderBlink';
import { Header } from '../Header/Header';
import { Item } from '../helpers';

export interface RowRendererProps {
  key: string;
  item: Item;
  columns: string[];
}

export interface GridProps {
  items: Item[];
  columns: string[];
  rowRenderer?: (props: RowRendererProps) => JSX.Element;
}

const GridRaw: FunctionComponent<GridProps> = ({ items, columns, rowRenderer }): JSX.Element => {
  const ref = useRenderBlink('', 0);

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className="grid">
      <Header columns={columns} />

      {items.map((item) => rowRenderer({ key: item.id, item, columns }))}
    </div>
  );
};

export const Grid = GridRaw;
