/// <reference types = "Cypress"/>

describe('This suite will test Get Requests', ()=> {

it('Testing Body details via Get request for User 2 using then', function(){

cy.request({

method : 'Get',
url : 'https://reqres.in/api/users/2'

}).then((res) => {

expect(res.status).to.eq(200);
expect(res.body.data.id).to.eq(2);
expect(res.body.data.email).eq('janet.weaver@reqres.in');
expect(res.body.data.first_name).to.eq('Janet');
expect(res.body.data.last_name).to.eq('Weaver');
expect(res.body.data.avatar).to.equals('https://reqres.in/img/faces/2-image.jpg');

})

})

it('Testing support URL using its', ()=> {

cy.request('Get', 'https://reqres.in/api/users/2')
.its('body')
.its('support')
.its('url').should('eq', 'https://reqres.in/#support-heading')

})

it('Testing support Text using its', ()=> {

cy.request('Get', 'https://reqres.in/api/users/2')
.its('body.support.text')
.should('eq', 'To keep ReqRes free, contributions towards server costs are appreciated!')

image.png})

})












