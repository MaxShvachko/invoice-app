import { initializeApp } from "firebase/app";
import {
  doc,
  query, 
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
  collection, 
  getFirestore, 
 } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID,
};

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
    return error;
  }
}

/**
 * Delete document from the Firestore database.
 * 
 * @param {Object} options - The options object.
 * @param {string} options.path - The path to the Firestore collection.
 * @param {string} options.docId - The docId of the Firestore document.
 */
export const deleteDataFromDB = async ({ path, docId }) => {
  try {
    return await deleteDoc(doc(db, path, docId));
  } 
  catch (error) {
    return error;
  }
};

/**
 * Update data in the Firestore database.
 * 
 * @param {Object} options - The options object.
 * @param {string} options.path - The path to the Firestore collection.
 * @param {string} options.docId - The docId of the Firestore document.
 * @param {Object} options.data - The data for update.
 */
export const updateData = async ({ path, docId, data }) => {
  try {
    return await setDoc(doc(db, path, docId), data, { merge: true });   
  } catch (error) {
    return error;
  }
};

/**
 * Adds data to the Firestore database.
 * 
 * @param {Object} options - The options object.
 * @param {string} options.path - The path to the Firestore collection.
 */
export const getMultipleData = async ({ path }) => {
  try {
    const q = query(collection(db, path));

    const querySnapshot = await getDocs(q);

    const result = [];

     querySnapshot.forEach((doc) => {
      result.push({
        docId: doc.id,
        ...doc.data()
      });
    })

    return result;
  } catch (error) {
    return error;
  }
}
