class Animal {
    size;
    color;
    material;
}

class cat extends Animal {
    countHole = 0;
    tearcat(color){
        this.color = color;
        console.log(Вы пнули кота ${bluecat.color} цвета!!!);
    }

    checkMaterialcat(material){
        this.material = material;
        console.log(Ваш кот пушистый - ${bluecat.material}.)
    }
}

class Dog extends Animal {
    countHole = 0;
    countButton = 6;
    tearDog(color){
        this.color = color;
        console.log(Вы пнули кота ${whiteDog.color} цвета!!!);
    }

    checkMaterialDog(material){
        this.material = material;
        console.log(Вы пнули пса - ${whiteDog.material}.);
    }
    
}

let whiteDog = new Dog();
let bluecat = new cat();
bluecat.tearcat("Рыжего");
bluecat.checkMaterialcat("Пушистого");
whiteDog.tearDog("белого");
whiteDog.checkMaterialDog("Лысого")