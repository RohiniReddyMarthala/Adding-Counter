let counter=0;
let value=document.querySelector("#value");

let decrease=document.getElementById('bdecrease');
decrease.addEventListener("click", function (){
    counter--;
    value.textContent=counter;
    updateColor();
    document.body.style.backgroundColor="yellow"
})

let reset=document.getElementById("breset");
reset.addEventListener("click", ()=>{
    counter=0;
    value.textContent=counter;
    updateColor();
    document.body.style.backgroundColor="pink"
})

let increase=document.getElementById('bincrease');
increase.addEventListener("click", function (){
    counter++;
    value.textContent=counter;
    updateColor();
    document.body.style.backgroundColor="cyan"
})
function updateColor(){
    if (counter>0){
        value.style.color="red";
    }
    if(counter<0){
        value.style.color="green";
    }
    if(counter===0){
        value.style.color="#222";
    }
}















































