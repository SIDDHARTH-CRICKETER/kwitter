//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data["message"];
like = message_data["like"];

name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>"
like_with_tag = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
spam_with_tag = "<span class='glyphicom glyphicom-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_with_tag + spam_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function update_like(firebase_message_id) {
      console.log("like button message id="+firebase_message_id);
      button_id = firebase_message_id;
      likes = document.getElementById(button_id).value;
      updated_like = Number(likes)+1;
      console.log(updated_like);
      firebase.database().ref(room_name).child(firebase_message_id).update({
            like:updated_like
      });
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("USER_NAME");
      window.location = "index.html";
}