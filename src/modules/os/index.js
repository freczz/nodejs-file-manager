import { EOL, cpus, homedir, hostname, arch } from 'os';
import { OS_ARGS, INVALID_INPUT } from "../../constants.js";

export function os(arg) {
    switch(arg) {
        case OS_ARGS.eol:
            console.log(JSON.stringify(EOL));
            break;
        case OS_ARGS.cpus:
            const cpusItems = cpus();
            console.log('amount: ', cpusItems.length);
            console.log(cpusItems.map(item => ({model: item.model, clock_rate: `${item.speed}MGz`})));
            break;
        case OS_ARGS.homedir:
            console.log(homedir());
            break;
        case OS_ARGS.username:
            console.log(hostname());
            break;
        case OS_ARGS.architecture:
            console.log(arch());
            break;
        default:
            throw new Error(INVALID_INPUT);
    }
}
