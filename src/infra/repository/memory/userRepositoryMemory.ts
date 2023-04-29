import { UserRepository } from "../../../application/repository/userRepository"
import { User } from "../../../domain/entity/User";

export class UserRepositoryMemory implements UserRepository {

    users: User[]

    constructor () {
        this.users = []
    }

    async save(user: User): Promise<void> {
        this.users.push(user)
    }
    async getByEmail(email: string): Promise<User | undefined> {
        return this.users.find((user: User) => user.email.getValue() === email)
    }
 }