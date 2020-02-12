import fire from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhEPVAFLjyMaCqdCFYPWFtko6X91TmPy8",
    authDomain: "udemgame.firebaseapp.com",
    databaseURL: "https://udemgame.firebaseio.com",
    projectId: "udemgame",
    storageBucket: "udemgame.appspot.com",
    messagingSenderId: "1078808621718",
    appId: "1:1078808621718:web:fe2470ce3ecbfc6aab88b7"
};

const firebase = fire.initializeApp(firebaseConfig);

export default firebase;