"use strict";
// poblem_solution number: 1
const formatString = (input, toUpper) => {
    let result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
    return result;
};
const filterByRating = (items) => {
    let result1 = items.filter(item => item.rating >= 4);
    return result1;
};
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
// Test:
// console.log(filterByRating(books));
// poblem_solution number: 3
const concatenateArrays = (...arrays) => {
    const result = [];
    arrays.forEach(arr => result.push(...arr));
    return result;
};
// Test:
// console.log(concatenateArrays(["a", "b"], ["c"]));       
// console.log(concatenateArrays([1, 2], [3, 4], [5]));     
// poblem_solution number: 4
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
const processValue = (value) => {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
};
const getMostExpensiveProduct = (products) => {
    if (products.length === 0)
        return null;
    let maxProduct = products[0];
    products.map((product) => {
        if (product.price > maxProduct.price) {
            maxProduct = product;
        }
    });
    return maxProduct;
};
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
// Test:
//   console.log(getMostExpensiveProduct(products));
// poblem_solution number: 7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
const getDayType = (day) => {
    return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
};
// Test:
//   console.log(getDayType(Day.Monday));  
//   console.log(getDayType(Day.Sunday));  
// poblem_solution number: 8
const squareAsync = (n) => new Promise((resolve, reject) => {
    if (n < 0) {
        reject(new Error("Negative number not allowed"));
    }
    else {
        setTimeout(() => resolve(n * n), 1000);
    }
});
// test:
//   squareAsync(4)
//   .then(console.log)
//   .catch(console.error);  
//   squareAsync(-3)
//   .then(console.log)
//   .catch(console.error);  
