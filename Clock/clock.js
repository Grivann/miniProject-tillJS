console.dir(new Date())
setInterval(()=>{
let m =new Date().getMinutes();
let s =new Date().getSeconds();
let h =new Date().getHours();
let hrot=30*h+.5*m;
let mrot=6*m+s/10;
let srot=6*s;

hour.style.rotate=`${hrot}deg`
min.style.rotate=`${mrot}deg`
sec.style.rotate=`${srot}deg`
},200)

