import {PersonRating} from "../model/person-rating";

export interface PersonRatingRepository {
    save(personRating: PersonRating): Promise<void>;
}