import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove,update,get,set,child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";


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




window.onload = function(){
    
    // g()
    RetData()

}



let loginE = document.getElementById('login')

loginE.addEventListener("click",(e)=>{

    if(loginE.childNodes[1].innerHTML == "logout"){
        update(ref(db,'ProjectsList/'+'login'),{

            login:0,
            userId:0
          }).then(()=>{

            location.reload()

        })

          e.preventDefault()


    }

})

let pdata = null

let def = 0
let def2 =0
let count2 = null
let h11 = 0
let pId1 = null
let p ;

let myp = false

const myp2 = document.getElementById("myP")

myp2.addEventListener("click",(e)=>{
    myp = true
    RetData()
})

function RetData(){
    const dbRef = ref(db)

    const users={
        projectName:null,
        projectDesc:null,
        bar:null,
        id:null
    }

    let id = 1
    let userId = null
    let login = null



    get(child(dbRef,'ProjectsList/'+'login')).then((snapshot)=>{
        if(snapshot.exists()){
  
          userId = snapshot.val().userId
          login = snapshot.val().login
        }
      }).then(()=>{

        
          if(login){

            loginE.childNodes[1].innerHTML = "logout"

      }

      })

      get(child(dbRef,'ProjectsList/'+'projects')).then((snapshot)=>{
      if(snapshot.exists()){
        let data1 = snapshot.val()
        pdata = data1
        pdata.shift()
        console.log(pdata)
        let lg = false
        let lgdef = true


        
        data1.forEach(d=>{

            let count2 = 0
            if(login&&myp){

                
                if(userId==d.userId){
                    
                    if(data1.length==count2){
                        

                    }
                    const div1 = document.getElementsByClassName('div1')
                    const div2 = document.getElementsByClassName('div2')
                    if(def == 0){

                        while(div1.length>0){
                            
                            c.removeChild(div1[0])
            
                        }
                    

                        
                        let t1 = 0
                        let t2 = 0
                        let t3 = 0
                        let t4 = 0
                        let t5 = 0
                        if(d.task1){
                            t1 = d.task1
                        }
                        if(d.task2){
                            t2 = d.task2
                        }
                        if(d.task3){
                            t3 = d.task3
                        }
                        if(d.task4){
                            t4 = d.task4
                        }
                        if(d.task5){
                            t5 = d.task5
                        }
                        let total =t1+t2+t3+t4+t5
                        let val = 0
        
                        function calculatePercentage(value, maxValue) {
                            // return (value / maxValue) * 100;
                            val = (value / maxValue) * 100;
                            console.log(val)
                          }
                        
                          calculatePercentage(total,50)

                    createCard(d.projectName,d.projectDesc,"d",0,0,val,d.id)
                    }

                    if(def == 1){

                        while(div2.length>0){
                            
                            c.removeChild(div2[0])
            
                        }
                    

                        
                        let t1 = 0
                        let t2 = 0
                        let t3 = 0
                        let t4 = 0
                        let t5 = 0
                        if(d.task1){
                            t1 = d.task1
                        }
                        if(d.task2){
                            t2 = d.task2
                        }
                        if(d.task3){
                            t3 = d.task3
                        }
                        if(d.task4){
                            t4 = d.task4
                        }
                        if(d.task5){
                            t5 = d.task5
                        }
                        let total =t1+t2+t3+t4+t5
                        let val = 0
        
                        function calculatePercentage(value, maxValue) {
                            // return (value / maxValue) * 100;
                            val = (value / maxValue) * 100;
                            console.log(val)
                          }
                        
                          calculatePercentage(total,50)

                    createCard(d.projectName,d.projectDesc,"fc",0,0,val,d.id)
                    }


                }
            }else{

                if(myp){

                    if(!login){
                        if(lg==false){
                            alert('Please Login')
                        }
                        
                        lg = true
                        
                    }

                    if(def == 0){

                        // if(lg == true && lgdef == true){
                        //     alert('def0')
                        //     const div1 = document.getElementsByClassName('div1')
                           
    
                        //     while(div1.length>0){
                                
                        //         c.removeChild(div1[0])
                
                        //     }
                        //     alert('def finished')

                        // }
                    }

                    if(def == 1){
                        // alert('def1')
                        const div2 = document.getElementsByClassName('div2')

                        if(h11 == 1){
                            const h1 = document.getElementsByClassName("h1")
            
                            while(h1.length>0){
                                c.removeChild(h1[0])
                            }
                            h11 = 0
                            
            
                        }
    
                        while(div2.length>0){
                            
                            c.removeChild(div2[0])
            
                        }
                        def = 0
                        lgdef = false
                    }

                }

                

                let t1 = 0
                let t2 = 0
                let t3 = 0
                console.log(t3)
                let t4 = 0
                let t5 = 0
                if(d.task1){
                    t1 = d.task1
                }
                if(d.task2){
                    t2 = d.task2
                }
                if(d.task3){
                    t3 = d.task3
                }
                if(d.task4){
                    t4 = d.task4
                }
                if(d.task5){
                    t5 = d.task5
                }
                let total =t1+t2+t3+t4+t5
                let val = 0

                function calculatePercentage(value, maxValue) {
                    // return (value / maxValue) * 100;
                    val = (value / maxValue) * 100;
                    console.log(val)
                  }
                
                  calculatePercentage(total,50)




                //   alert('c')
                
                if(lg==true && lgdef==true){
                    
                }else{
                    createCard(d.projectName,d.projectDesc,"d",0,0,val,d.id)
                }
                
            }

            count2++
            
            
        })
        
        console.log(data1)
        const pId2 = document.getElementsByClassName("view")
        console.log(pId2)
        pId1 = pId2
        console.log(pId1[0].name)
        p = pId1[0]
        
        

        for(let i = 0;i<pId1.length;i++){
            pId1[i].addEventListener("click",(e)=>{
                console.log(e.target.name)
                let pid = 0
                pid = e.target.name
                update(ref(db,'ProjectsList/'+'login'),{
                    project:Number(pid)
                    
                  })
            })

        }

      }
      else{
        console.log('user does not exist')
      }
    })
}
console.log(p)






function createCard(projectName,projectDesc,c1,num,count,bar,id){
    // alert(c1)
    console.log("c called")
    const div1 = document.createElement("div")
    div1.setAttribute("class","col-md-4 div1")
    if(c1 == "fc"){
        div1.setAttribute("class","col-md-4 div2")

    }
    

    const card = document.createElement("div")
    card.setAttribute("class","card mb-4 shadow-sm")

    const card_body = document.createElement("div")
    card_body.setAttribute("class","card-body box")

    const card_title = document.createElement("h5")
    card_title.setAttribute("class","card-title")
    const cttext = document.createTextNode(projectName)
    card_title.appendChild(cttext)

    const card_text = document.createElement("p")
    card_text.setAttribute("class","card-text")
    const cttext2 = document.createTextNode(projectDesc)
    card_text.appendChild(cttext2)

    const progress = document.createElement('div')
    progress.setAttribute("class","progress")

    const progressBar = document.createElement('div')
    progressBar.setAttribute("class","progress-bar bg-success")
    progressBar.setAttribute("role","progressbar")
    // progressBar.setAttribute("style","width: 90%")
    progressBar.setAttribute("aria-valuenow","50")
    progressBar.setAttribute("aria-valuemin","0")
    progressBar.setAttribute("aria-valuemax","100")
    progress.appendChild(progressBar)

    const br = document.createElement("br")


    const a = document.createElement("a")
    a.setAttribute("class","btn btn-success view ")
    
    a.setAttribute("value",id)
    a.setAttribute("name",id)
    a.setAttribute("href","./project.html")
    const cttext3 = document.createTextNode("View")
    a.appendChild(cttext3)

    if(bar<=30){
        progressBar.setAttribute("class","progress-bar bg-danger")

    }
    else if(bar<=50){
        progressBar.setAttribute("class","progress-bar bg-warning")

    }
    else if(bar<=70){
        progressBar.setAttribute("class","progress-bar bg-primary")

    }
    else if(bar<=100){
        progressBar.setAttribute("class","progress-bar bg-success")

    }

    progressBar.style.width = bar+"%";


    card_body.appendChild(card_title)
    card_body.appendChild(card_text)
    card_body.appendChild(progress)
    card_body.appendChild(br)
    card_body.appendChild(a)

    card.appendChild(card_body)
    div1.appendChild(card)

    const c = document.getElementById("c")

    if(num == 1){
        let co = 1
        while(co<=count){
            
            c.appendChild(div1)
            
            co++
        }


    }else{
        c.appendChild(div1)

    }
    
}

//////////////////////// Search ////////////////////////////

const search = document.getElementById('search')
const sbtn = document.getElementById('sbtn')
console.log(sbtn)
sbtn.addEventListener("click",sear)




function sear(){
    
    

    let count = 0
    let vv = 1
    let loopc = 0
    let nam =null
    let available = 0
    

    console.log(pdata)
    for(let i of pdata){
        
        console.log(i.projectName)
        // console.log(search.value)

        loopc++

        if(i.projectName == search.value){
            available = 1
            console.log(h11)
            count++
            console.log("if worked")
            const c = document.getElementById('c')
            const div1 = document.getElementsByClassName('div1')
            const div2 = document.getElementsByClassName('div2')
            
            

            if(h11 == 1){
                const h1 = document.getElementsByClassName("h1")

                while(h1.length>0){
                    c.removeChild(h1[0])
                }
                h11 = 0
                

            }
                

            
      //To remove all results
            if(def == 0){

                while(div1.length>0){
                    c.removeChild(div1[0])
    
                }
            }


            if(nam==i.projectName){
      
                console.log("")
            }
            else{
                
                if(def == 1){
                    
                    
                    while(div2.length>0){
                        c.removeChild(div2[0])
                        
        
                    }
                }
            }

            
            console.log(div1)


      //To show results

            if(def == 0){
                
            if(div1.length == 0){
                
                
                while(vv <= count){
                    console.log(vv)
                    console.log("count  "+" "+count)

                    let t1 = 0
                    let t2 = 0
                    let t3 = 0
                    console.log(t3)
                    let t4 = 0
                    let t5 = 0
                    if(i.task1){
                        t1 = i.task1
                    }
                    if(i.task2){
                        t2 = i.task2
                    }
                    if(i.task3){
                        t3 = i.task3
                    }
                    if(i.task4){
                        t4 = i.task4
                    }
                    if(i.task5){
                        t5 = i.task5
                    }
                    let total =t1+t2+t3+t4+t5
                    let val = 0
    
                    function calculatePercentage(value, maxValue) {
                        // return (value / maxValue) * 100;
                        val = (value / maxValue) * 100;
                        console.log(val)
                      }
                    
                      calculatePercentage(total,50)

                    createCard(i.projectName,i.projectDesc,"fc",1,count,val)
                
                    vv++
                    

                }

            }
            }

            if(def == 1){
                if(nam==i.projectName){
                    
                    while(vv <= count){
                        console.log(vv)
                        console.log("count  "+" "+count)
    
                        createCard(i.projectName,i.projectDesc,"fc",1,count,i.bar)
                        nam=i.projectName
                        vv++
                    }

                }

                if(div2.length == 0){
                    
                    
                    while(vv <= count){
                        console.log(vv)
                        console.log("count  "+" "+count)

                        let t1 = 0
                        let t2 = 0
                        let t3 = 0
                        console.log(t3)
                        let t4 = 0
                        let t5 = 0
                        if(i.task1){
                            t1 = i.task1
                        }
                        if(i.task2){
                            t2 = i.task2
                        }
                        if(i.task3){
                            t3 = i.task3
                        }
                        if(i.task4){
                            t4 = i.task4
                        }
                        if(i.task5){
                            t5 = i.task5
                        }
                        let total =t1+t2+t3+t4+t5
                        let val = 0
        
                        function calculatePercentage(value, maxValue) {
                            // return (value / maxValue) * 100;
                            val = (value / maxValue) * 100;
                            console.log(val)
                          }
                        
                          calculatePercentage(total,50)
    
                        createCard(i.projectName,i.projectDesc,"fc",1,count,val)
                        nam=i.projectName
                        vv++
                        
    
                    }
    
                }
            }
        }
    }

    if(available==0){
        
        
        const div1 = document.getElementsByClassName('div1')
        const div2 = document.getElementsByClassName('div2')
        const c = document.getElementById("c")
        if(def == 0){
            while(div1.length>0){
                c.removeChild(div1[0])

            }

            
            const h1 = document.createElement("h1")
            h1.setAttribute("class","h1")
            h1.setAttribute("id","res")
            const text = document.createTextNode("No Result")
            h1.appendChild(text)
            
            if(h11 == 0){
                c.appendChild(h1)

            }
            h11 = 1
            
            
        }

        if(def == 1){
            while(div2.length>0){
                c.removeChild(div2[0])
                

            }
            
            const h1 = document.createElement("h1")
            h1.setAttribute("class","h1")
            h1.setAttribute("id","res")
            const text = document.createTextNode("No Result")
            h1.appendChild(text)
            if(h11 == 0){
                c.appendChild(h1)

            }
            
            h11 = 1
            
        }
        
    }

    console.log("loopc"+" "+loopc)
    console.log("pdata"+" "+pdata.length)
    if(loopc==pdata.length){
        count2 = count
        console.log("count2"+" "+count2)
        if(count==count2){
            def = 1
            console.log("def val is "+def)

        }
    }


}



console.log(pId1)







