
import request from './config/common';
const faker = require ('faker');
import Getoken from './Getoken.js';
const TOKEN = Getoken.token;
console.log(TOKEN);   

import { expect } from "chai";

describe('GET', ()=>{
    it('GET /loading collection table', (done) => {
        request.get(`notes/getById/buildingId/600d9c9be45b0b1f9a002440/access-token=${TOKEN}`).end((err,res)=>{
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
