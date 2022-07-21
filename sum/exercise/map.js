//? higher order function.

//? map returning to an array

//? 1>
[1, 2, 3, 4, 5, 6].map((number) => console.log(number));

//? 2>
let result = [1, 2, 3, 4, 5, 6].map((number) => number * 2);
console.log(result);

//? 3>
const doubleMap = (number) => {
  return number.map((number) => number * 2);
};
console.log(doubleMap([2, 4, 6, 8]));

//? Filter - loops and return an array with matching array with matching conditions

//? Filter([1,2,3 ,4,5,6], 3) => [4,5,6]

//? 4>
const filter = (numbers, greaterThen) => {
  let graterNum = [];

  for (const num of numbers) {
    if (num > greaterThen) {
      graterNum.push(num);
    }
  }
  return graterNum;
};

console.log(filter([1, 2, 3, 4, 5, 6], 3));

const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.filter((num) => num >= 5 || num < 3));



//? 5>
const actors = [
  { name: "johnny", networth: 2000000 },
  { name: "amber", networth: 10 },
  { name: "leonardo", networth: 10000000 },
];
let hollywood = actors.filter((actor) => actor.networth > 10);
console.log(hollywood);





//? 6>
//? .reduce()
//?sum all of the net worth.
//? whene ever think sum think reduce
//? reduce takes in a function as an argument
//? reduce loops and gives you back the accumulator

const number1 = [1, 2, 3];
const result1 = number1.reduce(function (prev, curr) {
  return prev + curr;
});
console.log(result1);

//? 7>
//? same code in es6 function

const number2 = [1, 2, 3];
const result2 = number1.reduce((prev, curr) => prev + curr, 10);
console.log(result2);


//? 8>
//? call from another function
function sum1(a, b){
    return a + b;
}
const number3 =[1,2,3,4];
const result3 = number3.reduce(sum1);
console.log(result3);




//? 9>
function multi(a, b) {return a * b} ;

const multiNum = [1, 2, 3, 4,];
const result4 = multiNum.reduce(multi);
console.log(result4);




//? 10> reduce in object
const xCompany = [
    {name: 'Somnath', salary : 100000},
    {name: 'Krishnandu', salary : 40000},
    {name: 'Arpan', salary : 10000}
]
console.log(xCompany.reduce((a,b)=> a + b.salary, 0))

