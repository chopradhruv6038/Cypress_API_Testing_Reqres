/// <reference types = "Cypress"/>

describe('This suite will test Get requests chaining from Reqres', ()=> {

   

it('Tests: Get Request Chaining using id of the user from the response of first get request', ()=> {

cy.request({

    method: 'Get',
    url : 'https://reqres.in/api/users/'

}).then((res)=> {

  const userid = res.body.data[2].id;

return userid;

}).then((userid)=> {

cy.request({

    method: 'Get',
    url: 'https://reqres.in/api/users/'+ userid // getting user based on id got from previous get request

}).then((res)=> {

expect(res.body.data.id).eq(3);
expect(res.body.data.email).eq('emma.wong@reqres.in');
expect(res.body.data.first_name).eq('Emma');
expect(res.body.data.last_name).eq('Wong');
expect(res.body.data.avatar).eq('https://reqres.in/img/faces/3-image.jpg');

})



})





})













})