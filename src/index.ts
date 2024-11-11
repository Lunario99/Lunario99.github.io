
type Base = 'Classic' | 'Thick' | 'Thin' | 'Garlic'

interface HasFormatter {
    format(): string;
}

class MenuItem implements HasFormatter{
    constructor(private title: string, private price: number) {}

    get details(): string{
        return `${this.title} - $${this.price}`;
    }

    format(): string {
        return `This menun item is clalled ${this.title} and is $${this.price}`
    }
}

class Pizza extends MenuItem{
    constructor(title: string, price: number){
        super(title, price);
    }

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

function printFormatted(val: HasFormatter): void{
    console.log(val.format());
}

printFormatted(pizza);