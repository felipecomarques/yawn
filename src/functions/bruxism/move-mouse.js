import robotjs from 'robotjs';
import { BruxismMenu } from '../../cli/bruxism/bruxism-menu.js';

const { getScreenSize, moveMouse } = robotjs;
let interval;

export function moveMouseSideToSide() {
  const screenSize = getScreenSize();

  const startY = screenSize.height / 2;
  const startX = 0;
  const endX = screenSize.width;

  const moveInterval = 10;
  const pixelsMovedInXAxis = 10;

  const toTheRight = 1;
  const toTheLeft = -1;
  let currentX = startX;
  let direction = toTheRight;

  interval = setInterval(() => {
    moveMouse(currentX, startY);
    currentX += pixelsMovedInXAxis * direction;

    if (currentX >= endX || currentX <= startX) {
      direction *= -1;
    }
  }, moveInterval);

  BruxismMenu();
}

export function stopMouseMovement() {
  clearInterval(interval);
}
