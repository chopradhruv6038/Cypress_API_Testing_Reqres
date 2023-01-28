describe('This suite will test POST & PUT request in chaining', ()=> {

let jsonData;

    before('Before Block', ()=>{

cy.readFile('cypress/fixtures/singlePostUser.json').then((res)=> {

    jsonData = res;


})
    })


it('POST & PUT Requests Tests', ()=> {

cy.request({

    method: 'POST',
    url: 'https://reqres.in/api/users/',
    body: jsonData

}).then((res)=> {

const bodyid = res.body.id;

return bodyid;

}).then((bodyid)=> {

    cy.log('Id of the user is ', + bodyid)

cy.request({

    method: 'DELETE',
    url : 'https://reqres.in/api/users/' + bodyid


}).then((respon)=> {

expect(respon.status).eq(204);


})


})


})










})


