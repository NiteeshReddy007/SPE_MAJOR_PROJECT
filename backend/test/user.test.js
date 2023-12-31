process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');
const User = require("../models/userModel");

chai.use(chaiHttp);
const expect = chai.expect;
chai.should(); // Uncomment if you prefer using chai.should()

describe('User API Tests', () => {
    it('Signin user - Failure', async () => {
        const username = "johndoe";
        const password = "12378956";

        try {
            const res = await chai.request(app)
                .post('/api/auth/login')
                .send({ username, password });

            res.should.have.status(400);
            res.body.should.be.an('object');
        } catch (error) {
            console.error('Error during test:', error);
            throw error;
        }
    });

    it('Signin user - Success', async () => {
        const username = 'Rahul';
        const password = '12345678';

        try {
            const res = await chai.request(app)
                .post('/api/auth/login')
                .send({ username, password });

            res.should.have.status(200);
            res.body.should.be.an('object');

            // Add more assertions or actions based on your test scenario

        } catch (error) {
            console.error('Error during test:', error);
            throw error;
        }
    });
});
