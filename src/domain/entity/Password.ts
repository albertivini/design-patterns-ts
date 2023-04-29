import {  pbkdf2Sync, randomBytes } from "crypto"

export class Password {
    constructor(readonly value: string, readonly salt: string) {

    }

    static async create(password: string, salt?: string): Promise<Password> {

        if (password.length < 8) throw new Error('Invalid password')

        const generatedSalt = salt || randomBytes(20).toString('hex')

        const response = pbkdf2Sync(password, generatedSalt, 100, 64, 'sha512').toString('hex')

        return new Password(response, generatedSalt)

        // return new Promise((resolve) => {
        //     pbkdf2(password, generatedSalt, 100, 64, 'sha512', (err, value) => {
        //         resolve(new Password(value.toString('hex'), generatedSalt))
        //     } )
        // })
    }

    async validate(plain_password: string) {

        const response = pbkdf2Sync(plain_password, this.salt, 100, 64, 'sha512').toString('hex')

        return this.value === response
    }
}