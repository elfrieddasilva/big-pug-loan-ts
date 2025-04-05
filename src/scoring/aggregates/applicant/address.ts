export class Address {
    private city: string;
    private postCode: string;
    private street: string;

    constructor(street: string, postCode: string, city: string) {
        this.city = city;
        this.postCode = postCode;
        this.street = street;
    }

    calculateScoringPoints() {
        if (this.city === "Munich") {
            return 5;
        } else if (this.city === "Dortmund") {
            return -2;
        } else if (this.city === "Nürnberg") {
            return 8;
        }
        return 0;
    }

    getCity() : string {
        return this.city;
    }

    getPostCode(): string {
        return this.postCode;
    }

    getStreet(): string {
        return this.street;
    }

}