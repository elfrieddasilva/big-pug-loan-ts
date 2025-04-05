export class Applicant{
    firstName: string;
    lastName: string;
    street: string;
    postCode: string;
    city: string;

    constructor(
        firstName: string,
        lastName: string,
        street: string,
        postCode: string,
        city: string
    ) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.street = street;
       this.postCode = postCode;
       this.city = city;
    }
}