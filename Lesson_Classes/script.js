//? classes
//? methods
//? properties

// const nums = [1, 2, 3];
// nums.push()


class Car{
    constructor(name, color, maxSpeed){
        //? this are propertise
       this.name = name;
       this.color = color;
       this.maxSpeed = maxSpeed;
       this.currentSpeed = 0;
    }

    getCurrentSpeed(){
        return currentSpeed
    }

    zeroToSixty(){
    setTimeout(()=> {console.log('pHew! That was fast!');
      this.currentSpeed = 60;
      console.log(this.currentSpeed);
    }, 3000)  
    }

    drive(speed =10){
        console.log('just drove 2 miles!');
        this.currentSpeed  += speed;
        console.log(`driving speed at ${this.currentSpeed}mph`)
    }

    brake(){
        console.log('breaking');
       this.currentSpeed -= 10;
    }

    stop(){
        console.log('Stop');
        this.currentSpeed = 0;
    }
}




const porche = new Car('Porsche', 'yellow', 250);
console.log(porche.name);
console.log(porche.color);
console.log(porche.maxSpeed);

// const nums = [1,2,3,4,5];
// nums.forEach(_=> porche.drive())

porche.drive(40);
porche.drive(60)
console.log(porche.currentSpeed);
porche.zeroToSixty();
console.log(porche.currentSpeed);


// const ferrari = new Car('farrari', 'red', '250');

//? Speed is increasing when ever you call drive method again and again.
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();

//? Speed is decreasing whenever you call drive method again and again.
// ferrari.brake();
// ferrari.brake();
// ferrari.brake();
// ferrari.brake();
// ferrari.brake();
// console.log(ferrari.currentSpeed)


// ferrari.stop();
// console.log(ferrari.currentSpeed);






// console.log(ferrari.name);
// console.log(ferrari.color);
// console.log(ferrari.maxSpeed);
// console.log(ferrari);

// console.log(ferrari.currentSpeed);
//? method
// ferrari.drive();
// ferrari.brake();

// console.log(ferrari.currentSpeed);

// ferrari.drive();
// console.log(ferrari.currentSpeed);


// ferrari.drive();
// ferrari.drive();
// console.log(ferrari.currentSpeed);
// ferrari.zeroToSixty();
// console.log(ferrari.currentSpeed);











// porche.drive();
// porche.drive();
// porche.drive();
// porche.drive();
// porche.drive();
// porche.drive();
// porche.drive();
// porche.drive();
// porche.drive();
// porche.drive();
// console.log(porche.currentSpeed);
// porche.brake();
// porche.brake();
// porche.brake();
// porche.brake();
// porche.brake();
// console.log(porche.currentSpeed);
// porche.stop();
// console.log(porche.currentSpeed);



