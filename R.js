const firebaseConfig = {
    apiKey: "AIzaSyB0SVG5NtzOGvKHtRhjLb8P0MEIRPdexaY",
    authDomain: "inem-play-nube-75ead.firebaseapp.com",
    projectId: "inem-play-nube-75ead",
    storageBucket: "inem-play-nube-75ead.appspot.com",
    messagingSenderId: "290494209807",
    appId: "1:290494209807:web:b959d73e59e86cebc0a87a",
    measurementId: "G-LQQXJZ4NXZ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const passwordResetForm = document.getElementById("password-reset-form");
const emailInput = document.getElementById("email");
const resetStatus = document.getElementById("reset-status");

passwordResetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;

  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      resetStatus.innerText = "Se ha enviado un enlace de recuperación a tu correo.";
    })
    .catch((error) => {
      resetStatus.innerText = "Error: " + error.message;
    });
});
