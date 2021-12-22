import request from './config/common';
const faker = require ('faker');
const TOKEN = 
    '4ef990d9537c541aef058b3a4421fd6d3fcdfcf881314fc13af0535ff1304158'

import { expect } from "chai";



describe.only('Negative Tests', () => {
    //send request without token
    it('401 Authentication failed', async() => {
        
        const data ={
            user_id: '1234',
            title: faker.lorem.sentence(), 
            body: faker.lorem.paragraph(),
        };

        const PostRes = await request.post('posts').send(data);
        //console.log(PostRes);
        expect(PostRes.body.code).to.equal(401);
        expect(PostRes.body.message).to.be.equal('Authentication failed')


    });
    //send request without body
    it.only('422 Validation failed', async() => {
        
        const data ={
            user_id: '1234',
            title: faker.lorem.sentence(), 
            //body: faker.lorem.paragraph(),
        };

        const PostRes = await request
        .post('posts')
        .set ("Authorization",`Bearer ${TOKEN}`)
        .send(data);
        console.log(PostRes.body);
        expect(PostRes.body.code).to.equal(422);
        expect(PostRes.body.data[0].field).to.equal('body');
        expect(PostRes.body.data[0].message).to.be.equal("can't be blank")


    });
    
});