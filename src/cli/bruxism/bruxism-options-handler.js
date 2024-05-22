import { stopMouseMovement } from '../../functions/bruxism/move-mouse.js';
import { mainMenu } from '../main-menu/main-menu.js';
import { BruxismMenuOptions } from './bruxism-menu-options.js';

/**
 * @param {string} choice
 * @returns {Promise<boolean>}
 */
export async function BruxismOptionsHandler(choice) {
  switch (choice) {
    case BruxismMenuOptions.RETURN_MAIN_MENU:
      console.clear();
      stopMouseMovement();
      mainMenu();
      return true;
    case BruxismMenuOptions.EXIT_OPTION:
      console.log('Goodbye! 😴');
      process.exit(0);
    default:
      console.log(`⚠️  Invalid option`);
      process.exit(1);
  }
}
