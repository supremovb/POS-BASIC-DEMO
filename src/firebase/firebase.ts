import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";


const firebaseConfig = {
apiKey: "AIzaSyDxoKkvce0cv0uMJi2MiNFNluNay4GQM3w",
  authDomain: "pos-basic.firebaseapp.com",
  projectId: "pos-basic",
  storageBucket: "pos-basic.firebasestorage.app",
  messagingSenderId: "934486302297",
  appId: "1:934486302297:web:61db09b6800312b0385b48"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Enable Firestore offline persistence
enableIndexedDbPersistence(db).catch(() => {});

// Helper for online status
export const isOnline = () => window.navigator.onLine;  