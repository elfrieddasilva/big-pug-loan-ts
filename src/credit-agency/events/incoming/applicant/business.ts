export class Business {
    BANKING = Symbol('Banking');
    ENERGY = Symbol('Energy');
    INSURANCE = Symbol('Insurance');
    CONSTRUCTION = Symbol('Construction');
    AGRICULTURE = Symbol('Agriculture');
    INDUSTRY = Symbol('Industry');
    PUBLIC_SERVICE = Symbol('Public service');
    OTHER = Symbol('Other');

    readonly displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}