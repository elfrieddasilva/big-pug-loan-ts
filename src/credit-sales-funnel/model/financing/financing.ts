import {OwnResources} from "./own-resources";
import {PurchaseCosts} from "./purchase-costs";
import {Loan} from "./loan";

export class Financing {
    databaseId: string;
    applicationNumber: string;
    financingNeeds: number;

    ownResources: OwnResources;
    purchaseCosts: PurchaseCosts;

    loans: Loan[];

    constructor(applicationNumber?: string) {
        if (applicationNumber) {
            this.applicationNumber = applicationNumber;
        }
        this.ownResources = new OwnResources();
        this.purchaseCosts = new PurchaseCosts();
        this.loans = [];
        this.loans.push(new Loan());
        this.loans.push(new Loan());
        this.loans.push(new Loan());
        this.loans.push(new Loan());
    }

}