import {Financing} from "../model/financing/financing";

export interface FinancingRepository {
    findByApplicationNumber(applicationNumber: string): Financing;
}