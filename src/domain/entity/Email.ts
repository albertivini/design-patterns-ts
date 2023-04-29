export class Email {
    private value: string

    constructor(email: string) {
        if (!email.toLowerCase().match(/^\S+@\S+\.\S+$/)) throw new Error('Invalid email')
        this.value = email
    }

    getValue() {
        return this.value
    }
}