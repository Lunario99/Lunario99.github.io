
type Base = 'Classic' | 'Thick' | 'Thin' | 'Garlic'

class Pizza {
    constructor(title: string, price: number){
        this.title = title;
        this.price = price;
    }

    private title: string;
    private price: number;
    private base: Base = "Classic";
    private toppings: string[] = [];

    addTopping(topping: string) : void {
        this.toppings.push(topping);
    }

    removeTopping(topping: string) : void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }

    selectBase(b: Base) : void {
        this.base = b;
    }

}

const pizza = new Pizza('mario special', 15);

pizza.addTopping("olives");
pizza.addTopping("mushrooms");
pizza.removeTopping("olives");
pizza.selectBase("Thick");

console.log(pizza);