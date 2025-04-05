export class Address {
    street: string;
    postCode: string;
    city: string;
    toString(){
        return `Address{
        street='${this.street}', postCode='${this.postCode}', city='${this.city}'}
        `
    }
}