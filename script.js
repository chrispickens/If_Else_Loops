var wrapperEle = document.body.querySelector(".wrapper"); 
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var mixerEle = document.body.querySelector(".mixer");

function caller(list){
for(i=0; i<animals.length; i++){
  var list = document.createElement("div");
  if(animals[i] === "dog"){
    list.innerHTML = "borf borf";
  }else if(animals[i] === "cat"){
    list.innerHTML = "I am a cat";
  }else{
    list.innerHTML = "I am an animal.";
  }
  wrapperEle.appendChild(list);
} 
}
caller(animals);




function randomizer(list){
  list = list.sort(() => Math.random() - 0.5);
  return list;
}

mixerEle.addEventListener("click", function(){
  wrapperEle.innerHTML = "";
  randomizer(animals);  
  caller(animals);
});