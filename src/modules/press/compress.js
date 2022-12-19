import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress } from "zlib";
import path from "path";

export async function compress (oldPath, newPath) {
    const source = createReadStream(path.resolve(this.cwd, oldPath));
    const destination = createWriteStream(path.resolve(this.cwd, newPath));
    const gzip = createBrotliCompress();

    source.pipe(gzip).pipe(destination);
};
