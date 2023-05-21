const mo = document.getElementById("mouse");
const rbtn = document.getElementById("rbtn");
const sbtn = document.getElementById("sbtn");

let key = 0;

let rN = ()=>{
    return Math.floor(Math.random()*75)
}

function run(){   
mo.addEventListener("mouseenter",()=>{
    rA = `${rN()}%`
    rB = `${rN()}%`
    console.log(rA)
    console.log("run")
    mo.style.top=rA;
    mo.style.left=rB;
})
}

sbtn.addEventListener("click",()=>{
    run()
    key = 1;
    sbtn.style.display="none";
    rbtn.style.display="block";
    mo.style.top="45%";
    mo.style.left="45%";
})
rbtn.addEventListener("click",()=>{
    key = 0;
    rbtn.style.display="none";
    sbtn.style.display="block";
    mo.style.top="";
    mo.style.left="";
})