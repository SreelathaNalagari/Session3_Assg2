/** @Drivable interface that contains 
                properties model and 
                behaviour start,drive,getPosition */

interface Drivable {
    model?:string;

    start();
    drive();
    getPosition();
}

// @class Car that implements Drivable interface

class Car implements Drivable {
    model = "Polo";

    start(){
        console.log(console.log( ` The ${car.model} car starts`) );
    }
    drive(){
        console.log(`The ${car.model} car drives 1.2-litre petrol reaches a top speed of 162.9kmph`);
    }
    getPosition(){
        console.log(`Current position of  ${car.model} Car is 2`);
    }
}

let car = new Car();
car.start();
car.drive();
car.getPosition();