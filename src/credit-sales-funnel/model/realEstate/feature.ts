export class Feature {
    SOLAR_COLLECTORS = Symbol('Solar collectors');
    PHOTOVOLTAICS = Symbol('Photovoltaics');
    SPA= Symbol('Spa');
    TWO_OR_MORE_BATHS = Symbol('Two or more baths');
    EV_CHARGER = Symbol('Charger for electric vehicle');
    POOL = Symbol('Pool');
    SUMMERHOUSE_IN_GARDEN = Symbol('Summerhouse in the garden');
    SAT_TV = Symbol('Satellite TV');

    displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}