const production = false;

const ENDPOINT = process.env.PRODUCTION ? "https://promanage-api.herokuapp.com/api/v1" : "http://localhost:6969/api/v1";

const projectURL = {
    project:(id) => `${ENDPOINT}/projects/project/${id}`,
    getProjects:(id) => `${ENDPOINT}/projects/user/${id}`,
    createProject:() => `${ENDPOINT}/projects/new`,
    importProject :(username) => `https://api.github.com/users/${username}/repos`
}

const envURL = {
    addEnv: (id) => `${ENDPOINT}/envs/env/${id}`,
    deleteEnv: (id) => `${ENDPOINT}/envs/env/remove/${id}`,
    deleteEnvPair: (id, key) => `${ENDPOINT}/envs/env/remove/${id}/${key}`,
    getEnv: (id) => `${ENDPOINT}/envs/env/${id}`
}
let URLS;
export default URLS = {
    ...projectURL,
    ...envURL
}