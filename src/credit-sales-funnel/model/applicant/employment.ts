export class Employment {
    EMPLOYEE = Symbol('Employee');
    OFFICIAL = Symbol('Official');
    PENSIONER = Symbol('Pensioner');
    STUDENT = Symbol('Student');
    TRAINEE = Symbol('Trainee');
    FREELANCE = Symbol('Freelance');
    UNEMPLOYED = Symbol('Unemployed');
    OTHER = Symbol('Other');

    readonly displayName: string;

    constructor(displayName: string) {
        this.displayName = displayName;
    }

}