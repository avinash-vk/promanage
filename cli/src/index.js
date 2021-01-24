import minimist from 'minimist';

export const main = async (args) => {
    const argsObj = minimist(args.slice(2));
    console.log(argsObj);
}