import Animal from "./animalClass.js";
export default class Cat extends Animal{
    constructor(name,color,type,years,breed,ability){
        super(name,color,type);
        this.years = years;
        this.breed = breed;
        this.ability = ability;
    }
    myAgE(years){
        this.years +=years;
        console.log(`My name is ${this.name} and i am ${this.years} years old`)
    }
    isBreed(){
        if(this.breed === "Scotland"){
            return 'He is so lovely'
        }else{
            return 'Other cats are agly'
        }
    }
    abilityMore(){
        if(this.ability === "destroy"){
            return `${this.name} destroying everything`
        }else {
            return `${this.name} is so cute`
        }
    }
    printCatInfo(){
        return `Our cat is ${this.years} y/o and his name is ${this.name} , he is ${this.type} and ${this.color} ${this.breed} cat , he is nervous , and ${this.ability} everything`
    }
}
