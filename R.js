const firebaseConfig = {
  apiKey: "AIzaSyBya6-AGSpMj2EocYtMO_pIWXjJSTnAfxc",
  authDomain: "mmapp-65184.firebaseapp.com",
  projectId: "mmapp-65184",
  storageBucket: "mmapp-65184.appspot.com",
  messagingSenderId: "1033174081309",
  appId: "1:1033174081309:web:e825e4f34d415adae84bf4",
  measurementId: "G-E6XXYMXC3R"
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
