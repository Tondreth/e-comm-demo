import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBRvzVIje2HAAvgQspIyjhDsCTKSm0Llak",
    authDomain: "e-comm-demo-db.firebaseapp.com",
    projectId: "e-comm-demo-db",
    storageBucket: "e-comm-demo-db.appspot.com",
    messagingSenderId: "562106228361",
    appId: "1:562106228361:web:94cfbfae0ddeaf4360b058",
    measurementId: "G-YT0J6B6872"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user ', error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase