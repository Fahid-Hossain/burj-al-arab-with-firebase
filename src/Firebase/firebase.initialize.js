import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebaseConfig=()=>{
    return initializeApp(firebaseConfig);
} 
export default initializeFirebaseConfig;