// class Car {
//     constructor(brand, model, year, price, color, percent) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.price = price;
//         this.color = color;
//         this.percent = percent;
//     }


//     getDetail() {
//         console.log(`Brand: ${this.brand}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`Ili: ${this.year}`);
//         console.log(`Qiymet: ${this.price} AZN`);
//         console.log(`Reng: ${this.color}`);
//     }
//     calculateDiscount() {
//         const discount = (this.price * this.percent) / 100;
//         this.price -= discount;
//         console.log(`Endirimli Qiymeti: ${this.price} AZN`);
//     }
// }
// class SportsCar extends Car {
//     constructor(brand, model, year, price, color, percent, topSpeed) {
//         super(brand, model, year, price, color, percent);
//         this.topSpeed = topSpeed;
//     }

//     getDetail() {
//         super.getDetail(); 
//         console.log(`Top Speed: ${this.topSpeed} km/h`);
//     }
//     incrementSpeed() {
//         this.topSpeed += this.topSpeed * 0.1; 
//         console.log(`New Top Speed: ${this.topSpeed} km/h`);
//       }

// }
// const car1 = new Car("Toyota", "Camry", 2020, 30000, "Black", 10);
// const car2 = new Car("Honda", "Civic", 2022, 25000, "White", 15);

// car1.getDetail();
// car1.calculateDiscount();

// car2.getDetail();
// car2.calculateDiscount();

// const sportsCar = new SportsCar("Ferrari", "F8", 2023, 300000, "Red", 5, 340);


// sportsCar.getDetail();
// sportsCar.calculateDiscount();
// sportsCar.incrementSpeed();
// sportsCar.getDetail();

class Car {

    constructor(brand, model, year, price, color, percent) {

        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.color = color;
        this.percent = percent;
    }

    getDetail() {
        console.log(`Brand: ${this.brand}`);
        console.log("Model", this.model);
        console.log("Year", this.year);
        console.log("Price", this.price, "AZN");
        console.log("Color", this.color);



    }

    calculateDiscount() {
        const discount = (this.price * this.percent) / 100;
        this.price -= discount;
        console.log("Endirimli Qiymeti", this.price, "AZN");

    }


}

class SportsCar extends Car {
    constructor(brand, model, year, price, color, percent, topSpeed) {
        super(brand, model, year, price, color, percent);
        this.topSpeed = topSpeed;
    }

    getDetail() {
        super.getDetail();
        console.log(`Top Speed: ${this.topSpeed} km/h`);
    }

    incrementSpeed() {
        this.topSpeed += this.topSpeed * 0.1;
        console.log(`New Top Speed: ${this.topSpeed} km/h`);
    }
}
const car1 = new Car("Toyota", "Camry", 2020, 30000, "Black", 10);
const car2 = new Car("Honda", "Civic", 2022, 25000, "White", 15);

car1.getDetail();
car1.calculateDiscount();

car2.getDetail();
car2.calculateDiscount();

const sportsCar = new SportsCar("Ferrari", "F8", 2023, 300000, "Red", 5, 340);


sportsCar.getDetail();
sportsCar.calculateDiscount();
sportsCar.incrementSpeed();
sportsCar.getDetail();