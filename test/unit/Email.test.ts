import { Email } from "../../src/domain/entity/Email"

test('Deve criar um email valido', async () => {
    const email = new Email('john.doe@mail.com')

    expect(email.getValue()).toBe('john.doe@mail.com')
})


test('Nao deve criar um email valido', async () => {
    expect(() => new Email('john.doe')).toThrow('Invalid email')
})