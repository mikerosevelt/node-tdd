const request = require('supertest');
const app = require('../app');
const User = require('../models').User;

describe('Get all users', () => {
	it('should response the data and status 200', async (done) => {
		const response = await request(app).get('/api/v1/users');

		expect(response.status).toBe(200);
		done();
	});
});

describe('Create a User', () => {
	it('should create a user', async (done) => {
		const response = await request(app).post('/api/v1/users');

		expect(response.status).toBe(201);
		done();
	});
});

describe('Delete a User', () => {
	it('should delete a user', async () => {
		const response = await request(app).delete('/api/v1/users/18');

		expect(response.status).toBe(200);
		expect(response.body).toMatchObject({ data: {} });
	});

	it('should throw an error if the user not found', async () => {
		const response = await request(app).delete('/api/v1/users/17');

		expect(response.status).toBe(404);
	});
});

describe('update a User', () => {
	it('Call update a user endpoint', async () => {
		const response = await request(app).put('/api/v1/users/18');

		expect(response.status).toBe(200);
	});
});
