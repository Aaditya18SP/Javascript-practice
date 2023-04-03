let obj= {name: "aaditya", eng:40, hindi : 50};
let id= document.getElementById("first");
for(x in obj){
    id.innerHTML=x;
}