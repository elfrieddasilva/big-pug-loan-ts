import {ApplicationNumber} from "../../sharedmodel/application-number";
import {Incomings} from "./incomings";
import {Outgoings} from "./outgoings";
import {Money} from "../../sharedmodel/money";

export class FinancialSituationRootEntity {
    readonly applicationNumber: ApplicationNumber;
    incomings: Incomings;
    outgoings: Outgoings;

    constructor(
        applicationNumber: ApplicationNumber,
        incomings: Incomings,
        outgoings: Outgoings
    ) {
        this.applicationNumber = applicationNumber;
        this.incomings = incomings;
        this.outgoings = outgoings;
    }

    sum(): Money {
        return this.incomings.sum().add(this.incomings.sum());
    }

}