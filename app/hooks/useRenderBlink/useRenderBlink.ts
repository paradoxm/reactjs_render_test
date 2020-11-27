import { RefObject, useEffect, useRef } from 'react';

export const useRenderBlink = (color = '#21cbcb', duration = 200): RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>();

  ref.current?.style.setProperty('background-color', color);
  ref.current?.style.setProperty('transition', `background-color ${duration}ms ease-in-out`);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.style.setProperty('background-color', null);
    }, duration);
  });

  return ref;
};
