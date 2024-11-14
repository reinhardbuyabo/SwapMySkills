const request = require('supertest');
const app = require('../../backend/server'); // Adjust the path to your server file

describe('API Calls', () => {
    it('should reach the backend for user login', async () => {
        const response = await request(app)
            .post('/api/v1/users/login')
            .send({ email: 'test@example.com', password: 'password123' })
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should reach the backend for user registration', async () => {
        const response = await request(app)
            .post('/api/v1/users')
            .send({ name: 'Test User', email: 'test@example.com', password: 'password123' })
            .set('Accept', 'application/json');

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });
});