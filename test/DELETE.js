import request from './config/common';
const faker = require ('faker');
const TOKEN = 
    '4ef990d9537c541aef058b3a4421fd6d3fcdfcf881314fc13af0535ff1304158'

import { expect } from "chai";



    describe('DELETE calls /users',()=>{

        it('delete one user', () => {

            request.delete(`users/1access-token=${TOKEN}`).then(()=>{
                expect(res.body.data).to.be.equal(1);

            });
        });

    });