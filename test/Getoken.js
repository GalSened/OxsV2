import request from './config/common';

let token = '';
describe('getting token', () => {
 it('token', async() => {
     


const data= {
    loginEmail: 'user@test.com',
    loginPassword: '123123',
    termsAccepeted: false,
}

const res =  await request
.post('user/login')
//.set ("Authorization",`Bearer ${TOKEN}`)
.send(data);


token=res.body.data.token

console.log(token);
});   
});
module.exports=token

//TOKEN=POST.token;
