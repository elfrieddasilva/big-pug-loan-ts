export class ParkingSpace {
    NOT_PRESENT = Symbol('Not present');
    CARPORT = Symbol('Carport');
    GARAGE= Symbol('Garage');

    displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}