export class Money {
    private static readonly DEFAULT_SCALE: number = 2;
    private amount: number;
    private scale: number;
    constructor(amount?: number) {
        this.amount = amount || 0;
        this.scale = Money.DEFAULT_SCALE;
    }

    add(money: Money): Money {
        const total = this.getAmount() + money.getAmount();
        return new Money(total);
    }

    isGreaterThan(comparison: Money): boolean {
        return this.getAmount() > comparison.amount;
    }

    getAmount(): number {
        return this.amount;
    }

    toString(): string {
        return "Money{" +
            "amount=" + this.amount +
            ", scale=" + this.scale +
            '}';
    }
}