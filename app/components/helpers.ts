import { v4 } from 'uuid';
import random from 'lodash-es/random';
import sortBy from 'lodash-es/sortBy';

const generateId = (): string => {
  return v4().replace(/-/g, '').slice(0, 10);
};

export type Item = { id: number } & Record<string, unknown>;

export function generateColumns(columnsCount: number): string[] {
  return Array(columnsCount)
    .fill('')
    .map((_value, index) => `Column${index}`);
}

export function getItems(amount: number, columnsCount = 1, sort: string[] = ['id']): Item[] {
  const randomItems = Array(amount)
    .fill(null)
    .map(
      (value, index) =>
        ({
          id: index,
          ...generateColumns(columnsCount).reduce((result, key) => {
            const propValue = ['one', 'two', 'three', 'four'][random(1, 3)];
            return { ...result, [key]: `${propValue}${index}` };
          }, {}),
        } as Item)
    );

  return sortBy(randomItems, sort);
}
