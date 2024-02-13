class Billing {
    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal() {

    }
}

class FixedBilling extends Billing {
    constructor(amount) {
        super(amount);
    }
    calculateTotal() {
        console.log(this.amount);
    }
}

class HoursBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }
    calculateTotal() {
        console.log(this.amount * this.hours);
    }
}

class ItemBilling extends Billing {
    constructor(amount, elements) {
        super(amount);
        this.elements = elements;
    }
    calculateTotal() {
        console.log(this.amount * this.elements);
    }
}

const fixBilling = new FixedBilling(1000);
fixBilling.calculateTotal();
const hourBilling = new HoursBilling(1000, 5);
hourBilling.calculateTotal();
const itemBilling = new HoursBilling(1000, 2);
itemBilling.calculateTotal();