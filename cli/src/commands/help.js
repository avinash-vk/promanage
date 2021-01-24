import chalk from 'chalk';

const menus = {
  main: `
    ${chalk.greenBright('promanage [command] <options>')}
    ${chalk.blueBright('get')} ................ get your env for your specified project
    ${chalk.blueBright('config')}.............. login to your promanage account
    ${chalk.blueBright('version')} ............ show package version
    ${chalk.blueBright('help')} ............... show help menu for a command
  `,

  get:`
    //....
  `,

  config: `//...
        `,
}

export const help = (args) => {
    const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
    console.log(menus[subCmd] || menus.main)
}