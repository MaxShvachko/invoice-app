// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, query, getDocs } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDO9KfCUkhEK2YJ2V8zP1F7ackooI8RDs",
  authDomain: "invoice-app-b89ec.firebaseapp.com",
  projectId: "invoice-app-b89ec",
  storageBucket: "invoice-app-b89ec.appspot.com",
  messagingSenderId: "44781000432",
  appId: "1:44781000432:web:9f48a95be3c316064d9435"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/**
 * Adds data to the Firestore database.
 * 
 * @param {Object} options - The options object.
 * @param {string} options.path - The path to the Firestore collection.
 * @param {Object} options.data - The data to be added to the Firestore collection.
 * @returns {Promise<DocumentReference>} A promise that resolves with the DocumentReference of the added document.
 */
export const addDataToDB = async ({ path, data }) => {
  try {
    return await addDoc(collection(db, path), data);
  } catch (error) {
    console.error("Error adding document: ", error);
    return error;
  }
}

/**
 * Adds data to the Firestore database.
 * 
 * @param {Object} options - The options object.
 * @param {string} options.path - The path to the Firestore collection.
 * @param {Object} options.data - The data to be added to the Firestore collection.
 * @returns {Promise<DocumentReference>} A promise that resolves with the DocumentReference of the added document.
 */
export const getMultipleData = async ({ path }) => {
  try {
    const q = query(collection(db, path));

    const querySnapshot = await getDocs(q);

    const result = [];

     querySnapshot.forEach((doc) => {
      result.push(doc.data());
    })

    return result;
  } catch (error) {
    return error;
  }
}
