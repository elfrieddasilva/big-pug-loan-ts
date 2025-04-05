import {Applicant} from "../model/applicant/applicant";

export interface ApplicantRepository {
    findByApplicationNumberAndApplicantNumber(applicationNumber: number, applicantNumber: string): Applicant;
    findByApplicationNumberOrderByApplicant(applicationNumber: string): Applicant[];
}