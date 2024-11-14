const request = require('supertest');
const app = require('../server'); // Adjust the path to your server file
const { User } = require('../models/User');
const { where } = require('sequelize');

describe('Authentication Tests', () => {

    it('should log in the user successfully', async () => {
        const response = await request(app)
            .post('/api/v1/users/login')
            .send({ email: 'test@example.com', password: 'password123' })
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        // expect(response.body).toHaveProperty('token');
    });

    it('should register a new user successfully', async () => {
        const uniqueEmail = `test+${Date.now()}@example.com`;

        const response = await request(app)
            .post('/api/v1/users')
            .send({ name: 'Test User', email: uniqueEmail, password: 'password123' })
            .set('Accept', 'application/json');

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('user_id');
    });

    afterAll(async () => {
        app.close();
    })
});