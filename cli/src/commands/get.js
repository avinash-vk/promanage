import inquirer from 'inquirer';
import { promises as fs } from 'fs';
import API from '../api'; 

const writeEnv = async (envString) => {
    try {
      await fs.writeFile('.env',envString);
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

export const get = async (args) => {
    // TODO AUTHENTICATE THIS BRO
    const id = "9Jka8ovtPja2nwQCnRDyf5LtIqe2";

    let projects = (await API.getProjects(id)).data.projects;

    let choices = projects.map(project => project.title);
    let ids = projects.reduce((res,cur) => ({...res,[cur.title]:{...cur}}),{});
    inquirer.prompt([
        {
            type:'list',
            name: 'project',
            message: 'Which project are you working on?',
            choices: choices,
        }
    ]).then(async answers => {
        console.info("Downloading env variables for ",answers.project);
        let project = ids[answers.project];
        let envString = "";
        if (!project.env){
            console.log("No env variables defined for this project! Update it at promanage")
        }
        else {
            project.env.forEach(variable => {
                envString+=variable.key+"="+variable.value+"\n";
            })
            await writeEnv(envString);
            console.info("✅ Done");
        }
    })
}