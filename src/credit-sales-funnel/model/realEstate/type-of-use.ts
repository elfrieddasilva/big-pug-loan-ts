export class TypeOfUse {
    STANDARD    = Symbol('Standard');
    LUXURY = Symbol('Luxury');
    SIMPLE= Symbol('Simple');

    displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}