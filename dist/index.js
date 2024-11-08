"use strict";
const something = { quantity: 50 };
function printQuantity(item) {
    console.log(`the quantity of the item is ${item.quantity}`);
}
function addNumbers(a, b) {
    return a + b;
}
function multiplyNumbers(first, second) {
    return first * second;
}
function subtractNumbers(numOne, numTwo) {
    return numOne - numOne;
}
let calcs = [];
calcs.push(addNumbers);
calcs.push(multiplyNumbers);
calcs.push(subtractNumbers);
let area;
const shapeOne = {
    name: 'square',
    calcArea(l) {
        area = l * l;
        return area;
    }
};
const shapeTwo = {
    name: 'circle',
    calcArea(r) {
        area = Math.PI * r ^ 2;
        return area;
    }
};
shapeOne.calcArea(5);
shapeTwo.calcArea(8);
console.log(shapeOne.calcArea(5));
