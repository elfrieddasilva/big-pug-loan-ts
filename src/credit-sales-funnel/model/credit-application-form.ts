import {Applicant} from "./applicant/applicant";
import {RealEstateProperty} from "./realEstate/real-estate-property";
import {Household} from "./household/household";
import {Financing} from "./financing/financing";
import {UUID} from "../../utils/uuid";


export class CreditApplicationForm {
    applicationNumber: string;

    firstApplicant: Applicant;
    secondApplicant: Applicant;
    realEstateProperty: RealEstateProperty;
    householdInformation: Household;
    financing: Financing;

    constructor() {
        this.applicationNumber = UUID.randomUUID();
    }
}