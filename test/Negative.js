import { describe } from "mocha";
import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/')
const faker = require ('faker');
import { expect } from "chai";



describe('Negative Tests', () => {
    it('401 Authentication failed', () => {
        
        const data ={
            user_id: '1234',
            title: faker.lorem.sentence(), 
            body: faker.lorem.paragraph(),
        }


    });


    
});