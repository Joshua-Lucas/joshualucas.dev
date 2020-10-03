import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCE3IOAP1XrO7bfiI3ckVSOJn0smxYdrCg',
  authDomain: 'joshualucas-porfolio.firebaseapp.com',
  databaseURL: 'https://joshualucas-porfolio.firebaseio.com',
  projectId: 'joshualucas-porfolio',
  storageBucket: 'joshualucas-porfolio.appspot.com',
  messagingSenderId: '2307884463',
  appId: '1:2307884463:web:569bf0d1178e020a5f9b5a',
  measurementId: 'G-QFZ32LNGMG',
}

// Initialize Firebase
// if (typeof window !== 'undefined' && !firebase.apps.length) {
//   //   // To enable analytics. https://firebase.google.com/docs/analytics/get-started
//   //   // if ('measurementId' in config) firebase.analytics()
// }
var app = firebase.initializeApp(config)

export const firestore = app.firestore()

export default firebase
