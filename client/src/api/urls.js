const production = false;

const ENDPOINT = process.env.PRODUCTION ? "https://promanage-api.herokuapp.com/api/v1" : "http://localhost:6969/api/v1";

const projectURL = {
    project:(id) => `${ENDPOINT}/projects/project/${id}`,
    getProjects:(id) => `${ENDPOINT}/projects/user/${id}`,
    createProject:() => `${ENDPOINT}/projects/new`,
}

export default URL = {
    ...projectURL,
}