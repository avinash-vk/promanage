import axios from 'axios';
import URL from './urls';

const Projects = {
    getProject : async (id) => (await axios.get(URL.project(id))).data,
    updateProject : async (id,params) => (await axios.put(URL.project(id),params)).data,
    deleteProject : async (id) => (await axios.delete(URL.project(id))).data,
    createProject : async (id,params) => (await axios.post(URL.createProject(),params)).data,
    getProjectForUser : async (id) => (await axios.get(URL.getProjects(id))).data,
}

const Env = {
    getEnv : async (id) => (await axios.get(URL.getEnv(id))).data,
    deleteEnv : async (id, key) => (await axios.put(URL.deleteEnvPair(id,key))).data,
    addEnv : async (id,params) => (await axios.put(URL.addEnv(id),params)).data,
}

let API;
export default API = {
    ...Projects,
    ...Env
}