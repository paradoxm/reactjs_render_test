import React, { FunctionComponent, LegacyRef } from 'react';

import { useRenderBlink } from '../../hooks/useRenderBlink/useRenderBlink';
import { Item } from '../helpers';

export interface CellProps {
  item: Item;
  column: string;
}

export const Cell: FunctionComponent<CellProps> = ({ item, column }): JSX.Element => {
  const ref = useRenderBlink();

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className="grid-cell">
      {item[column]}
    </div>
  );
};
