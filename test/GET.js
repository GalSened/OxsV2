
import request from './config/common';
const faker = require ('faker');
const TOKEN = 
    '4ef990d9537c541aef058b3a4421fd6d3fcdfcf881314fc13af0535ff1304158'

import { expect } from "chai";

describe('GET', ()=>{
    it('GET /users', (done) => {
        request.get(`users?access-token=${TOKEN}`).end((err,res)=>{
            expect(res.status).to.be.equal(200);
            done();
        });
    });

    it('GET /users/:id',  () => {
        request.get(`users/1access-token=${TOKEN}`).then(()=>{
        expect(res.body.data).to.be.equal(1);
        });
    });

    it('GET /users with query params', () => {
        const url = `users/1access-token=${TOKEN}&page=5&gender=Female@status=Active`;

        return request.get(url).then((res) => {
        expect(res.body.data).to.not.be.empty;
        
        });   
    });     

});