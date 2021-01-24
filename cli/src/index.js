import minimist from 'minimist';

import { get } from './commands/get';
import { version } from './commands/version';
import { help } from './commands/help';
import { config } from './commands/config';

export const main = async (args) => {
    args = minimist(args.slice(2));
    let cmd = args._[0] || 'help';

    if (args.version || args.v) {
        cmd = 'version';
    }

    if (args.help || args.h) {
        cmd = 'help';
    }

    switch (cmd) {
        case 'version':
            version(args);
            break;

        case 'help':
            help(args);
            break;

        case 'get':
            get(args);
            break;

        case 'config':
            config(args);
            break;

        default:
            console.error(`"${cmd}" is not a valid command!`);
            break;
    }
}