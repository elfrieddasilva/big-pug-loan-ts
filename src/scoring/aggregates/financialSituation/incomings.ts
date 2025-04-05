import {Money} from "../../sharedmodel/money";

export class Incomings {
    salary: Money;
    otherIncome: Money;

    constructor(salary: Money, otherIncome: Money) {
        this.salary = salary;
        this.otherIncome = otherIncome;
    }

    sum(): Money {
        return this.salary.add(this.otherIncome);
    }
}