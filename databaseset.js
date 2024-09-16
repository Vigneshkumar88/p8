import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove,update,get,set,child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0vdAcYxXeIpQ21kU3ZufS3MZMFtXV5E4",
  authDomain: "project-dev-tool.firebaseapp.com",
  projectId: "project-dev-tool",
  storageBucket: "project-dev-tool.appspot.com",
  messagingSenderId: "299640059082",
  appId: "1:299640059082:web:f1f0e9aa34d9dfaf477033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase()

let id = null;

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

      // let projectName1 = snapshot.val().projectName;
      // let projectDesc1 = snapshot.val().projectDesc;
      // let bar1 = snapshot.val().bar;
      // let id1 = snapshot.val().id;

      // for(let i of data1){
      //     console.log(i)
      // }

      // users.projectName = projectName1;
      // users.projectDesc = projectDesc1;
      // users.bar = bar1;
      // users.id = id1;

      
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

// let userId = 0;
// let username = "vk";
// let email = "vk@gmail.com";
// let password = "vk2000"

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