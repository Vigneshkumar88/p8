 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getDatabase, ref, push, onValue, remove,update,get,set,child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCZhtS65dScTJ2EzzB_E6GFxV8XgfCGaxk",
   authDomain: "project-management-tool-83332.firebaseapp.com",
   databaseURL: "https://project-management-tool-83332-default-rtdb.firebaseio.com",
   projectId: "project-management-tool-83332",
   storageBucket: "project-management-tool-83332.appspot.com",
   messagingSenderId: "58452283996",
   appId: "1:58452283996:web:1b5907c80c6bd64f6c4c99"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);



 
const db = getDatabase()

let id = null;

window.onload = ()=>{
    RetData()

}

let gedata = document.getElementById('x')

gedata.addEventListener('click',RetData)

function RetData(){
  const dbRef = ref(db)

  const users={
      projectName:null,
      projectDesc:null,
      bar:null,
      id:null
  }
  
  get(child(dbRef,'ProjectsList/'+'projects')).then((snapshot)=>{
    if(snapshot.exists()){
      let data1 = snapshot.val()

      data1.forEach(x=>{
        id = x.id
      })

      console.log(id)
      
      data1.forEach(d=>{
          // createCard(d.projectName,d.projectDesc,"d",0,0,d.bar)
      })
      console.log(users)
      console.log(data1)
      for(let i in users){
        console.log(i.projectName)
      }
    }
    else{
      console.log('user does not exist')
    }
  })
}

let pname = "web desing"
let pdesc = "for xyz company"
let bar = 50




let but = document.getElementById('c')
but.addEventListener("click",add)

function add(){
  id++
  set(ref(db,'ProjectsList/'+'projects/'+id),{
      projectName:pname,
      projectDesc:pdesc,
      bar:Number(bar),
      id:Number(id)
  })
  .then(()=>{
      console.log('data added successfully');
  })
  .catch((error)=>{
      console.log(error)
  })
}

let userId = 0;
let username = "vk";
let email = "vk@gmail.com";
let password = "vk2000"

// function adduser(){
//     userId++
//     set(ref(db,'ProjectsList/'+'users/'+userId),{
//         username:username,
//         email:email,
//         password:password,
//         userId:Number(userId)
//     })
//     .then(()=>{
//         console.log('data added successfully');
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//   }