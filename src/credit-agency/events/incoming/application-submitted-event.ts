import {Applicant} from "./applicant/applicant";

export class ApplicationSubmittedEvent {

    private applicationNumber: string;
    private firstApplicant: Applicant;


    getApplicationNumber() {
        return this.applicationNumber;
    }

    setApplicationNumber(applicationNumber: string) {
        this.applicationNumber = applicationNumber;
    }

    getFirstApplicant(): Applicant {
        return this.firstApplicant;
    }

    setFirstApplicant(firstApplicant: Applicant) {
        this.firstApplicant = firstApplicant;
    }


}