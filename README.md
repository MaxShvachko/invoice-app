# Invoice Management App - README

## Overview
This is a **Vue.js** application that uses **Firebase Firestore** as the backend, with **Vue Router** for routing and **VueX** for state management. The app is built using **Vite.js** for a fast development experience and **NPM** for package management.

The main purpose of this application is to manage invoices, allowing users to create, edit, delete invoices, and change their status (draft, pending, paid).

## Key Features
- **Create Invoice**: Add a new invoice with necessary details.
- **Edit Invoice**: Modify existing invoice information.
- **Delete Invoice**: Remove invoices from the list.
- **Change Invoice Status**: Set the invoice status to one of the following:
  - **Draft**
  - **Pending**
  - **Paid**

## Prerequisites
- Node.js and NPM installed.
- Firebase project setup with Firestore.

## How to Start

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**:
   Install the required dependencies using NPM:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory and add the following environment variables from your Firebase project:

   ```bash
   VITE_API_KEY=<your-firebase-api-key>
   VITE_AUTH_DOMAIN=<your-firebase-auth-domain>
   VITE_PROJECT_ID=<your-firebase-project-id>
   VITE_STORAGE_BUCKET=<your-firebase-storage-bucket>
   VITE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
   VITE_APP_ID=<your-firebase-app-id>
   ```

4. **Start the App**:
   Run the app locally using Vite:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   To build the app for production, run:
   ```bash
   npm run build
   ```

## Firebase Configuration
The Firebase configuration is handled using environment variables. Below are the variables you need to configure:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
```

### Environment Variables:
- **VITE_API_KEY**: The Firebase API key for authentication.
- **VITE_AUTH_DOMAIN**: The Firebase Authentication domain.
- **VITE_PROJECT_ID**: The Firebase project ID.
- **VITE_STORAGE_BUCKET**: Firebase storage bucket.
- **VITE_MESSAGING_SENDER_ID**: Firebase messaging sender ID.
- **VITE_APP_ID**: Firebase app ID for identifying the app.

## Contributing
Feel free to fork the repository and submit pull requests for new features or bug fixes.
