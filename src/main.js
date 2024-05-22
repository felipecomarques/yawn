#!/usr/bin/env node

import chalk from 'chalk';
import { mainMenu } from './cli/main-menu/main-menu.js';

console.log(`Welcome to ${chalk.magentaBright('Yawn')}! 🥱`);
mainMenu();
