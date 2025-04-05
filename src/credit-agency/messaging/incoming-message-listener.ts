import {PersonRatingQueryService} from "../service/person-rating-query.service";
import {ApplicationSubmittedEvent} from "../events/incoming/application-submitted-event";
import {Applicant} from "../events/incoming/applicant/applicant";

export class IncomingMessageListener {
    personRatingQueryService: PersonRatingQueryService;
    constructor(personRatingQueryService: PersonRatingQueryService) {
        this.personRatingQueryService = personRatingQueryService;
    }

    receiveApplicationSubmission(applicationSubmittedEvent: ApplicationSubmittedEvent) {
        console.log(`received ${applicationSubmittedEvent.getFirstApplicant().toString()}`);
        const applicant: Applicant = applicationSubmittedEvent.getFirstApplicant();
        this.personRatingQueryService.ratePerson(
            applicant.firstName,
            applicant.lastName,
            applicant.address.street,
            applicant.address.postCode,
            applicant.address.city
            )
    }
}