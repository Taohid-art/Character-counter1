var txar = document.querySelector(".txarea");
var cu = document.querySelector(".cu");
var rm = document.querySelector(".rm");
var btn =document.querySelector("button");
var popup=document.querySelector(".popup");
var pera = document.querySelector(".pera");
txar.addEventListener("keyup",()=>{
  
  updatecount();
  
  
});

function updatecount(){
  
  cu.innerHTML = txar.value.length;
  rm.innerHTML = 40 - cu.innerHTML;
  
}

btn.addEventListener("click",()=>{
  
  popup.style.visibility= "visible";
  pera.style.color="Yellow";
  pera.innerHTML=txar.value;
  popup.style.transform = "scale(1)"
  
});
