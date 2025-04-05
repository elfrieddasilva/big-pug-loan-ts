import {PersonId} from "../../sharedmodel/personId";
import {ApplicationNumber} from "../../sharedmodel/application-number";
import {Address} from "./address";
import {AccountBalance} from "./account-balance";
import {Money} from "../../sharedmodel/money";

export class ApplicantAggregate {
    private readonly personId: PersonId;
    private readonly applicationNumber: ApplicationNumber;
    private readonly name: string;
    private readonly lastName: string;
    private readonly address: Address;
    private readonly balance: AccountBalance;

    constructor(builder: ApplicantAggregateBuilder) {
        const personId : PersonId = PersonId.PersonIdBuilder(builder.firstName, builder.lastName)
            .setPostCode(builder.postCode)
            .setCity(builder.city)
            .setStreet(builder.street)
            .build();

        this.address = new Address(builder.street, builder.postCode, builder.city);
        this.applicationNumber = builder.applicationNumber;
        this.balance = builder.accountBalance;
        this.lastName = builder.lastName;
        this.personId = personId;
        this.name = builder.firstName;
    }

    calculateScoringPoints() {
        let result = 0;
        result += this.balance.calculateScoringPoints();
        result += this.address.calculateScoringPoints();
        return result;
    }

    getPersonId() {
        return this.personId;
    }

    getName() {
        return this.name;
    }

    getLastName() {
        return this.lastName;
    }

    getAddress() {
        return this.address;
    }

    getBalance() {
        return this.balance;
    }

    static AggregateBuilder(applicationNumber: ApplicationNumber) {
        return new ApplicantAggregateBuilder(applicationNumber);
    }
}

class ApplicantAggregateBuilder {
    firstName: string;
    lastName: string;
    applicationNumber: ApplicationNumber;
    street: string;
    postCode: string;
    city: string;
    accountBalance: AccountBalance;

    constructor(applicationNumber: ApplicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
        return this;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
        return this;
    }

    setStreet(street: string) {
        this.street = street;
        return this;
    }

    setPostCode(postCode: string) {
        this.postCode = postCode;
        return this;
    }

    setCity(city: string) {
        this.city = city;
        return this;
    }

    setAccountBalance(accountBalance: number) {
        this.accountBalance = new AccountBalance(accountBalance);
        return this;
    }

    build(): ApplicantAggregate {
        if (this.accountBalance === undefined) {
            this.accountBalance = new AccountBalance(new Money());
        }
        return new ApplicantAggregate(this);
    }

}