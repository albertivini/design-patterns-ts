import { Login } from "../../src/application/useCase/Login"
import { Signup } from "../../src/application/useCase/Signup"
import { UserRepositoryMemory } from "../../src/infra/repository/memory/userRepositoryMemory"

test('Deve fazer o signup', async () => {

    const userRepository = new UserRepositoryMemory()

    const signup = new Signup(userRepository)
    const inputSignup = {
        name: 'John Doe',
        email: 'john@mail.com',
        password: '12345678',
        age: 30
    }

    await signup.execute(inputSignup)

    const login = new Login(userRepository)

    const inputLogin = {
        email: 'john@mail.com',
        password: '12345678'
    }

    const output = await login.execute(inputLogin)

    expect(output.name).toBe('John Doe')
    expect(output.token).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJ2YWx1ZSI6ImpvaG5AbWFpbC5jb20ifSwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMH0.owsgtgVKyqILSCkX1EoI2IQCWfDLGVK251VX6uKD6JE')
})