const person = new Object();
    person.name = "Oleh";
    person.age = 25;
    person.city = "Lviv";
    person.study = "LPNU";
    person.degree = "Masters";
    person.studyYears = 7;
    person.sayHello = function(){
        console.log(`Hello ${this.name}, are you living in ${this.city} for ${this.age} years?`)
    }
    person.timeOfStudying = function(){
        console.log(`${this.name} , are you studing in ${this.study} for ${this.studyYears} years and reach the ${this.degree} degree?`)
    }
console.log(person,person.sayHello(),person.timeOfStudying());
const car = new Object();
    car.toyota = "Camry";
    car.mercedes = "E-class";
    car.bmw = "M5";
    car.toyotaCar = function(){
        console.log(`Hello Toyota ${this.toyota}, are you better than Mercedes ${this.mercedes} or BMW${this.bmw}?`)
    }
    car.betterCar = function(){
        console.log(`${this.mercedes} , is better than BMW ${this.bmw} and Toyota ${this.toyota}`)
    }
console.log(car,car.toyotaCar(),car.betterCar());
const city = new Object();
    city.Lviv = 1000000;
    city.Kyiv = 2000000;
    city.Ternopil = 500000;
    city.cityPopulation = function(){
        console.log(`Hello Lviv ${this.Lviv}, are you bigger than Ternopil with population${this.Ternopil} and Kyiv with population of ${this.Kyiv}?`)
    }
    city.moneyCity = function(){
        console.log(`Kyiv population ${this.Kyiv} gets much more monay than Lviv with population of ${this.Lviv} and Ternopil population of ${this.Ternopil}`)
    }
console.log(city,city.cityPopulation(),city.moneyCity());