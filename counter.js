let num=document.getElementById("num");
let count=0;
function Increment(){
    count=count+1;
    console.log(count)
    num.innerHTML=count
}
function Decrement(){
    count=count-1;
    console.log(count)
    num.innerHTML=count
}