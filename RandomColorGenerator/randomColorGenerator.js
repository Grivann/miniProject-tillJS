let btn=document.querySelector('button');

function rand(){
    
    red=Math.floor((Math.random())*255);
    green=Math.floor((Math.random())*255);
    blue=Math.floor((Math.random())*255);
    let color=`rgb(${red},${green},${blue})`; 
    return color;
}


btn.addEventListener("click",function(){
    let head=document.querySelector('h3');
    let randcolor= rand();
    head.innerText= randcolor;

    let box=document.querySelector('div');
    box.style.backgroundColor=randcolor;
});

