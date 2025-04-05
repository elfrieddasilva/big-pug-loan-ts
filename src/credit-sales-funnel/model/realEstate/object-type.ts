export class ObjectType {
    SEMI_DETACHED_HOUSE = Symbol('Semi detached house');
    ROW_HOUSE = Symbol('Row house');
    DETACHED_HOUSE= Symbol('Detached house');
    APARTMENT = Symbol('Apartment');

    displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}