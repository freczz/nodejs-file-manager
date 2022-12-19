import path from 'path';
import { stat } from 'fs/promises';

export async function cd(userPath) {
    const newPath = path.resolve(this.cwd, userPath);
    const isPathExists = await stat(newPath);
    this.cwd = newPath;
}
