 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getDatabase, ref, push, onValue, remove,update,get,set,child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

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


const form = document.forms["login"]
const val = form.elements[2]


val.addEventListener("click",(e)=>{
    e.preventDefault()
    const username = document.getElementById('userinput')
    const password = document.getElementById('passinput')

    let count = 0
    let users = null

    const dbRef = ref(db)
    get(child(dbRef,'ProjectsList/'+'users')).then((snapshot)=>{
        if(snapshot.exists()){
          let data1 = snapshot.val()
          users = data1
    
    
          data1.forEach(d=>{
              // createCard(d.projectName,d.projectDesc,"d",0,0,d.bar)
          })
          console.log(users)
          console.log(data1)
          users.shift()
          for(let i of users){
            console.log(i.username)
          }
        }
        else{
          console.log('user does not exist')
        }
      }).then(()=>{

        for(let i of users){
            count++
    
    
            if(i.username == username.value && i.password == password.value ){
           
              
              update(ref(db,'ProjectsList/'+'login'),{
                login:1,
                userId:i.userId
              })
                form.submit()
                console.log("form submited")
                break
    
    
            }
            else{
                if(count == users.length){
                    console.log(count)
                    alert("username or password not correct")
    
                }
                
            }
        }

      })


})