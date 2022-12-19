import { INVALID_INPUT } from '../../constants.js';

export function exit(userName, arg) {
    if (arg) {
        throw new Error(INVALID_INPUT);
    }
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
}
