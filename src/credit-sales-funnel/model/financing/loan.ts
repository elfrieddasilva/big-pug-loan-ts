export class Loan {
    databaseId: string;
    loanAmount: number;
    interestRate: number;
    repaymentInPercent: number;
    fixedInterestRateInYears: number;

    constructor() {
     this.interestRate = 2;
    }
}