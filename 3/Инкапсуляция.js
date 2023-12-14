class groopstudent {
    static _material = "steel";
    static #count = 0;
    static steelQuality = "high-quality"; 
    #name;
    type;
    _defense;
    pointsDefense = 0;
  
    constructor(name, type, defense) {
        this.#name = name;
        this.type = type;
        this._defense = defense;
    }

    static GetPointsDefense(){
        this.pointsDefense = 0;
        this.pointsDefense = (Ivan._defense + Vova._defense + Tema._defense);
        console.log(Ваши очки знаний: ${this.pointsDefense});
    }

  
    static Firstgroopstudent(){
        groopstudent.#count++;
        console.log(Комплект знаний: ${Ivan.#name}, Ранг: ${Ivan._defense});
        groopstudent.#Secondgroopstudent();
        groopstudent._Thirdgroopstudent();
        
    }
  
    static #Secondgroopstudent(){
        groopstudent.#count++;
        console.log(Комплект знаний: ${Vova.#name}, Ранг: ${Vova._defense});
    }
  
    static _Thirdgroopstudent() {
      groopstudent.#count++;
      console.log(Комплект знаний: ${Tema.#name}, Ранг: ${Tema._defense});
      console.log(Общее количество ваших знаний:${groopstudent.#count});
    }

    #NoStaticPrivateMethod(){

    }

    _NoStaticPrivateMethod2(){

    }

    NoStaticPublicMethod(){

    }

}

let Ivan = new groopstudent("Иван", "Лох", 2);
let Vova = new groopstudent("Вова", "Гений", 5);
let Tema = new groopstudent("Тёма", "Норм", 4);
groopstudent.Firstgroopstudent();
groopstudent.GetPointsDefense();