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
const db = getFirestore(app);

// 1. Seleccionas los elementos (igual que en tu loginfire.js)
const inputNombreEvento = document.querySelector('#nombre-evento');
const inputDescripcion = document.querySelector('#descripcion');
const inputCarrera = document.querySelector('#carrera');
const inputGrupos = document.querySelector('#grupos');
const inputFechaInicio = document.querySelector('#fecha-inicio');
const inputFechaFin = document.querySelector('#fecha-fin');
const inputEquipos = document.querySelector('#equipos');
const inputParametros = document.querySelector('#parametros');

const formEvaluacion = document.querySelector('#form-evaluacion');


formEvaluacion.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        await addDoc(collection(db, "evaluaciones"), {
            nombreEvento: inputNombreEvento.value, 
            descripcion: inputDescripcion.value,
            carrera: inputCarrera.value,
            grupos: inputGrupos.value,
            fechaInicio: inputFechaInicio.value,
            fechaFin: inputFechaFin.value,
            equipos: inputEquipos.value,
            parametros: inputParametros.value,
            creadoEn: new Date()
        });

        alert('¡Evaluación guardada exitosamente!');
        formEvaluacion.reset();
    } catch (error) {
        console.error("Error al guardar: ", error);
    }
});