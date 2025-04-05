export class ApplicationNumber {
    private applicationNumber: string;

    constructor(applicationNumber: string) {
        this.applicationNumber = applicationNumber;
    }

    toString(): string {
        return this.applicationNumber;
    }
}