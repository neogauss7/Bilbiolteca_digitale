// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi94InqiQPmNe1ujCZ22HcXlb0e4vf7y4",
  authDomain: "theoremz-login.firebaseapp.com",
  projectId: "theoremz-login",
  storageBucket: "theoremz-login.appspot.com",
  messagingSenderId: "527958805167",
  appId: "1:527958805167:web:20658414672a2ca784a25a",
  measurementId: "G-0Z6EVRPDYH",
};
const blackList = ['luigi.miraglia006@gmail.com', 'wdlmqò@wdomqm.com']
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
// Set up our register function
function register() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Validate input fields
  if (validate_email(email) == false) {
    alert("L'email non è valida, riprova");
    return;
    // Don't continue running the code
  }
  if (document.getElementById("policy").checked == false) {
    alert("Ricorda di accettare il trattamento dei tuoi dati");
    return;
  }

  // Move on with Auth
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;
      location.href = "index.html";
      alert("Utente creato!!");
    })
    .then(() => {
      location.href = "index.html";
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;
    });
}

// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("La email non è valida oppure la password è errata");
    return;
    // Don't continue running the code
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;
      // DOne
    })
    .then(() => {
      alert('Login avvenuto con successo!')
      location.href = "index.html";
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;
    });
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      location.href = "index.html";
    })
    .catch(function (error) {
      // An error happened
    });
}
const loggedIn = function (user) {
  console.log(user.email + " is logged in!");
  if (document.querySelector('.account')) {
    document.querySelector('.account').classList.remove("invisible");
  }
  if (document.getElementById("login-button")) {
  document.getElementById("login-button").textContent = "Il mio account";
  document.getElementById("login-button").onclick = function () {
    location.href = "account.html";
  };}
};

auth.onAuthStateChanged((user) => {
  if (user) {
    if (window.location.href.indexOf("account.html") > -1) {
      document.getElementById("account-name").innerHTML = user.email;
    }
    if(document.querySelector('.switch')) {
    if (blackList.includes(user.email))
    {
      document.querySelector('.switch').classList.remove('invisible')
    } else console.log(false);

    }
    loggedIn(user);
  } else {
    console.log("User is logged out!");
  }
});

firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
