import inquirer from 'inquirer';
import { MenuOptions } from './menu-options.js';
import { OptionsHandler } from './options-handler.js';

export async function mainMenu() {
  console.clear();
  const options = await inquirer.prompt({
    name: 'menu',
    type: 'list',
    message: 'What would you like to do?',
    choices: Object.values(MenuOptions),
  });

  await OptionsHandler(options.menu);
}
