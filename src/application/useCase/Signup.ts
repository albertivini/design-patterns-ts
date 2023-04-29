import { User } from "../../domain/entity/User"
import { UserRepository } from "../repository/userRepository"

type Input = {
    name: string
    email: string
    password: string
    age: number
}

export class Signup {
    constructor(readonly userRepository: UserRepository) {
    }

    async execute(input: Input): Promise<void> {
        const user = await User.create(input.name, input.email, input.password, input.age)
        await this.userRepository.save(user)
    }
}