import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { 
  getFirestore,
  collection, 
  addDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const InputCorreoLog = document.querySelector("#InputCorreoLog")
const InputContrasenaLog = document.querySelector("#InputContrasenaLog")
const btnLogin = document.querySelector("#btnLogin")


const firebaseConfig = {
    apiKey: "AIzaSyC2sqckugxFwTB1cSs8xTGMhOPR9uPYpHU",
  authDomain: "evaluame-34c70.firebaseapp.com",
  projectId: "evaluame-34c70",
  storageBucket: "evaluame-34c70.firebasestorage.app",
  messagingSenderId: "904553068661",
  appId: "1:904553068661:web:63521811763a82d700603c",
  measurementId: "G-2TQ3HK9RPE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

btnLogin.addEventListener("click", (e) => {
    e.preventDefault(); // <-- Esto evita que se recargue la página y se llene la URL

    signInWithEmailAndPassword(auth, InputCorreoLog.value, InputContrasenaLog.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login exitoso: " + user.email);
        // Aquí puedes redirigir a inicio.html si lo deseas

        window.location.href = "home.html";
    })
    .catch((error) => {
        console.error("Error en el login:", error.code, error.message);
    });
});