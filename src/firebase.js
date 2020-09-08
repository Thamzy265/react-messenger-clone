import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDmfbvdDBu5ARFlAqI9XRLJ15XzywlowkE",
	authDomain: "react-messenger-clone-f451d.firebaseapp.com",
	databaseURL: "https://react-messenger-clone-f451d.firebaseio.com",
	projectId: "react-messenger-clone-f451d",
	storageBucket: "react-messenger-clone-f451d.appspot.com",
	messagingSenderId: "707821159618",
	appId: "1:707821159618:web:9b6a81f98730463c49a75b",
	measurementId: "G-3RRKWDM44S",
});

const db = firebaseApp.firestore();

export { db };
