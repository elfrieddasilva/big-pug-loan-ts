export class UsageOfLoan {
    PURCHASE = Symbol('Purchase');
    CONSTRUCTION = Symbol('Construction');
    MODERNIZATION= Symbol('Modernization');
    OTHER = Symbol('Other');

    displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}