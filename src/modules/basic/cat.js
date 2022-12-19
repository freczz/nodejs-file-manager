import { createReadStream } from 'fs';
import path from 'path';

export function cat(filePath) {
    const readStream = createReadStream(path.resolve(this.cwd, filePath), 'utf-8');
    readStream.on('data', (chunk) => console.log(chunk.toString('utf-8')));
}
