import Animal from "./animalClass.js";
export default class Dog extends Animal{
    constructor(name,color,type,years,breed,speed){
        super(name,color,type);
        this.years = years;
        this.breed = breed;
        this.speed = speed;
    }
    myAgE(years){
        this.years +=years;
        console.log(`My name is ${this.name} and i am ${this.years} years old`)
    }
    isBreed(){
        if(this.breed === "Labrador"){
            return 'best dog ever'
        }else{
            return 'dont like other dogs'
        }
    }
    speedMore(){
        if(this.speed >= 30){
            return `${this.name} is fast dog`
        }else {
            return `${this.name} is fat dog`
        }
    }
    printDogInfo(){
        return `Our dog is ${this.years} y/o and his name is ${this.name} , he is ${this.type} and ${this.color} ${this.breed} , he is so fast , because he is running more than ${this.speed} km/h`
    }
}