console.log('Hello');


let titleDiv = document.getElementById('title2');
console.log('before:',titleDiv.innerText);

let message1 = 'Goodbye my lover!';

//? Override the h2 tag inner text
titleDiv.innerText = message1;


console.log('after:', titleDiv.innerText)

titleDiv.innerHTML=`<p>${message1}</p>`

titleDiv.style.color = 'red';
titleDiv.style.backgroundColor = 'yellow';











let title = document.getElementById('title');
console.log('before:',title.innerText);

let message = 'Goodbye my lover!';

//? Override the h2 tag inner text
title.innerText = message;


console.log('after:', title.innerText)

title.innerHTML='<p>HELLO</p>'