import path from 'path';
import { INVALID_INPUT } from '../../constants.js';

export function up(arg) {
    if (arg) {
        throw new Error(INVALID_INPUT);
    }
    this.cwd = path.resolve(this.cwd, '..');
};
