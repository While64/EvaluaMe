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

const InputUsuario = document.querySelector("#InputUsuario")
const InputCorreo = document.querySelector("#InputCorreo")
const InputContrasena = document.querySelector("#InputContrasena")
const btnRegistrar = document.querySelector("#btnRegistrar")
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

btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault(); // <-- Esto detiene el envío por defecto del formulario

    let usuario = InputUsuario.value;
    let correo = InputCorreo.value;
    let contrasena = InputContrasena.value;

    createUserWithEmailAndPassword(auth, correo, contrasena) // Nota: Firebase pide el correo y contraseña aquí
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuario registrado:", user);

        window.location.href = "login.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error:", errorCode, errorMessage);
    });
});

