import { describe } from "mocha";
import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/')

import { expect } from "chai";

const TOKEN = 
    '4ef990d9537c541aef058b3a4421fd6d3fcdfcf881314fc13af0535ff1304158'



describe('POST',()=>{

    it('post1', (done) => {
        const data ={}

        request.post('users').set("Authorization",`Bearer ${TOKEN}`).send(data).end((err,res)=>{
            
            done();
            console.log(res.body);
        });
        


    });






});