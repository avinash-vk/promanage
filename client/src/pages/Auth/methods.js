import { auth, firebase } from '../firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export const googleSignin = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log("SIGNED IN",res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}

export const githubSignin = () => {
    auth.signInWithPopup(githubProvider).then((res) => {
        console.log("SIGNED IN",res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}
