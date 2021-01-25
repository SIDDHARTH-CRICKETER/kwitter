
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAfHg19lzdIBhsQFiV-hDcwY2qtXLPguqw",
      authDomain: "kwitter-ca1ce.firebaseapp.com",
      databaseURL: "https://kwitter-ca1ce-default-rtdb.firebaseio.com",
      projectId: "kwitter-ca1ce",
      storageBucket: "kwitter-ca1ce.appspot.com",
      messagingSenderId: "70899047705",
      appId: "1:70899047705:web:ef9df9e08fd9b8073e3988",
      measurementId: "G-TBLDM0VVVS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("USER_NAME");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

   function addroom() {
         room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });
         localStorage.setItem("room_name",room_name);
         window.location = "kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name - "+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirect_to_room_name(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("USER_NAME");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}