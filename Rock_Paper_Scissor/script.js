let uscoreEl=document.getElementById('u-score');
let cscoreEl=document.getElementById('c-score');
let rockEl=document.getElementById('rock');
let paperEl=document.getElementById('paper');
const scissorEl=document.getElementById('scissor');
const uchoiceEl=document.getElementById("userchoice");
const cchoiceEl=document.getElementById("cochoice");
const win=document.getElementById("win");
const result=document.getElementById("result");


let arr=['rock','paper','scissor'];

let uscore;
let cscore;


window.addEventListener("load", function() {
     uscore =0;
     cscore=0;
    localStorage.setItem("u-score", uscore);
    localStorage.setItem("c-score", cscore);
  });
  

function reload()
{
    window.location.reload();
}

function scoreu(){

    uscore= JSON.parse(localStorage.getItem("u-score"));
    uscoreEl.innerText=`Score: ${uscore+1}`;
    uscore++;
    updatelocalstorage();

}
function scorec(){

    cscore= JSON.parse(localStorage.getItem("c-score"));
    cscoreEl.innerText=`Score: ${cscore+1}`;
    cscore++;
   
    updatelocalstorage();

}


function updatelocalstorage(){
    //we cant store the score in int because browser only accepts string because of security issues
    localStorage.setItem("u-score",JSON.stringify(uscore)) ;
    localStorage.setItem("c-score",JSON.stringify(cscore)) ;  
    if(uscore>5)
    {
        result.innerText=`Winner:User`;  
        setTimeout(reload, 1800); 
        
    }
    if(cscore>5)
    {
        result.innerText=`Winner:Computer`;
        setTimeout(reload, 1800); 
    
    }
    if(cscore==5 && uscore==5)
    {
        result.innerText=`Draw`;
        setTimeout(reload, 1800); 
    }
}


function computerchoice()
{
    let computerchoice=arr[Math.floor(Math.random()*arr.length)];
    return computerchoice;
}


rockEl.addEventListener("click",function(){
   userchoice='rock';
   let choice=computerchoice();
   uchoiceEl.innerText=`You:${userchoice}`;
   cchoiceEl.innerText=`Computer:${choice}`;
   if(userchoice==choice)
   {
      
      win.innerText=`Correct`;
      win.style.background="rgb(136, 192, 136)";
      scoreu();
      
   }
   else
   {
      win.innerText=`Wrong`;
      win.style.background="rgb(228, 93, 93)";
      scorec();
   }
})


paperEl.addEventListener("click",function(){
    userchoice='paper';
    let choice=computerchoice();
    uchoiceEl.innerText=`You:${userchoice}`;
    cchoiceEl.innerText=`Computer:${choice}`;
    if(userchoice==choice)
    {
       win.innerText=`Correct`;
       win.style.background="rgb(136, 192, 136)";
       scoreu();
    }
    else
    {
       win.innerText=`Wrong`;
       win.style.background="rgb(228, 93, 93)";
       scorec();
    }

 })
 scissorEl.addEventListener("click",function(){
    userchoice='scissor';
    let choice=computerchoice()
    uchoiceEl.innerText=`You:${userchoice}`;
    cchoiceEl.innerText=`Computer:${choice}`;
    if(userchoice==choice)
    {
        
       win.innerText=`Correct`;
       win.style.background="rgb(136, 192, 136)";
       scoreu();
    }
    else
    {
       win.innerText=`Wrong`;
       win.style.background="rgb(228, 93, 93)";
       scorec();
    }

 })

 
 

 


 





