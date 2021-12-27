import request from './config/common';
const faker = require ('faker');
import Getoken from './Getoken.js';
const TOKEN = Getoken.token;

import { expect } from "chai";



    describe('DELETE calls /users',()=>{

        it('delete one user', () => {

            request.delete(`users/1access-token=${TOKEN}`).then(()=>{
                expect(res.body.data).to.be.equal(1);

            });
        });

    });