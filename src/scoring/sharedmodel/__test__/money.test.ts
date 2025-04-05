import {Money} from "../money";

describe('Money', () => {
    it('isGreaterThan', () => {
        const base = new Money(8000);
        expect(base.isGreaterThan(new Money(7000))).toBe(true);
        expect(base.isGreaterThan(new Money(8000)));
    });

    it('add', () => {
        const base = new Money();
        expect(base.getAmount()).toEqual(0);
        const moneyToAdd = new Money(100);
        expect(new Money(100)).toEqual(base.add(moneyToAdd));
    });

});