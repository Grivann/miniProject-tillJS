let btn=document.querySelector('button');
let inp=document.querySelector('input');
let ul=document.querySelector('ul');
btn.addEventListener("click", function() {
    li=document.createElement('li');
    li.innerText=inp.value;
    ul.insertAdjacentElement("beforeEnd",li);
    butt=document.createElement('button');
    butt.innerText='X';
    butt.classList.add("delete");
    li.append(butt)
    console.log("Clicked");
    inp.value="";
})
ul.addEventListener("click",function(event){
    console.log(event.target);
    let list=event.target.parentElement;
    if(event.target.tagName=="BUTTON"){
        list.remove();
    }
});