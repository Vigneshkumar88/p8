        // script.js
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
const dbRef = ref(db)

        const ctx = document.getElementById('myChart').getContext('2d');

        let pid = 0;
        let projectName = null;
        let t1 = 0;
        let t2 = 0;
        let t3 = 0;
        let t4 = 0;
        let t5 = 0;

        // Data for the chart

        get(child(dbRef,'ProjectsList/'+'login')).then((snapshot)=>{
            if(snapshot.exists()){
                let data1 = snapshot.val()
                console.log(data1)
                pid = data1.project
                
            }
        }).then(()=>{

            get(child(dbRef,'ProjectsList/'+'projects')).then((snapshot)=>{
                if(snapshot.exists()){
                    let data2 = snapshot.val()
                    console.log(data2)
    
                    data2.shift()
                    for(let i of data2){
                        if(i.id == pid){
    
                            let pname = document.getElementsByClassName('pname')
                            let pdesc = document.getElementById('pdesc')

                            // console.log(pname)
                            
                            pname[0].innerHTML = i.projectName
                            pname[1].innerHTML = i.projectName
                            pdesc.innerHTML = i.projectDesc
                            t1 = i.task1
                            t2 = i.task2
                            t3 = i.task3
                            t4 = i.task4
                            t5 = i.task5
    
                        }
                    }
                }
            }).then(()=>{
    
                const data = {
                    labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'],
                    datasets: [{
                        data: [t1,t2,t3,t4,t5,5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                };
                
                // Configuration options
                const config = {
                    type: 'bar', // Specifies the type of chart
                    data: data,
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true // Start the y-axis at 0
                            }
                        }
                    }
                };
                
                // Render the chart
                const myChart = new Chart(ctx, config);
                
                
                //     function myFunction() {
                //   var x = document.getElementById("myDiv");
                //   if (x.style.display === "none") {
                //     x.style.display = "block";
                //   } else {
                //     x.style.display = "none";
                //   }
                // }
    
            })
    
            

        })

   