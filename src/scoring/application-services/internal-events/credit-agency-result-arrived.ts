import {PersonId} from "../../sharedmodel/personId";

export class CreditAgencyResultArrived {
    private personId: PersonId;

    constructor(personId: string) {
        this.personId = new PersonId(personId);
    }

    getPersonId() {
        return this.personId;
    }

}