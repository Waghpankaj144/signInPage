// setting the firebase

   const firebaseApp = firebase.initializeApp({ 
   apiKey: "AIzaSyDBqlkSY2KpHDm8OLGPytk0vMSh-bxhslM",
   authDomain: "signin-page-e6e28.firebaseapp.com",
   projectId: "signin-page-e6e28",
   storageBucket: "signin-page-e6e28.appspot.com",
   messagingSenderId: "239932473974",
   appId: "1:239932473974:web:3bcafe0ede16ea2f139557"
   });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();


// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}