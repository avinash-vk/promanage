import inquirer from 'inquirer';
import API from '../api'; 

export const get = async (args) => {
    // TODO AUTHENTICATE THIS BRO
    const id = "9Jka8ovtPja2nwQCnRDyf5LtIqe2";

    let projects = (await API.getProjects(id)).data.projects;

    let choices = projects.map(project => project.title);
    let ids = projects.reduce((res,cur) => ({...res,[cur.title]:cur.id}),{});
    inquirer.prompt([
        {
            type:'list',
            name: 'project',
            message: 'Which project are you working on?',
            choices: choices,
        }
    ]).then(answers => {
        console.info('Answer',ids[answers.project])
    })
}