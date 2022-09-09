import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {collection, doc, getFirestore, onSnapshot, setDoc} from 'firebase/firestore' 
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

export const addBook = async (data, id) => {
    try {
        await setDoc(doc(db, "books", id), data);
        toast.success("İşlem başarılı.")
    }
    catch (e) {
        toast.error("işlem başarısız.")
    }
}


onSnapshot(collection(db, 'books'), (doc) => {
    doc.docs.map(book => {
        return console.log(book.data()) // Verileri firestore dan alinip console yazdirildi
    })
})