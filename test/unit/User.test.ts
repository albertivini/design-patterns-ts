import { User } from "../../src/domain/entity/User"

test('Deve criar um usuario', async () => {
    const user = await User.create('John Doe', 'john@mail.com', '123456789', 30)

    expect(user.name.getValue()).toBe('John Doe')
    expect(user.password.value).toBe('07ecccd3a1ab60b3e2f225af03cef93c2ba438c69a573e3d70601d252e38959e09d443f6542ef5dbc522c5a7be180a5b89659580874fab1c603b7b172b4c9bb2')
    expect(user.age).toBe(30)
})


test('Nao deve criar um usuario', async () => {
    expect(async () => await User.create('John', 'john@mail.com', '123456789', 30)).rejects.toThrow(new Error('Invalid name'))
})

test('Nao deve criar um usuario email', async () => {
    expect(async () => await User.create('John Doe', 'john', '123456789', 30)).rejects.toThrow(new Error('Invalid email'))
})
    

test('Nao deve criar um usuario password', async () => {
    expect(async () => await User.create('John Doe', 'john@mail.com', '12345', 30)).rejects.toThrow(new Error('Invalid password'))
})


test('Nao deve criar um usuario age', async () => {
    expect(async () => await User.create('John Doe', 'john@mail.com', '123456789', 17)).rejects.toThrow(new Error('Invalid age'))
})

