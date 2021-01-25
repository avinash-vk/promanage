import Conf from 'conf';
import inquirer from 'inquirer';
import API from '../api';

const config = new Conf();

export const login = (args) => {
    inquirer.prompt([
        {
            name: "creds",
            message: "Enter the login code copied from promanage:",
        }
    ]).then(async answers => {
        try{
            let res = await API.getUser(answers.creds);
            console.log("Logged in as",res.data.username);
            config.set("username",res.data.username);
            config.set("id", res.data.id);
        }
        catch(err){
            console.log("Oops enter a valid code!")
            return;
        }
    })
}