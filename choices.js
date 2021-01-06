// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC9x2dMZzfMyCF1grxjKRDbtaGakWqrxG4",
    authDomain: "chatter-cha.firebaseapp.com",
    projectId: "chatter-cha",
    storageBucket: "chatter-cha.appspot.com",
    messagingSenderId: "269480653417",
    appId: "1:269480653417:web:2e0157a58971beb811e8f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout() {
    window.location = "index.html"
  }
  function printName() {
    var name = localStorage.getItem("username");
    document.getElementById("name").innerHTML = name;
  }
