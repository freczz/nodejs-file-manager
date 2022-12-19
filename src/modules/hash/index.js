import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import path from 'path';

export async function hash(filePath) {
    const data = await readFile(path.resolve(this.cwd, filePath), 'utf-8');
    const hash = createHash('sha256');
    hash.update(data);
    const hex = hash.digest('hex');
    console.log(hex);
}
