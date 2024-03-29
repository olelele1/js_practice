const person = {
    name : "Oleh",
    age : 25,
    city : "Lviv",
    study: "LPNU",
    degree: "Masters",
    studyYears: 7,
    sayHello : function(){
        console.log(`Hello ${this.name}, are you living in ${this.city} for ${this.age} years?`)
    },
    timeOfStudying : function(){
        console.log(`${this.name} , are you studing in ${this.study} for ${this.studyYears} years and reach the ${this.degree} degree?`)
    }
}
console.log(person,person.sayHello(),person.timeOfStudying());
const car = {
    toyota : "Camry",
    mercedes : "E-class",
    bmw : "M5",
    toyotaCar : function(){
        console.log(`Hello Toyota ${this.toyota}, are you better than Mercedes ${this.mercedes} or BMW${this.bmw}?`)
    },
    betterCar : function(){
        console.log(`${this.mercedes} , is better than BMW ${this.bmw} and Toyota ${this.toyota}`)
    }
}
console.log(car,car.toyotaCar(),car.betterCar());
const city = {
    Lviv : 1000000,
    Kyiv : 2000000,
    Ternopil : 500000,
    cityPopulation : function(){
        console.log(`Hello Lviv ${this.Lviv}, are you bigger than Ternopil with population${this.Ternopil} and Kyiv with population of ${this.Kyiv}?`)
    },
    moneyCity : function(){
        console.log(`Kyiv population ${this.Kyiv} gets much more monay than Lviv with population of ${this.Lviv} and Ternopil population of ${this.Ternopil}`)
    }
}
console.log(city,city.cityPopulation(),city.moneyCity());