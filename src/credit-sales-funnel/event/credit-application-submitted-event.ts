import {Applicant} from "../model/applicant/applicant";
import {RealEstateProperty} from "../model/realEstate/real-estate-property";
import {Household} from "../model/household/household";
import {Financing} from "../model/financing/financing";

export class CreditApplicationSubmittedEvent {
    applicationNumber: string;
    timestamp: Date;
    firstApplicant: Applicant;
    secondApplicant: Applicant;
    household: Household;
    realEstateProperty: RealEstateProperty;
    financing: Financing;

    constructor() {
        this.timestamp = new Date();
    }
}