import React, { FunctionComponent, LegacyRef, memo } from 'react';

import { useRenderBlink } from '../../hooks/useRenderBlink/useRenderBlink';

export interface HeaderProps {
  columns: string[];
}

const HeaderRaw: FunctionComponent<HeaderProps> = ({ columns }): JSX.Element => {
  const ref = useRenderBlink('#89d75d', 300);

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className="grid-header">
      {columns.map((column) => (
        <div key={column} className="grid-header__cell">
          {column}
        </div>
      ))}
    </div>
  );
};

export const Header = memo(HeaderRaw);
