// const orderSoup = () => console.log('soup is ready');
console.log("You start the convo with your friend");
// setTimeout(orderSoup, 2000);
console.log("Still speaking");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("soup is ready") : reject("no soup today");
  }, 2000);
});

//? .then(value) is for resolve value
console.log(
  promise
    .then((value) => console.log(value))
    //? Catch is for reject value
    .catch((value) => console.log("Error", value))
);

const getSoup = async () => {
const data = {rating: 0, tip: 0, pay:0, review:0 }
  try {
    const soup = await promise;
    console.log(soup);
    data.rating = 5;
    data.tip = 0.2;
    data.pay = 10;
    data.review = 5;
    return data;
  } catch (error) {
    console.log(error);
    data.rating = 1;
    data.tip = 0;
    data.pay = 0;
    data.review = 1;
    return data;
  }
};
getSoup().then(value=>console.log(value));


console.log(
  "fatch:",
  fatch("http://dog.ceo/api/breeds/image/random") //promise
    .then((response) => response.json()) //promise
    .then((data) => console.log(data)) //promise
);

//? ES6  ->  aysc await // aysc must be inside a function.
const getDog = async () => {
  const url = "http://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
getDog();


