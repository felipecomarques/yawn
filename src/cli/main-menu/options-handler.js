import { moveMouseSideToSide } from '../../functions/bruxism/move-mouse.js';
import { MenuOptions } from './menu-options.js';

/**
 * @param {string} choice
 * @returns {Promise<void>}
 */
export async function OptionsHandler(choice) {
  switch (choice) {
    case MenuOptions.START_BRUXISM_OPTION:
      moveMouseSideToSide();
      break;
    case MenuOptions.EXIT_OPTION:
      console.log('Goodbye! 😴');
      process.exit(0);
    default:
      console.log(`⚠️  Invalid option`);
      process.exit(1);
  }
}
