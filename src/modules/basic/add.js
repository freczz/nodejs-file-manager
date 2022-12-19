import { writeFile } from 'fs/promises';
import { access } from 'fs';
import path from 'path';

export async function add(fileName) {
    const currentPath = path.resolve(this.cwd, fileName)
    access(currentPath, async (error) => {
        if (error) {
            await writeFile(currentPath, '', 'utf-8');
        } else {
            throw new Error()
        }
    })
    
}
