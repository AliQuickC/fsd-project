import { useEffect, useRef } from 'react';

export default function useClickOutside(
  handler: (event: MouseEvent | TouchEvent) => void
) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        ref.current &&
        !(ref.current as HTMLElement).contains(event.target as HTMLElement)
      ) {
        handler(event);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handler]);

  return ref;
}
