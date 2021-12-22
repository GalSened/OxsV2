import request from './config/common';
const faker = require ('faker');
const TOKEN = 
    '4ef990d9537c541aef058b3a4421fd6d3fcdfcf881314fc13af0535ff1304158'

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
        return request.post('users').set("Authorization",`Bearer ${TOKEN}`).send(data).then((res)=>{
            
            console.log(res.body.data.email);
            expect(res.body.data).include(data);
            UserId=res.body.data.id;
            console.log(UserId);
        });
   
    });

    it('/posts', async() => {
        const data= {
            user_id: '4',
            title: 'my title',
            body: faker.lorem.paragraph()
        }
    
        const res =  await request
        .post('posts')
        .set ("Authorization",`Bearer ${TOKEN}`)
        .send(data);

        console.log(res.body);
    
    });
});