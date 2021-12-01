import { describe } from "mocha";
import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/')

import { expect } from "chai";

const TOKEN = 
    '4ef990d9537c541aef058b3a4421fd6d3fcdfcf881314fc13af0535ff1304158'



describe('POST',()=>{

    it('post1', () => {
        const data ={
            email: `test${Math.floor(Math.random() * 9999 )}@gmail.com`,
            name: 'lory',
            gender: 'male',
            status: 'inactive'
        }

        return request.post('users').set("Authorization",`Bearer ${TOKEN}`).send(data).then((res)=>{
            
            
            console.log(data.email);
            console.log(res.body.data.email);
            expect(res.body.data).deep.include(data);
        });
    });
});