import { createReadStream, createWriteStream } from "fs";
import { createBrotliDecompress } from "zlib";
import path from "path";

export async function decompress (oldPath, newPath) {
    const source = createReadStream(path.resolve(this.cwd, oldPath));
    const destination = createWriteStream(path.resolve(this.cwd, newPath));
    const ungzip = createBrotliDecompress();

    source.pipe(ungzip).pipe(destination);
};
