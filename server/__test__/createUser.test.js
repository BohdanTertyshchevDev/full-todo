const app = require('../app');
const request = require('supertest');
const mongoose = require('mongoose');
const yup = require('yup');


const appRequest = request(app);

const bodySchema = yup.object({
    data: yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        birthday: yup.date(),
        passwordHash: yup.string().required()
    }),
    tokens: yup.object({
        accessToken: yup.string().required(),
        refreshToken: yup.string().required()
    })
})


const getUser = () => (
    {
        firstName: "Harry",
        lastName: "Potter",
        birthday: "1990-02-02",
        email: `potter${Date.now()}@hogwarts.com`,
        password: "griffindor"
    }
)


const user = getUser();


describe('create new user', () => {
    test('user create successsfully expect 200 created', async () => {
        const responce = await appRequest.post('/api/users/sign-up').send(user);
        expect(responce.statusCode).toBe(200);
        expect(bodySchema.isValidSync(responce.body)).toBe(true);
    })

    test('created empy user expect 400 bad request ', async () => {
        const responce = await appRequest.post('/api/users/sign-up').send();
        expect(responce.statusCode).toBe(400);
        expect(bodySchema.isValidSync(responce.body)).toBe(false);
    })

    
})

afterAll(async () => {
    await mongoose.connection.close();
})