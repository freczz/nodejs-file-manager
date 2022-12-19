import { rename } from 'fs/promises';
import path, { dirname } from 'path';

export async function rn(filePath, newFileName) {
    const fileDirname = dirname(filePath);
    await rename(path.resolve(this.cwd, filePath), path.resolve(this.cwd, fileDirname, newFileName));
}
