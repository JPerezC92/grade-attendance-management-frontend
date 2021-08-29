import {
  MouseCoordinates,
  MouseCoordinatesAllowingNull,
} from 'src/hooks/FolderSystem/useMouseCoordinates';

export function isMouseCoordinates(
  mouseCoordinates: MouseCoordinatesAllowingNull
): mouseCoordinates is MouseCoordinates {
  return (
    !Object.is(mouseCoordinates.mouseX, null) &&
    !Object.is(mouseCoordinates.mouseY, null)
  );
}
