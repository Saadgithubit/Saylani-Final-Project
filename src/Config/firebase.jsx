import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, where, query, addDoc, getDoc, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import Swal from 'sweetalert2'

const firebaseConfig = {
    apiKey: "AIzaSyCoc-dAu8YphDOfm1RXrWWTl18VYvpMvxY",
    authDomain: "saylani-final-project-af57c.firebaseapp.com",
    projectId: "saylani-final-project-af57c",
    storageBucket: "saylani-final-project-af57c.appspot.com",
    messagingSenderId: "325761272723",
    appId: "1:325761272723:web:386dc19b733797afe8f666",
    measurementId: "G-YPP7JJS7BV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export async function register(userDetails) {
    const { fullName, email, password } = userDetails

    const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)

    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, { fullName, email, password });
    Swal.fire({
        title: "Good job!",
        text: "Register Successfull!",
        icon: "success"
    });

}

export async function logIn(userDetails) {
    const { email, password } = userDetails
  
    await signInWithEmailAndPassword(auth, email, password)
  
    Swal.fire({
      title: "Good job!",
      text: "Sign In Successfull!",
      icon: "success"
    });
  
  }