import axios from 'axios';

let production=false;
const ENDPOINT = production ? "https://promanage-api.herokuapp.com/api/v1" : "http://localhost:6969/api/v1";

const API = {
    getEnv : async (id) => (await axios.get(`${ENDPOINT}/envs/env/${id}`)).data,
    getProjects : async (id) => (await axios.get(`${ENDPOINT}/projects/user/${id}`)).data,
}

export default API;