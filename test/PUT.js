import { describe } from "mocha";
import supertest from "supertest";
const request = supertest('https://gorest.co.in/public-api/')

import { expect } from "chai";

const TOKEN = 
    '4ef990d9537c541aef058b3a4421fd6d3fcdfcf881314fc13af0535ff1304158'

describe('PUT',()=>{

    it('PUT /users name &status', () => {
        const data = {
            status: 'active',
            name: 'Hanna',
        }

        return request
            .put('users/132')
            .set('authorization', `Bearer ${TOKEN}`)
            .send(data)
            .then(res=>{
                expect(res.body.data.name).to.be.equal(data.name)
            })


    });







});