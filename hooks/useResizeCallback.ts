import { useEffect } from 'react';

function useResizeCallback(callback: () => void): void {
  useEffect(() => {
    window.addEventListener('resize', callback);

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, [callback]);
}

export default useResizeCallback;
