import { googleSignin } from '../auth/methods';

export const login = (args) => {
    googleSignin();
    console.log("login ",args);
}