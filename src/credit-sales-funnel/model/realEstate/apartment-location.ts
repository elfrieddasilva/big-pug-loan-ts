export class ApartmentLocation {
    BASEMENT_FLOOR = Symbol('Basement floor');
    GROUND_FLOOR = Symbol('Ground floor');
    UPPER_FLOOR= Symbol('Upper floor');
    PENTHOUSE = Symbol('Penthouse');

    displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}