import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyCda66shWHrqi4Z16veHnto5nCPX_32vbg",
	authDomain: "react-recipe3000.firebaseapp.com",
	projectId: "react-recipe3000",
	storageBucket: "react-recipe3000.appspot.com",
	messagingSenderId: "519011574130",
	appId: "1:519011574130:web:59b43637c4ff42e4703deb",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
