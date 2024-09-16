 
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

///////////////////////// form validation //////////////////////////////////

let userId = null;

const form = document.forms['formss']
const val = form.elements[4]

val.addEventListener("click",(e)=>{
    
    e.preventDefault()

    const dbRef = ref(db)

    let users = null

    

    get(child(dbRef,'ProjectsList/'+'users')).then((snapshot)=>{
        if(snapshot.exists()){
          let data1 = snapshot.val()
          users = data1
    
          data1.forEach(x=>{
            userId = x.userId
          })
    
          console.log(userId)
          
          console.log(data1)

         }
      }).then(()=>{

        const username = document.getElementById("username")
        const email = document.getElementById("email")
        const password = document.getElementById("password")
        const cpassword = document.getElementById("confirmPassword")
        
        if(username.value=="" || email.value=="" || password.value=="" || cpassword.value==""){
            alert("Field should not be emty")
            
        }
        else if(password.value !== cpassword.value){
            alert("confirm password is not same as password")
        }
        else{
    
            let match = false
            let count = 0
    
            users.shift()
            console.log(users)

            for(let i of users){
                count++
                if(match==false){
                    console.log("///////////")
                    console.log(i.username)
                    console.log(username.value)
                    if(i.username == username.value){
                        alert("username already exists")
                        match = true
                    }
                    else if(i.email == email.value){
                        alert("email already exists")
                        match = true
                    }
          
                    console.log("///////////")
                }
            
            }
    
            if(count == users.length){
                if(match==false){
                    
                    userId++
                        set(ref(db,'ProjectsList/'+'users/'+userId),{
                            username:username.value,
                            email:email.value,
                            password:password.value,
                            userId:Number(userId)
                        })
                        .then(()=>{
                            console.log('data added successfully');
                        })
                        .then(()=>{form.submit()})
                        .catch((error)=>{
                            console.log(error)
                        })
                      
                }
                
            }
    
    
         for(let i of users){
            console.log(i.username)
         }
         if(match==false){
            alert("user created")
    
         }
         
            
        }

      })
    
})








