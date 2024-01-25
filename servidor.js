const express = require('express')
import { initializeApp } from "firebase/app";
const app = express()
const port = 6000

// Conexion a la db en Firebase

const firebaseConfig = {
  apiKey: "AIzaSyDNzauc-MGrGOBT5KfMd04xTkQTdAdNpA8",
  authDomain: "crud-koaa1.firebaseapp.com",
  projectId: "crud-koaa1",
  storageBucket: "crud-koaa1.appspot.com",
  messagingSenderId: "227679993354",
  appId: "1:227679993354:web:16820df88af81241a6a9f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

app.get('/', (req, res) => {
    res.send('Respuesta de Raiz')
})

app.get('/contacto', (req, res) => {
    res.send('Servidor Escuchando: ', port)
})