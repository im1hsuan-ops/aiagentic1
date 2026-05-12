import { useEffect, useRef } from 'react';

export function useScrollLock(locked: boolean): void {
  const savedScrollY = useRef(0);

  useEffect(() => {
    if (locked) {
      savedScrollY.current = window.scrollY;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [locked]);
}
