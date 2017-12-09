var Car = /** @class */ (function () {
    function Car() {
        this.model = "Polo";
    }
    Car.prototype.start = function () {
        console.log(console.log(" The " + car.model + " car starts"));
    };
    Car.prototype.drive = function () {
        console.log("The " + car.model + " car drives 1.2-litre petrol reaches a top speed of 162.9kmph");
    };
    Car.prototype.getPosition = function () {
        console.log("Current position of  " + car.model + " Car is 2");
    };
    return Car;
}());
var car = new Car();
car.start();
car.drive();
car.getPosition();
