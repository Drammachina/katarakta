class Animal {
    size;
    color;
    material;

    constructor(size, material, color){
        this.size = size;
        this.color = color;
        this.material = material;
    }

    tearAnimal(){
        console.log('Вы пнули своё животное', ${this.color} ,'цвета!!!');
    }
    
    checkMaterialAnimal(){
        console.log('Ваше животное - ', ${this.material}.)
    }
}

class Cat extends Animal {
    countHole = 0;
}

class Dog extends Cat {
    countHole = 0;
    countButton = 6;
}

let array = [ new Dog(100, "white", "лысый"), new Cat(50, "Rad", "Пущистый")]
array.forEach(Animal => {
    Animal.tearAnimal();
    Animal.checkMaterialAnimal();
});