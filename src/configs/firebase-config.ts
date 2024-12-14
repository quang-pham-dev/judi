import { initializeApp } from 'firebase/app'
import { initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
}

export const FIREBASE_APP = initializeApp(firebaseConfig)

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  // TODO
  // persistence:
})
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
