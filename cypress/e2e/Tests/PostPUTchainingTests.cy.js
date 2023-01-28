

describe('This suite will test post and put request chaining', ()=> {


it('Post and Put request chaining test', ()=> {

cy.request({

    method: 'POST',
    url : 'https://reqres.in/api/users/',
    body : {
        "name": "Aruna",
        "job": "manager"
    }

}).then((res)=> {

const resBody = res.body.id;

return resBody;

}).then((resBody)=> {

cy.request({

    method : 'PUT',
    body : {
        "name": "Aruna",
        "job": "CEO"
    },
    url : 'https://reqres.in/api/users/' + resBody

}).then((resp)=> {

//expect(resp.body).to.have.property('name', 'Aruna');
//expect(resp.body).to.have.property('job', 'CEO');

expect(resp.body.name).to.eq('Aruna')
expect(resp.body.job).to.eq('CEO')


})




})







})

})