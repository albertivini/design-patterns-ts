import { User } from "../entity/User";
import { AbstractSpecification } from "./Specification";

export class UserNameSpecification extends AbstractSpecification<User> {
    isSatisfiedBy(user: User): boolean {
        return user.name.split(' ').length >= 2
    }

}