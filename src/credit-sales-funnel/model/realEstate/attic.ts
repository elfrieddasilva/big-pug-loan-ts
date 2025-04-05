export class Attic {
    NOT_PRESENT = Symbol('Not present');
    PARTLY_DEVELOPED = Symbol('Partly developed');
    FULLY_DEVELOPED= Symbol('Fully developed');

    displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}