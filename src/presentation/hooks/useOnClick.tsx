import { useEffect, RefObject } from 'react';

interface handlerFunction {
  (event: Event | void): void
};

const useOnClick = (ref: RefObject<HTMLElement>, handler: handlerFunction) => {

  useEffect(() => {
    const listener = (event: Event): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
    [ref, handler],
  );
};
export default useOnClick;