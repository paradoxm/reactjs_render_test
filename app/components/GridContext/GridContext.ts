import { createContext } from 'react';

export interface GridContextProps {
  columnWidths: Record<string, number>;
}

export const GridContext = createContext<GridContextProps>({ columnWidths: {} });
