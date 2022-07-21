



// const howManyLetters =() => {
//     const phrase = 'hey, can you go to grocery store with me?'
// //in shows index, of letter and of shows letter.

//     for(const letter in phrase){
//         console.log(Number(letter)+1);
//     }
// }

// howManyLetters();






// const howManyLetters1 = (phrase) =>{

//     let result = 0;
//     for(const index in phrase){
//         console.log(Number(index) + 1);
//         result = Number(index) + 1;
//     }
//     return{result}
// }

// const phrase = 'hey, can you go to grocery store with me?';
// console.log(howManyLetters1(phrase));










// const howManyLetters2 = (phrase1) =>{

//     let result1 = 0;
//     for(const index in phrase1){
//         console.log(Number(index) + 1);
//         result1 = Number(index) + 1;
//     }
//     return{result1}
// }

// const phrase1 = prompt();
// console.log(howManyLetters2(phrase1));








const howManyLetters3 = (phrase2) =>{

    return{result2:phrase2.length }
}

const phrase2 = prompt("Write your phrase");
console.log(howManyLetters3(phrase2));