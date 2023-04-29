import { User } from "../../domain/entity/User"

// padrao repository

 export interface UserRepository {
    save (user: User): Promise<void>
    getByEmail(email: string): Promise<User | undefined>
 }