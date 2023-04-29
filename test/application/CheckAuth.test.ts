import { CheckAuth } from "../../src/application/useCase/CheckAuth"

test('Deve verificar se esta autenticado', async () => {
    const checkAuth = new CheckAuth()
    const input = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJ2YWx1ZSI6ImpvaG5AbWFpbC5jb20ifSwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMH0.owsgtgVKyqILSCkX1EoI2IQCWfDLGVK251VX6uKD6JE'
    const output = await checkAuth.execute(input)

    expect(output.email).toBe('john@mail.com')
})