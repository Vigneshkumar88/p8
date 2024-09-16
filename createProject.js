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
    

}

const form = document.forms['formss']
const val = form.elements[4]

console.log(form.elements[4])


val.addEventListener("click",(e)=>{
    e.preventDefault()

    const dbRef = ref(db)

    let userId = null
    let login = null

    get(child(dbRef,'ProjectsList/'+'login')).then((snapshot)=>{
      if(snapshot.exists()){

        userId = snapshot.val().userId
        login = snapshot.val().login

      }
    }).then(()=>{
      if(login){

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
            
            console.log(data1)
            for(let i in data1){
              console.log(i.projectName)
            }
          }
          else{
            console.log('user does not exist')
          }
        }).then(()=>{
          let projectTitle = document.getElementById('projectTitle').value
          let projectDescription = document.getElementById('projectDescription').value
          let members = document.getElementById('members').value
          let tasks = document.getElementById('tasks').value
          let bar = 0
  
          let userId = null
          get(child(dbRef,'ProjectsList/'+'login')).then((snapshot)=>{
              if(snapshot.exists()){
        
                userId = snapshot.val().userId
                console.log(userId)
        
              }
            }).then(()=>{
  
              id++
              console.log(userId)
              set(ref(db,'ProjectsList/'+'projects/'+id),{
                projectName:projectTitle,
                projectDesc:projectDescription,
                members:Number(members),
                tasks:Number(tasks),
                bar:Number(bar),
                id:Number(id),
                userId:Number(userId),
                task1:Number(0),
                task2:Number(0),
                task3:Number(0),
                task4:Number(0),
                task5:Number(0),
            })
            .then(()=>{
                console.log('data added successfully');
                form.submit()
            })
            .catch((error)=>{
                console.log(error)
            })
            })
  
  
        })
      

      }else{
        alert("Please login to create project")

      }
    })

   
})

