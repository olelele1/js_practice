export default class Animal {
    constructor(color,name,type){
        this.color = color;
        this.name = name;
        this.type = type;
    }
        sayHello(){
            return `Hello , i am your new friend ${this.name}`
        }
        run(){
            return `Run for your life`
        }
}