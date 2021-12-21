import { describe } from "mocha";
import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/')
const faker = require ('faker');
import { expect } from "chai";
import { name } from "faker";

const TOKEN = 
    '4ef990d9537c541aef058b3a4421fd6d3fcdfcf881314fc13af0535ff1304158'



describe('POST',()=>{
    let UserId;
    it('post1', () => {
        const data ={
            email: faker.internet.email(),
            name: faker.name.firstName(),
            gender: faker.name.gender(),
            status: 'inactive'
        }
console.log(data);
        return request.post('users').set("Authorization",`Bearer ${TOKEN}`).send(data).then((res)=>{
            
            console.log(res.body.data.email);
            expect(res.body.data).include(data);
            UserId=res.body.data.id;
            console.log(UserId);
        });
    });
});