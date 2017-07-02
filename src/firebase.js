import firebase from 'firebase'

export const config = {
  apiKey: "AIzaSyAuNvW4eHAHFG2sXy3jbzr1-bcfdeXwAPE",
  authDomain: "pick-of-the-week.firebaseapp.com",
  databaseURL: "https://pick-of-the-week.firebaseio.com",
  projectId: "pick-of-the-week",
  storageBucket: "pick-of-the-week.appspot.com",
  messagingSenderId: "789369519366",
}

export const app = firebase.initializeApp(config)

export const database = firebase.database()
