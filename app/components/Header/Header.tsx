import React, { FunctionComponent } from 'react';

export interface HeaderProps {
  columns: string[];
}

export const Header: FunctionComponent<HeaderProps> = ({ columns }): JSX.Element => {
  return (
    <div className="grid-header">
      {columns.map((column) => (
        <div key={column} className="grid-header__cell">
          {column}
        </div>
      ))}
    </div>
  );
};
