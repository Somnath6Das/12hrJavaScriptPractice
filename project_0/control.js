//stuff you don't have to wait for. 
console.log('run 1st');

const dogImageDiv = document.getElementById('dogImage');
const dogButton = document.getElementById('dogButton');




const getNewDog =() => { 
//?  asynchronous programming in javascript called Promise.
//stuff you have to wait for.
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()).then(json =>{
    dogImageDiv.innerHTML =`<img src='${json.message}'height=300, width =300/>`});
// timer = setTimeout(getNewDog, 5000);

}
let showNumber = {numberPicture: 0};
let myDog = 0;
myDog = setInterval(getNewDog, 5000)
setInterval(myDog);
const timers = document.getElementById('timers');
showNumber['numberPicture'] = 0
showNumber['numberPicture'] = myDog +1;

timers.innerText = `Your Score: ${showNumber['numberPicture']}`;




dogButton.onclick = () =>getNewDog();  

//stuff you don't have to wait for.
console.log('Run 3rd');


