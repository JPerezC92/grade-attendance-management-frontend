import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

export interface MouseCoordinates {
  mouseX: number;
  mouseY: number;
}

export interface MouseCoordinatesAllowingNull extends MouseCoordinates {
  mouseX: number | null;
  mouseY: number | null;
}

// interface UseMouseCoordinatesReturn {
//   mouseCoordinates: MouseCoordinatesAllowingNull;
//   resetMouseCoordinates: () => void;
//   setMouseCoordinates: Dispatch<SetStateAction<MouseCoordinatesAllowingNull>>;
// }

interface UseMouseCoordinates {
  (): {
    mouseCoordinates: MouseCoordinatesAllowingNull;
    resetMouseCoordinates: () => void;
    setMouseCoordinates: Dispatch<SetStateAction<MouseCoordinatesAllowingNull>>;
  };
}

export type UseMouseCoordinatesReturn = ReturnType<typeof useMouseCoordinates>;

const initialState: MouseCoordinatesAllowingNull = {
  mouseX: null,
  mouseY: null,
};

export const useMouseCoordinates: UseMouseCoordinates = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState(() => initialState);

  const resetMouseCoordinates = () => setMouseCoordinates(() => initialState);

  mouseCoordinates.mouseX;

  return { mouseCoordinates, setMouseCoordinates, resetMouseCoordinates };
};
