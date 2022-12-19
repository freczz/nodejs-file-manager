import { readdir } from 'fs/promises';
import { TYPE_NAMES, INVALID_INPUT } from '../../constants.js';

export async function ls(arg) {
    if (arg) {
        throw new Error(INVALID_INPUT);
    }
    const lsData = await readdir(this.cwd, { withFileTypes: true });

    const sortItems = (a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1;

    const directories = lsData
        .filter(item => item.isDirectory())
        .sort(sortItems)
        .map(item => ({ Name: item.name, Type: TYPE_NAMES.directory }));

    const files = lsData
        .filter(item => item.isFile())
        .sort(sortItems)
        .map(item => ({ Name: item.name, Type: TYPE_NAMES.file }));

    console.table([...directories, ...files]);
}
