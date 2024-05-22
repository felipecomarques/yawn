import inquirer from 'inquirer';
import { BruxismMenuOptions } from './bruxism-menu-options.js';
import { BruxismOptionsHandler } from './bruxism-options-handler.js';

export async function BruxismMenu() {
  console.clear();
  const options = await inquirer.prompt({
    name: 'menu',
    type: 'list',
    message: 'What would you like to do?',
    choices: Object.values(BruxismMenuOptions),
  });

  await BruxismOptionsHandler(options.menu);
}
