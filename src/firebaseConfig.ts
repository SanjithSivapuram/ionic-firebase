import firebase from 'firebase/app';
import { toast } from './toast';
require('firebase/auth'); // required to use authentication

const config = {
    apiKey: "AIzaSyCwAKqUtHILQH3VRyXAQw1gBRkX_U8hdCE",
    authDomain: "ionic-firebase-d1198.firebaseapp.com",
    projectId: "ionic-firebase-d1198",
    storageBucket: "ionic-firebase-d1198.appspot.com",
    messagingSenderId: "883958184205",
    appId: "1:883958184205:web:3caf92bb204e55d7a49844",
    measurementId: "G-YCPNLN1VS2"
};

firebase.initializeApp(config);

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                resolve(user)
            }
            else {
                resolve(null)
            }
            unsubscribe()
        })
    })
}

export function logoutUser() {
    return firebase.auth().signOut();
}

export async function loginUser(username: string, password: string) {
    const email = `${username}@codedamn.com`;
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(res);
        return res;
    } catch (error) {
        toast(error.message, 4000);
        return false;
    }
    // authenticate with firebase
    // if present show dashboard
    // if not show error

}

export async function registerUser(username: string, password: string) {
    const email = `${username}@codedamn.com`;
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(res);
        return true;
    } catch (error) {
        toast(error.message, 4000);
        return false;
    }
}