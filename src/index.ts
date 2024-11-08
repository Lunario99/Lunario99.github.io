interface hasQuantity{
    quantity: number;
}

const something: hasQuantity = { quantity: 50};

function printQuantity(item: hasQuantity): void{
    console.log(`the quantity of the item is ${item.quantity}`);
}


type Calculator = (numOne: number, numTwo: number) => number;

function addNumbers(a: number, b: number){
    return a+b;
}

function multiplyNumbers(first: number, second: number){
    return first * second;
}

function subtractNumbers(numOne: number, numTwo: number){
    return numOne - numOne;
}

let calcs: Calculator[] = [];

calcs.push(addNumbers);
calcs.push(multiplyNumbers);
calcs.push(subtractNumbers);

interface HasArea{
    name: string;
    calcArea (a: number) : number;
}

let area: number;

const shapeOne: HasArea = {
    name: 'square',
    calcArea (l: number){
        area = l*l;
        return area;
    }
}

const shapeTwo: HasArea = {
    name: 'circle',
    calcArea(r: number){
        area = Math.PI * r^2;
        return area;
    }
}

shapeOne.calcArea(5);
shapeTwo.calcArea(8);

console.log(shapeOne.calcArea(5));
