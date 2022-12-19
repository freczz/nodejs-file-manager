import { createReadStream, createWriteStream, access } from 'fs';
import path, { basename } from 'path';

export function cp(oldPath, newPath) {
    const fileName = basename(oldPath);
    const oldFullPath = path.resolve(this.cwd, oldPath);
    const newFullPath = path.resolve(this.cwd, newPath, fileName);
    access(newFullPath, (error) => {
        if (error) {
            const readStream = createReadStream(oldFullPath, 'utf-8');
            const writeStream = createWriteStream(newFullPath);
            readStream.on('data', (data) => writeStream.write(data));
        } else {
            throw new Error()
        }
    });
}
