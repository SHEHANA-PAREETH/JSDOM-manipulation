let hElement=document.querySelector('h1');
console.log(hElement);
hElement.style.color='blue';
let body=document.querySelector('body');
let colorbg=false;
setInterval(function(){
if(colorbg)
    body.style.backgroundColor='yellow';
else
    body.style.backgroundColor='grey';
colorbg=!colorbg;}
,1000);
let pElement=document.getElementsByTagName('p');
console.log(pElement);
pElement[0].style.color='red';
