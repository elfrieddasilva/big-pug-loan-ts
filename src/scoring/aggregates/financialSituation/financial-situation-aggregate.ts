import {FinancialSituationRootEntity} from "./financial-situation-root-entity";
import {ApplicationNumber} from "../../sharedmodel/application-number";
import {Money} from "../../sharedmodel/money";
import {Incomings} from "./incomings";
import {Outgoings} from "./outgoings";

export class FinancialSituationAggregate {
    rootEntity: FinancialSituationRootEntity;

    constructor(builder: FinancialSituationBuilder) {
        const incomings = new Incomings(builder.salary, builder.otherIncome);
        const outgoings = new Outgoings(builder.rent, builder.costOfLiving);
        this.rootEntity = new FinancialSituationRootEntity(builder.applicationNumber, incomings, outgoings)
    }

    calculateScoringPoints(): number {
        const monthlyBalance = this.rootEntity.sum();
        if (monthlyBalance.isGreaterThan(new Money(2000))) {
            return 35
        } else if(monthlyBalance.isGreaterThan(new Money(1000))) {
            return 20;
        } else if(monthlyBalance.isGreaterThan(new Money(750))) {
            return 15;
        } else if(monthlyBalance.isGreaterThan(new Money(500))) {
            return 10;
        } else if (monthlyBalance.isGreaterThan(new Money(250))) {
            return 5;
        } else if( monthlyBalance.isGreaterThan(new Money(0))) {
            return 0;
        }
        return -10;
    }

    getApplicationNumber() {
        return this.rootEntity.applicationNumber;
    }

    static FinancialSituationBuilder(applicationNumber: ApplicationNumber) {
        return new FinancialSituationBuilder(applicationNumber);
    }

}

class FinancialSituationBuilder {
    readonly applicationNumber: ApplicationNumber;
    rent: Money;
    costOfLiving: Money;
    salary: Money;
    otherIncome: Money;

    constructor(applicationNumber: ApplicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    setRent(rent: Money) {
        this.rent = rent;
        return this;
    }

    setCostOfLiving(costOfLiving: Money) {
        this.costOfLiving = costOfLiving;
        return this;
    }

    setSalary(salary: Money) {
        this.salary = salary;
        return this;
    }

    setOtherIncome(otherIncome: Money) {
        this.otherIncome = otherIncome;
        return this;
    }

    build() {
        return new FinancialSituationAggregate(this);
    }
}