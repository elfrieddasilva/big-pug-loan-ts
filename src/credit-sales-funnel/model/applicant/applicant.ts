import {Address} from "./address";
import {MaritalStatus} from "./marital-status";
import {Business} from "./business";
import {Employment} from "./employment";

export class Applicant {
    firstName: string;
    lastName: string;
    address: Address;
    maritalStatus: MaritalStatus;
    business: Business;
    employment: Employment;
    employedSince: Date;
    birthday: Date;

    constructor() {
        this.address = new Address();
    }

}