importScripts('https://www.gstatic.com/firebasejs/7.15.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.3/firebase-messaging.js');
// import { environment } from '../environments/environment'

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
});
const messaging = firebase.messaging();

