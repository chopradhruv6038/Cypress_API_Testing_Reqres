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

   cy.log(JSON.stringify(res));

expect(res.body).to.include(jsonData);

const userid = res.body.id;

cy.log('Id of the user is ', + userid)


cy.request({

    method: 'DELETE',
    url : 'https://reqres.in/api/users/' + userid

}).then((respon)=> {

expect(respon.status).eq(204);


})


})


})

})


