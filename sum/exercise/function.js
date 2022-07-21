

//? 1> in -> for index, of -> for letter. 

// const sumArray= (numbers) => {
//    let result = 0;
//     //for loop
//     for(const number of numbers){
//         console.log(number)
//        result =  result + number
//     }
//     return {result}
// }


// let nums =[1,2,3,4];
// console.log(sumArray(nums))

// let ok = [5,6,7,8,9,0]
// console.log(sumArray(ok));






//? 2>
// const multiArray = (numbers) =>{
//     let result = 1;
//     for(const number of numbers){
//         console.log(number);
//         result = result * number;
//     }
//     return{result};
// }

// let numaric = [1,2,3,4,5];
// console.log(multiArray(numaric));







//? 3>
//catch the bigest number in array
// const max = (numbers) => {
//     let result = numbers[0];

// for(const number of numbers){
//     if (number > result){
//        result = number;      
//     }   
// }
// return {result};
// }

// console.log(max([1,2,3,4,5,6,5,4,10,2,5]))








//? 4>
// const letterFrequency = (phrase) => {
// //letterFrequency('haha') -> {'h' : 2, 'a' : 2}
// console.log(phrase)
// //make a `frequency` object {}
// let frequency = {};
// for(const letter of phrase){
// // check if letter existsin frequency
// if(letter in frequency){
//     //if exist incrementthe value by +1
//     frequency[letter] += 1;
// }else{
//     //else set the value to 1 
//     frequency[letter]=1;
//     }  
// }
// return frequency;
// }
// console.log(letterFrequency('haha'));
// console.log(letterFrequency('somsom'));

// const wordfrequency2 =(phrase)=>{
//     const words = phrase.split(' ');
//     return letterFrequency(words);
// }
// console.log(wordfrequency2('hello world hello world'));









//? 5>
//wordFrequency('lol what lol') return {'lol': 2, 'what':1}
const wordFrequency = (phrase) => {
    let friquency ={};
    const someword = phrase.split(" ");
    for(word of someword){
        if(word in friquency){
            friquency[word] += 1;
        }else{
            friquency[word] = 1;
        } 
    }
    return friquency;  
}

const userInput = prompt('Write your sentance');
console.log(wordFrequency(userInput));



