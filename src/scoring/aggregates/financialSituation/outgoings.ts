import {Money} from "../../sharedmodel/money";

export class Outgoings {
    rent: Money;
    costOfLiving: Money;

    constructor(rent: Money, costOfLiving: Money) {
        this.rent = rent;
        this.costOfLiving = costOfLiving;
    }

    sum(): Money {
        return this.rent.add(this.costOfLiving);
    }
}