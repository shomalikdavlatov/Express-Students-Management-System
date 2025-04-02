import fs from 'node:fs/promises';
import path from 'node:path';


export default class Io {
    constructor() {
        this.rootPath = path.join(process.cwd(), "src", 'data');
    }
    async readFile(fileName) {
        const result = await fs.readFile(path.join(this.rootPath, fileName), 'utf-8');
        return JSON.parse(result);
    }
    async writeFile(fileName, data) {
        await fs.writeFile(path.join(this.rootPath, fileName), JSON.stringify(data, null, 2), 'utf-8');
    }
}

