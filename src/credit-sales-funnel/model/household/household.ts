import {EarningCapacity} from "./earning-capacity";
import {MonthlyExpenses} from "./monthly-expenses";

export class Household {
    databaseId: number;
    applicationNumber: string;
    adultsInHousehold: number;
    childrenInHousehold: number;

    iban: string;
    bic: string;

    earningCapacity: EarningCapacity;
    monthlyExpenses: MonthlyExpenses;

    constructor(applicationNumber: string) {
        this.earningCapacity = new EarningCapacity();
        this.monthlyExpenses = new MonthlyExpenses();
        this.applicationNumber = applicationNumber;
    }
}