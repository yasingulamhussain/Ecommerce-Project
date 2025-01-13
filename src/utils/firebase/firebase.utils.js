import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAufRWkwg0Ey_c7ItSfWKMGSnFkysR3IQg",
    authDomain: "crwn-clothing-db-ea55b.firebaseapp.com",
    projectId: "crwn-clothing-db-ea55b",
    storageBucket: "crwn-clothing-db-ea55b.firebasestorage.app",
    messagingSenderId: "300483377651",
    appId: "1:300483377651:web:f0d4ae48b5a463cf0dba86"
  };


  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ 
    prompt: 'select_account' 
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth)=>{
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      });
      } catch(error){
        console.log('error creating user', error.message);
      }
  }
  return userDocRef;
}