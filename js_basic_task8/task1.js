import Animal from "./animalClass.js";
import Cat from "./cat.js";
import Dog from "./dog.js";
const cat1 = new Cat('Gray','Loki','Fat',1,"Scotland","destroy");
console.log(cat1.printCatInfo());
console.log(cat1.abilityMore());
const dog1 = new Dog("Black","Archi","Big",5,"Labrador",1000);
console.log(dog1.printDogInfo());
