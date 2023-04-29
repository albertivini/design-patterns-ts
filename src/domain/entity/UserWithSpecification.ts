import { UserAgeSpecification } from "../specification/UserAgeSpecification";
import { UserNameSpecification } from "../specification/UserNameSpecification";
import { UserPasswordSpecification } from "../specification/UserPasswordSpecification";

export class User {

    constructor(    readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly age: number) {
            const nameSpecification = new UserNameSpecification()
            const passwordSpecification = new UserPasswordSpecification()
            const ageSpecification = new UserAgeSpecification()

            if (!nameSpecification.
                and(passwordSpecification).
                and(ageSpecification)
                .isSatisfiedBy(this)) throw new Error('Invalid parameter')
        }
}