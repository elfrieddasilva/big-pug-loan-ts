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

    // public getFirstName() {
    //     return this.firstName;
    // }
    //
    // public setFirstName(firstName: string) {
    // this.firstName = firstName;
    // }
    //
    // public getLastName() {
    //     return this.lastName;
    // }
    //
    // public setLastName( lastName: string) {
    //     this.lastName = lastName;
    // }
    //
    // public  getAddress() {
    //     return this.address;
    // }
    //
    // public  setAddress( address: Address) {
    //     this.address = address;
    // }
    //
    // public getMaritalStatus() {
    //     return this.maritalStatus;
    // }
    //
    // public setMaritalStatus( maritalStatus: MaritalStatus) {
    //     this.maritalStatus = maritalStatus;
    // }
    //
    // public getBusiness() {
    //     return this.business;
    // }
    //
    // public setBusiness( business: Business) {
    //     this.business = business;
    // }
    //
    // public getEmployment() {
    //     return this.employment;
    // }
    //
    // public setEmployment(employment: Employment) {
    //     this.employment = employment;
    // }
    //
    // public getEmployedSince() {
    //     return this.employedSince;
    // }
    //
    // public setEmployedSince(employedSince: Date) {
    //     this.employedSince = employedSince;
    // }
    //
    // public getBirthday() {
    //     return this.birthday;
    // }
    //
    // public setBirthday( birthday: Date) {
    //     this.birthday = birthday;
    // }

    public toString() {
        return "Applicant{" +
            "firstName='" + this.firstName + '\'' +
            ", lastName='" + this.lastName + '\'' +
            ", address=" + this.address +
            ", maritalStatus=" + this.maritalStatus +
            ", business=" + this.business +
            ", employment=" + this.employment +
            ", employedSince=" + this.employedSince +
            ", birthday=" + this.birthday +
            '}';
    }
}