export class MaritalStatus {
    SINGLE = Symbol('Single');
    MARRIED = Symbol('Married');
    DIVORCED = Symbol('Divorced');
    WIDOWED = Symbol('Widowed');

    readonly displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}