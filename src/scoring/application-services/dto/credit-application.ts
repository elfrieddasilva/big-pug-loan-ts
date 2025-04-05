import {ApplicationNumber} from "../../sharedmodel/application-number";
import {Applicant} from "./applicant";
import {FinancialSituation} from "./financial-situation";
import {Money} from "../../sharedmodel/money";

export class CreditApplication {
    private applicationNumber: ApplicationNumber;
    private applicant: Applicant;
    private financialSituation: FinancialSituation;

    constructor(builder: CreditApplicationBuilder) {
        this.applicationNumber = builder.applicationNumber;
        this.applicant = builder.applicant;
        this.financialSituation = builder.financialSituation;
    }

    getApplicationNumber() {
        return this.applicationNumber;
    }

    getFinancialSituation() {
        return this.financialSituation;
    }

    getApplicant() {
        return this.applicant;
    }
}

export class CreditApplicationBuilder {
    applicationNumber: ApplicationNumber;
    applicant: Applicant;
    financialSituation: FinancialSituation;

    constructor(applicationNumber: ApplicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    withFinancialSituation(costOfLiving: Money,
                           furtherIncome: Money,
                           rent: Money,
                           salary: Money
                           ) {
        this.financialSituation = new FinancialSituation(costOfLiving, furtherIncome, rent, salary);
        return this;
    }

    withApplicant(
        firstName: string,
        lastName: string,
        street: string,
        postCode: string,
        city: string
    ) {
        this.applicant = new Applicant(firstName, lastName, street, postCode, city);
        return this;
    }

    build() {
        return new CreditApplication(this);
    }
}