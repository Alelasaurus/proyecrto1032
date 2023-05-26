//AGREGA TUS ENLACES DE FIREBASE AQUÍ
var firebaseConfig = {
     apiKey: "AIzaSyA_vD3SHlhQupPLb3Zaz3Kb226enfZiL8Y",
     authDomain: "comida2-92d1f.firebaseapp.com",
     databaseURL: "https://comida2-92d1f-default-rtdb.firebaseio.com",
     projectId: "comida2-92d1f",
     storageBucket: "comida2-92d1f.appspot.com",
     messagingSenderId: "294495586205",
     appId: "1:294495586205:web:586382b42a7975c9419174"
   };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="te damos la bienvenida "+user_name;
   
function getData()
{firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
 {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Inicia el código
     console.log("nombre de la sala "+Room_names);
     row="<div class='room_names' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
 //Finaliza el código
     });});}
getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
           purpose:"agregando nombre de la sala"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="index.html";
}
