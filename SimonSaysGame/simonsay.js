// let gameseq=[];
// let userseq=[];
// let btns=["green","coral","red","blue"]
// let started=false;
// let level=0;
// let levelno=document.querySelector("#head");
// function levelup(){
//     level++;
//     levelno.innerText=`Level ${level}`;
//     let randindex=Math.floor(Math.random()*4);
//     let randbtn=document.querySelector(`.${btns[randindex]}`)
//     let randcolor=btns[randindex];
//     btnflash(randbtn);
//     gameseq.push(randcolor);
//     console.log(gameseq);
// }
// function btnflash(btn){
//     btn.classList.add("white");
//         setTimeout(function(){
//             btn.classList.remove("white")
//         },200);
// }
// function userflash(btn){
//     btn.classList.add("black");
//     setTimeout(function(){
//         btn.classList.remove("black")
//     },200);
// }
// document.addEventListener("keypress",function(){
//     if(started==false){
//         console.log("Game Started")
//         started=true;
//     }
//     levelup()
// })
// function checkAns(idx) {
//     if (gameseq[idx] === userseq[idx]) {
//         if (gameseq.length === userseq.length) {
//             setTimeout(levelup, 1000);
//         }
//     } else {
//         levelno.innerText = "Game Over! Press any button to start again";
//         reset();
//     }
// }

// function btnpress(){
//     // console.log(this);
//     let btn=this;
//     userflash(this);
//     userColor=btn.getAttribute("id");
//     userseq.push(userColor);
//     console.log(userseq);
//     checkAns(userseq.length-1);
// }
// let allbtn=document.querySelectorAll(".box")
//     for(btn of allbtn ){
//         btn.addEventListener("click",btnpress)
//     }
// function reset(){
//         started=false;
//         level=0;
//         gameseq=[];
//         userseq=[];
//     }

let gameSeq = [];
      let userSeq = [];
      let btn = ["green", "coral", "red", "blue"];
      let started = false;
      let level = 0;
      let MaxScore = 0;
      let h2 = document.querySelector("h2");

      document.addEventListener("keypress", function () {
        if (started == false) {
          console.log("Game Started");
          started = true;
          levelUp();
        }
      });

      function Gameflash(btn) {
        btn.classList.add("flash");
        setTimeout(function () {
          btn.classList.remove("flash");
        }, 250);
      }
      function userflash(btn) {
        btn.classList.add("userflash");
        setTimeout(function () {
          btn.classList.remove("userflash");
        }, 250);
      }

      // level up
      function levelUp() {
        userSeq = [];
        level++;
        h2.innerText = `Level ${level}`;

        // To choose Random Button
        let randomIdx = Math.floor(Math.random() * 3);
        let randomColor = btn[randomIdx];
        let randombtn = document.querySelector(`.${randomColor}`);
        //   console.log(randomIdx);
        //   console.log(randombtn);
        //   console.log(randomColor);
        gameSeq.push(randomColor);
        console.log(gameSeq);
        Gameflash(randombtn);
      }

      function checkAns(idx) {
        // console.log("curr level : ",level);

        if (userSeq[idx] === gameSeq[idx]) {
          // console.log("Same Value");
          if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
          }
        } else {
          h2.innerHTML = `Game Over Your Score was <b>${level}</b> <br>Press Any key to Start`;
          document.querySelector("body").style.backgroundColor = "red";
          setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
          }, 150);

          reset();
        }
      }

      function btnPress() {
        let btn = this;
        userflash(btn);
        userColor = btn.getAttribute("id");

        console.log(userColor);
        userSeq.push(userColor);

        checkAns(userSeq.length - 1);
      }
      let allbtn = document.querySelectorAll(".box");
      for (let btn of allbtn) {
        btn.addEventListener("click", btnPress);
      }

      function reset() {
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
      }