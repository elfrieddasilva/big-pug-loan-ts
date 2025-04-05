import * as crypto from 'crypto';

export class PersonId {
    private personId: string;

    constructor(personId: string);
    constructor(builder: PersonIdBuilder);
    constructor(param: string | PersonIdBuilder) {
        if (typeof param === 'string') {
            this.personId = param;
        } else {
            this.personId = this.generateHash(param.toString());
        }
    }

    private generateHash(input: string): string {
        return crypto.createHash('sha256').update(input).digest('hex');
    }

    toString(): string {
        return this.personId;
    }

    static PersonIdBuilder(firstName:string, lastName:string) {
        return new PersonIdBuilder(firstName, lastName);
    }
}

class PersonIdBuilder {
    private firstName: string;
    private lastName: string;
    private street?: string;
    private postCode?: string;
    private city?: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    setStreet(street: string): this {
        this.street = street;
        return this;
    }

    setPostCode(postCode: string): this {
        this.postCode = postCode;
        return this;
    }

    setCity(city: string): this {
        this.city = city;
        return this;
    }

    build(): PersonId {
        return new PersonId(this);
    }

    toString(): string {
        return JSON.stringify({
            firstName: this.firstName,
            lastName: this.lastName,
            street: this.street,
            postCode: this.postCode,
            city: this.city,
        });
    }
}

