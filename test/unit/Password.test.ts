import { Password } from "../../src/domain/entity/Password"

test('Deve criar uma senha', async () => {
    const password = await Password.create('123456789', 'salt')

    expect(password.value).toBe('07ecccd3a1ab60b3e2f225af03cef93c2ba438c69a573e3d70601d252e38959e09d443f6542ef5dbc522c5a7be180a5b89659580874fab1c603b7b172b4c9bb2')
    expect(password.salt).toBe('salt')
})