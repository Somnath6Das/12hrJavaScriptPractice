// //Object are key value pair.

// const person = {
//     name : 'Leonardo',
//     shirt: 'white',
//     assets: 100000,
//     liability: 50000
// }

// let netWorth = person.assets-person.liability
// console.log(netWorth);

// //dot notation
// console.log(person.name);

// //bracket notation
// console.log(person['shirt']);

// //dot notation
// person.phone ='1-222-300-350';
// console.log(person.phone);


// //bracket notation
// person['girlfriend'] = 'Kate';
// console.log(person['girlfriend']);

// console.log(person);







//? used in function
const introducer = (name, shirt, assets, liability, twitter, instagram) => {
    const person = {
    name:name,
    shirt:shirt,
    networth: assets - liability,
    twitter: twitter,
    instagram: instagram,
    netfollowers: function(){
        return this.twitter + this.instagram;
    }
   
    }
    const intro =`Hi my name is ${person.name} and the color of my shirt is ${person.shirt} and my 
    networth is ${person.networth} USD and total number of followers is ${person.netfollowers()}` ;
    return intro;
}
console.log(introducer('Somnath', 'Blue', 10000, 7000, 1000000, 700000));
console.log(introducer('Leonardo', 'black', 3000, 1000, 400000, 700000));


//? Property
//car.name = Fiat
//car.model = 500

//? Methods
//car.name();
//car.model();









// //Practice
// const person2 = {
//     name : 'Qazi',
//     tshirt: 'black'
// }
// console.log(person2.name);
// console.log(person2['tshirt']);
// person2.phone = '2-190-200-400';
// console.log(person2.phone);
// person2['girlfriend'] = 'whatever';
// console.log(person2.girlfriend);
// console.log(person2);










