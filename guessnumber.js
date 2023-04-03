

let btn=document.getElementById("btn");
btn.onclick=play;
function play(){
let gennum = Math.floor(Math.random() * 100);
let guessnum =  Number(prompt("enter a number"));
let i=0;
let container=document.getElementById("container");
let result=document.getElementById("result");
let score=document.getElementById("score");


while(guessnum != gennum){
    
    if(guessnum > gennum){
        alert("entered number is greater");
    }
    else{
        alert("entered number is smaller");
    }
    i++;
    guessnum = Number(prompt("enter a number"));
    
    
}


if(guessnum == gennum){
    result.innerText="Result : Success";
    
    score.innerHTML = `The number of guesses taken: ${i}<br> your score is : ${100-i}`;
 
}
}