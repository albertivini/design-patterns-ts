import { TokenGenerator } from "../../domain/service/TokenGenerator"

export class CheckAuth {

    async execute(token: string): Promise<any> {
        const tokenGenerator = new TokenGenerator('secret')

        const payload = tokenGenerator.verify(token)

        return {
            email: payload.email.value
        }
    }
}