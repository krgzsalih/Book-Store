import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { addDoc, collection, getFirestore, onSnapshot } from 'firebase/firestore'
import { toast } from 'react-toastify'

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const auth = getAuth(app)
export default app
export const db = getFirestore(app)




export const addBook = async data => {

    let equal = null

    onSnapshot(collection(db, 'books'), (doc) => {
        doc.docs.forEach( async book => {
            return await book.data().uid === data.uid ? equal = true : equal = false
        })
    })

    myPromise(data, equal)
    
}

const myPromise = async (data, equal) => {
    if (equal === false) {
        try {
            await addDoc(collection(db, 'books'), data)
            toast.success("Successful")
        }
        catch (e) {
            toast.error(e.code)
            console.log("catch", equal)
        }
    }
    else {
        console.log("else", equal)
        toast.error("This Book Include Your Library")
    }

}


onSnapshot(collection(db, 'books'), (doc) => {
    doc.docs.map(book => {
        return console.log(book.data().uid) // Verileri firestore dan alinip console yazdirildi
    })
})