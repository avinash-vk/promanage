import axios from 'axios';
import URLS from './urls';

const Projects = {
    getProject : async (id) => (await axios.get(URLS.project(id))).data,
    updateProject : async (id,params) => (await axios.put(URLS.project(id),params)).data,
    deleteProject : async (id) => (await axios.delete(URLS.project(id))).data,
    createProject : async (id,params) => (await axios.post(URLS.createProject(),params)).data,
    getProjectForUser : async (id) => (await axios.get(URLS.getProjects(id))).data,
    importProject : async (username) => (await axios.get(URLS.importProject(username))).data
}

const Env = {
    getEnv : async (id,token) => { console.log(token);return (await axios.get(URLS.getEnv(id),{headers:{Authorization: `Bearer ${token}`}})).data},
    deleteEnv : async (id, key, token) => (await axios.put(URLS.deleteEnvPair(id,key),{headers:{Authorization: `Bearer ${token}`}})).data,
    addEnv : async (id, params, token) => (await axios.put(URLS.addEnv(id),params,{headers:{Authorization: `Bearer ${token}`}})).data,
}

let API;
export default API = {
    ...Projects,
    ...Env
}