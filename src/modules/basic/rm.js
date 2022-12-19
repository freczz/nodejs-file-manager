import { rm as remove } from 'fs/promises';
import path from 'path';

export async function rm(filePath) {
    await remove(path.resolve(this.cwd, filePath));
}
