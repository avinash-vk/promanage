import { auth } from './index';
import axios from 'axios';

const API_KEY = "AIzaSyDYj9q7KlwQ6jwxHeufIoDIb7K0S_VyDBs";
const ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${API_KEY}`;

let googleParams = {

}
export const googleSignin = () => ({
    requestUri:"http://localhost",
    postBody:"id_token=112981429083225774705&providerId=google.com"
})

export const githubSignin = () => {
    auth().signInWithPopup(githubProvider).then((res) => {
        console.log("SIGNED IN",res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}

export const signOut = () => {
    auth().signOut();
}