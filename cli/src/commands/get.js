import inquirer from 'inquirer';

export const get = async (args) => {
    inquirer.prompt([
        {
            type:'list',
            name: 'project',
            message: 'Which project are you working on?',
            choices: [
                'meraki',
                'this is great'
            ],
        }
    ]).then(answers => {
        console.info('Answer',answers.project)
    })
}