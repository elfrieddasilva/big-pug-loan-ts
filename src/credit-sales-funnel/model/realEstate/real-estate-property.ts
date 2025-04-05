import {TypeOfUse} from "./type-of-use";
import {ObjectType} from "./object-type";
import {UsageOfLoan} from "./usage-of-loan";
import {Construction} from "./construction";
import {Interior} from "./interior";
import {Attic} from "./attic";
import {Basement} from "./basement";
import {Feature} from "./feature";
import {ApartmentInformation} from "./apartment-information";

export class RealEstateProperty {
    databaseId: number;
    applicationNumber: string;

    street: string;
    houseNumber: string;
    postCode: string;
    city: string;
    yearOfConstruction: string;

    livingSpaceSqm: number;
    landAreaSqm: number;

    typeOfUse: TypeOfUse;
    objectType: ObjectType;
    usageOfLoan: UsageOfLoan;
    construction: Construction;
    interior: Interior;
    attic: Attic;
    basement: Basement;

    features: Set<Feature>;
    numberOfFloors: number;

    lastModernization: Date;
    apartmentInformation: ApartmentInformation;

    constructor(applicationNumber?: string) {
        if (applicationNumber) {
            this.applicationNumber = applicationNumber;
        }
        this.apartmentInformation = new ApartmentInformation();
    }

}