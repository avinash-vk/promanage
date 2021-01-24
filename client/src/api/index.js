import axios from 'axios';
import URLS from './urls';

const Projects = {
    getProject : async (id) => (await axios.get(URLS.project(id))).data,
    updateProject : async (id,params) => (await axios.put(URLS.project(id),params)).data,
    deleteProject : async (id) => (await axios.delete(URLS.project(id))).data,
    createProject : async (id,params) => (await axios.post(URLS.createProject(),params)).data,
    getProjectForUser : async (id) => (await axios.get(URLS.getProjects(id))).data,
}

const Env = {
    getEnv : async (id) => (await axios.get(URLS.getEnv(id))).data,
    deleteEnv : async (id, key) => (await axios.put(URLS.deleteEnvPair(id,key))).data,
    addEnv : async (id,params) => (await axios.put(URLS.addEnv(id),params)).data,
}

let API;
export default API = {
    ...Projects,
    ...Env
}