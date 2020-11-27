import { RefObject, useEffect, useRef } from 'react';

export const useRenderBlink = (): RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    console.log('blink');
  });

  return ref;
};
