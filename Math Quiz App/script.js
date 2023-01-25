const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const operator=['+','-','x','/','%'];
let rand=operator[Math.floor(Math.random()*operator.length)];
const questionEl=document.getElementById("question");
const formEl=document.getElementById("form");
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score");
const boolEl=document.getElementById("bool");
questionEl.innerText= `What is ${num1} ${rand} ${num2} ?`;



let score= JSON.parse(localStorage.getItem("score"));
if(!score)
{
    score=0;
}
scoreEl.innerText=`Score: ${score}`;

let correctans ;



if(rand=='+')
{
    correctans =num1 + num2;
}
if(rand=='-')
{
    correctans =num1-num2;
}
if(rand=='x')
{
    correctans =num1 * num2;
}
if(rand=='/')
{
    correctans =num1 / num2;
}
if(rand=='%')
{
    correctans =num1 % num2;
}
formEl.addEventListener("submit",()=>{
    const userAns=+inputEl.value ; // by adding + the input stored in the int type 
    if(userAns==correctans)
    {
        
       score++;
       updatelocalstorage();
    }
    else
    {
        
        score--;
        updatelocalstorage();

    }

    if(userAns==correctans)
    {
        boolEl.innerText=`Correct ! \u{1F600}`;
    }
    else
    {
        boolEl.innerText=`Wrong ! \u{1F613}`;
    }
})
    
// create a local storage to score because every time the after the submtting the input the score will get reset 
// so here we store the score 
function updatelocalstorage(){
    //we cant store the score in int because browser only accepts string because of security issues
    localStorage.setItem("score",JSON.stringify(score))  
}







