import axios from 'axios';
import URL from './urls';

const Projects = {
    getProject = async (id) => await axios.get(URL.project(id)),
    updateProject = async (id,params) => await axios.put(URL.project(id),params),
    deleteProject = async (id) => await axios.delete(URL.project(id)),
    createProject = async (id,params) => await axios.post(URL.createProject,params),
    getProjectForUser = async (id) => await axios.get(URL.getProjects(id)),
}

export default API = {
    ...Projects
}