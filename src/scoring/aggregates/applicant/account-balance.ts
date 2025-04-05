import {Money} from "../../sharedmodel/money";

export class AccountBalance {
    private balance: Money;

    constructor(balance: number | Money) {
        if (typeof balance === 'number') {
            this.balance = new Money(balance);
        } else {
            this.balance = balance;
        }
    }

    calculateScoringPoints(): number {
        if (this.balance.isGreaterThan(new Money(3000))) {
            return 10;
        }
        return 0;
    }

    toNumber() {
        return this.balance.getAmount();
    }
}