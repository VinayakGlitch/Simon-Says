let userSeq=[];
let gameSeq=[];

let btns=["yellow","red","purple","green"];

let started= false;
let level= 0;
let h3=document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started")
        started=true;

        levelUp();
        
    }
});

function gameFlash(btn){
    btn.classList.add("change");
    setTimeout(function(){
        btn.classList.remove("change");
    },200)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200)
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;



    let randidx=Math.floor(Math.random()*3);
    let randColor=btns[randidx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}


function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,600);
        }
        
    }else{
        h3.innerHTML=`Game Over! Your score was <b>${level}</b>  <br>Press any key to start.`;

        document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="grey";

        },150);

        reset();
    }
}

function btnPress(){
   let btn= this;
   userFlash(btn);

   userColor=btn.getAttribute("id");

   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    gameSeq=[];
    started=false;
    level=0;
    userSeq=[];
    

}