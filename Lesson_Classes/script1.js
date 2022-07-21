// const numbers = [1,2,3];
// numbers.push(4);
// console.log(numbers);
// console.log(typeof(numbers));

// class Array{
//     join(){

//     }
//     push(){

//     }
// }



//?  Expendable Array.
Array.prototype.myPush = function(item){
//  return   this.length
this[this.length] = item;
return this
}

const fruits =['Banana', 'Coockie', 'Stoberry', 'Apple'];
console.log(fruits.myPush('kiwi'));
fruits.myPush('orange');
fruits.myPush('coconut');
console.log(fruits);


