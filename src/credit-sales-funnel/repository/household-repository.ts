import {Household} from "../model/household/household";

export interface HouseholdRepository {
    findByApplicationNumber(applicationNumber: string): Household;
}