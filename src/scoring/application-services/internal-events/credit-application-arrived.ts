import {ApplicationNumber} from "../../sharedmodel/application-number";

export class CreditApplicationArrived {
    private readonly applicationNumber: ApplicationNumber;
    constructor(applicationNumber: string) {
        this.applicationNumber = new ApplicationNumber(applicationNumber);
    }

    getApplicationNumber() {
        return this.applicationNumber;
    }

}