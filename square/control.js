let redDiv = document.getElementById('red');
let yellowDiv = document.getElementById('yellow');
let greenDiv = document.getElementById('green');

redDiv.onclick =() =>{
    console.log('red');
}
yellowDiv.onclick = ()=>{
    console.log('yellow');
}
greenDiv.onclick =()=>{
    console.log('green');
}



//** increase square by 1 */
const squares = document.querySelectorAll('.colorSquare');
console.log(squares);

console.log(squares[0].value);
console.log(squares[1].value);
console.log(squares[2].value);

squares.forEach(squares => console.log(squares.value));



const timesClicked = {'red':0, 'yellow':0, 'green': 0}
squares.forEach(square =>{
    square.onclick=()=>{
    timesClicked[square.value] += 1
square.innerHTML = timesClicked[square.value]};
})






//** remove number */
const clearGameBtn = document.getElementById('clear-game');
clearGameBtn.onclick = () => clearScores();


function clearScores(){
timesClicked.red = 0;
timesClicked.yellow = 0;
timesClicked.green = 0;
squares.forEach(square => {
    square.innerHTML = ''
})}




//** pick a random fruit from array */
fruits = ['banana', 'apple', 'orange', 'watermelon'];
const randomFruit =(fruits) => {
    const randomNumber =
    Math.floor(Math.random() * fruits.length)
    return fruits[randomNumber];
}
console.log(randomFruit(fruits))




//** if else if else */
//** rainy (1), sunny(-1), overcast(0) */

const weatherScorer =(weather, weather2)=>{
    let score;
    if(weather == 'rainy' && weather2 =='overcast'){
       score = 2
    }else if( weather == 'rainy'){
        score = 1;
    }
    
    else if(weather == 'sunny'){
       score = -1;
    }else{
        score = 0;
    }
    return score;
}
console.log(weatherScorer( 'rainy'));