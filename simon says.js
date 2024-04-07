let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let btns=["yellow","blue","green","red"];

let h2 =document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false) {
        console.log("game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
     btn.classList.add("flash");
     setTimeout(function() {
        btn.classList.remove("flash");
     },250);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
       btn.classList.remove("userflash");
    },250);
}


function levelUp(){
     userseq=[];
     level++;
     h2.innerText=`level ${level}`;
     let randIdx=Math.floor(Math.random()*3);
     let randColor=btns[randIdx];
     let randBtn=document.querySelector(`.${randColor}`);
     gameseq.push(randColor);
     console.log(gameseq);
     gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("current level is:",level);

    // let idx=level-1;
    if( userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML=`Game over!your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}