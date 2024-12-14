import { FIREBASE_DB } from '@/configs/firebase-config'
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  orderBy,
  where,
  limit,
} from 'firebase/firestore'

class FirebaseManager {
  async getDocument(collectionName: string, docId: string): Promise<any> {
    try {
      const docRef = doc(FIREBASE_DB, collectionName, docId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      } else {
        console.log('No such document!')
        return null
      }
    } catch (error) {
      throw error
    }
  }

  async getAllDocuments(collectionName: string): Promise<any[]> {
    try {
      const collRef = collection(FIREBASE_DB, collectionName)
      const querySnapshot = await getDocs(collRef)
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      throw error
    }
  }

  async getOrderedDocuments(
    subCollectionPath: string,
    orderByField: string,
  ): Promise<any[]> {
    try {
      const subCollRef = collection(FIREBASE_DB, subCollectionPath)
      const orderedQuery = query(
        subCollRef,
        orderBy(orderByField, 'asc'),
        limit(100),
      )
      const querySnapshot = await getDocs(orderedQuery)
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      throw error
    }
  }

  async getFilteredAndOrderedDocuments(
    subCollectionPath: string,
    whereField: string,
    whereValue: any,
    orderByField: string,
    orderDirection: 'asc' | 'desc',
    maxResults: number,
  ): Promise<any[]> {
    try {
      const subCollRef = collection(FIREBASE_DB, subCollectionPath)
      const filteredAndOrderedQuery = query(
        subCollRef,
        where(whereField, '==', whereValue),
        orderBy(orderByField, orderDirection),
        limit(maxResults),
      )
      const querySnapshot = await getDocs(filteredAndOrderedQuery)
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      throw error
    }
  }

  async getFilteredDocuments(
    subCollectionPath: string,
    whereField: string,
    whereValue: any,
  ): Promise<any[]> {
    try {
      const subCollRef = collection(FIREBASE_DB, subCollectionPath)
      const filteredQuery = query(
        subCollRef,
        where(whereField, '==', whereValue),
      )
      const querySnapshot = await getDocs(filteredQuery)
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      throw error
    }
  }

  async addDocument(collectionName: string, data: any): Promise<void> {
    try {
      const collRef = collection(FIREBASE_DB, collectionName)
      await setDoc(doc(collRef), data)
    } catch (error) {
      throw error
    }
  }

  async updateDocument(
    collectionName: string,
    docId: string,
    data: any,
  ): Promise<void> {
    try {
      const docRef = doc(FIREBASE_DB, collectionName, docId)
      await updateDoc(docRef, data)
    } catch (error) {
      throw error
    }
  }

  async deleteDocument(collectionName: string, docId: string): Promise<void> {
    try {
      const docRef = doc(FIREBASE_DB, collectionName, docId)
      await deleteDoc(docRef)
    } catch (error) {
      throw error
    }
  }
}

export default FirebaseManager
