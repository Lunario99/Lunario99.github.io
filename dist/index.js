"use strict";
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - $${this.price}`;
    }
    format() {
        return `This menun item is clalled ${this.title} and is $${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = "Classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza('mario special', 15);
function printFormatted(val) {
    console.log(val.format());
}
printFormatted(pizza);
