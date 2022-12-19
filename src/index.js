import { argv, stdin as input, stdout as output } from 'process';
import { homedir } from 'os';
import readline from 'readline';
import { USERNAME_ARG_TEXT, INVALID_INPUT, OPERATION_FAILED, EXIT_COMMAND } from './constants.js';
import { getEndCommandIndex } from './utils.js';
import * as modules from './modules/index.js';

const context = { cwd: homedir() };

const userNameParam = argv.find(arg => arg.startsWith(USERNAME_ARG_TEXT));
const userName = userNameParam ? userNameParam.substring(USERNAME_ARG_TEXT.length) : DEFAULT_USERNAME;

const currentModules = Object.fromEntries(
    Object.entries(modules).map(([name, fn]) => [name, fn.bind(context)])
);

console.log(`Welcome to the File Manager, ${userName}!`);
currentModules.path();

const rl = readline.createInterface({ input, output });

rl.on('line', async (data) => {
    try {
        const endCommandIndex = getEndCommandIndex(data);
        const command = endCommandIndex ? data.slice(0, endCommandIndex) : data.trim();
        const args = endCommandIndex ? data.slice(endCommandIndex + 1).split(' ').filter(item => item.trim()) : [];

        if (command === EXIT_COMMAND) {
            currentModules.exit(userName, ...args);
        }
        
        const fn = currentModules[command];
        if (!fn) {
            console.log(INVALID_INPUT);
            return;
        };
        await fn(...args);
        currentModules.path();
    } catch (error) {
        console.log(error.message === INVALID_INPUT ? INVALID_INPUT : OPERATION_FAILED);
    }
});

rl.on('close', currentModules.exit.bind(null, userName));
