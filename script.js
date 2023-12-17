function show(){    
    var ul=document.querySelector(".ul");
    var close=document.querySelector(".close");
    var burger=document.querySelector(".burger");
    var main =document.querySelector(".main");
ul.style.visibility="visible";
close.style.visibility="visible";
burger.style.visibility="hidden";
main.style.display="none";
}
function back(){
    var ul=document.querySelector(".ul");
    var close=document.querySelector(".close");
    var burger=document.querySelector(".burger");
    var main =document.querySelector(".main");
ul.style.visibility="hidden";
close.style.visibility="hidden";
burger.style.visibility="visible";
main.style.display="flex";
}
function onShowAlert() {
    const myAlert = document.querySelector(".alert");
  myAlert.style.opacity = "1";
  myAlert.style.bottom = "3rem";
  function myGreeting() {
    myAlert.style.opacity = "0";
    myAlert.style.bottom = "1rem";
}
var myTimeout = setTimeout(myGreeting, 2000);

setInterval(function() {
    clearTimeout(myTimeout);
}, 3000);

}