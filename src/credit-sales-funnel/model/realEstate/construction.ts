export class Construction {
    PREFABRICATED_HOUSE = Symbol('Prefabricated house');
    WOOD = Symbol('Wood');
    STONE= Symbol('Stone');

    displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}