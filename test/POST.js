import request from './config/common';
const faker = require ('faker');
import Getoken from './Getoken.js';
const TOKEN = Getoken.token;

import { expect } from "chai";




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
        return request
        .post('users')
        .set("Authorization",`Bearer ${TOKEN}`)
        .send(data).then((res1)=>{
            
            console.log(res1.body.data.email);
            expect(res1.body.data).include(data);
            UserId=res1.body.data.id;
            console.log(UserId);
        });

    });

   
});

