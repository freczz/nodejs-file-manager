import { createReadStream, createWriteStream, access } from 'fs';
import { rm } from 'fs/promises';
import path, { basename } from 'path';

export async function mv(oldPath, newPath) {
    const fileName = basename(oldPath);
    const oldFullPath = path.resolve(this.cwd, oldPath);
    const newFullPath = path.resolve(this.cwd, newPath, fileName);
    access(newFullPath, async (error) => {
        if (error) {
            const readStream = createReadStream(oldFullPath, 'utf-8');
            const writeStream = createWriteStream(newFullPath);
            readStream.on('data', (data) => writeStream.write(data.toString()));
            await rm(oldFullPath);
        } else {
            throw new Error()
        }
    });
}
