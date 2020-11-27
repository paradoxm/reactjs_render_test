import React, { FunctionComponent, LegacyRef, memo, useContext } from 'react';

import { useRenderBlink } from '../../hooks/useRenderBlink/useRenderBlink';
import { GridContext } from '../GridContext/GridContext';
import { Item } from '../helpers';

export interface CellProps {
  item: Item;
  column: string;
}

const CellRaw: FunctionComponent<CellProps> = ({ item, column }): JSX.Element => {
  const ref = useRenderBlink('#dd6565', 250);
  const context = useContext(GridContext);

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className="grid-cell">
      {item[column]}
    </div>
  );
};

export const Cell = memo(CellRaw);


(Cell as any).whyDidYouRender = true;
