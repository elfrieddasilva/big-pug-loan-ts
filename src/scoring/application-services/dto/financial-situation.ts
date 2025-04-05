import {Money} from "../../sharedmodel/money";

export class FinancialSituation {
    private costOfLiving: Money;
    private furtherIncome: Money;
    private rent: Money;
    private salary: Money;

    constructor(costOfLiving: Money, furtherIncome: Money, rent: Money, salary: Money) {
        this.costOfLiving = costOfLiving;
        this.furtherIncome = furtherIncome;
        this.rent = rent;
        this.salary = salary;
    }

    getCostOfLiving(): Money {
        return this.costOfLiving;
    }

    getFurtherIncome(): Money {
        return this.furtherIncome;
    }

    getRent(): Money {
        return this.rent;
    }

    getSalary(): Money {
        return this.salary;
    }

}