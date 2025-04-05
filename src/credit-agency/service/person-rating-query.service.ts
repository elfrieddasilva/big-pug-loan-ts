import {PersonRatingRepository} from "../repository/person-rating.repository";
import {PersonRating} from "../model/person-rating";

export class PersonRatingQueryService {
    private personRatingRepository: PersonRatingRepository;
    constructor(personRatingRepository: PersonRatingRepository) {
        this.personRatingRepository = personRatingRepository;
    }

    ratePerson(firstName: string, lastName: string, street: string, postCode: string, city: string): void{
        let rating: PersonRating;
        rating.city = city;
        rating.firstName = firstName;
        rating.lastName = lastName;
        rating.postCode = postCode;
        rating.street = street;
        rating.points = 100;
        rating.lastUpdated = new Date();

        const validTo = new Date();
        validTo.setMonth(validTo.getMonth() + 1);

        rating.validTo = validTo;
        this.personRatingRepository.save(rating);

    }
}