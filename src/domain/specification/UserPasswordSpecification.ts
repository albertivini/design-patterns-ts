import { User } from "../entity/User";
import { AbstractSpecification } from "./Specification";

export class UserPasswordSpecification extends AbstractSpecification<User> {
    isSatisfiedBy(user: User): boolean {
        return user.password.length >= 8
    }

}