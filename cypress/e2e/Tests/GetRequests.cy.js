/// <reference types = "Cypress"/>



describe('This suite will test Get Requests', ()=> {

  beforeEach(()=> {

cy.request('Get', 'https://reqres.in/api/users/').as('getRequest')

  })

  before(()=> {

cy.readFile('cypress/fixtures/allUsers.json').then((res)=> {

  allUsers = res;

})



  })

let allUsers;

const bodyResponseUser2 = { //multi json object
  "data": {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  "support": {
      "url": "https://reqres.in/#support-heading",
      "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
};  

let dataresult = { //single json object
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
  };

it('Get request Test/Assertion : Using then command', function(){

cy.request({
  
method : 'Get',
url : 'https://reqres.in/api/users/2'

}).then((res) => {

expect(res.status).to.eq(200);
expect(res.body.data.id).to.eq(2);
expect(res.body.data.email).to.eq('janet.weaver@reqres.in');
expect(res.body.data.first_name).to.eq('Janet');
expect(res.body.data.last_name).to.eq('Weaver');
expect(res.body.data.avatar).to.equals('https://reqres.in/img/faces/2-image.jpg');

})

})

it('Get request Test/Assertion : Using its query', ()=> {

cy.request('Get', 'https://reqres.in/api/users/2')
.its('body')
.its('support')
.its('url').should('eq', 'https://reqres.in/#support-heading')

})

it('Get request Test/Assertion : Using chained its query', ()=> {

cy.request('Get', 'https://reqres.in/api/users/2')
.its('body.support.text')
.should('eq', 'To keep ReqRes free, contributions towards server costs are appreciated!')

})

it('Get request Test/Assertion with single json object : Using then command', ()=> {

  cy.request({

    method: 'Get',
    url : 'https://reqres.in/api/users/2',

  }).then((res) => {
  
  expect(res.body.data).to.include(dataresult);
  
  })

})


it('Get request Test/Assertion with multi json objects : Using its query, This will also check the schema of the json body.', ()=> {

cy.request({

method: 'Get',
url : 'https://reqres.in/api/users/2',

}).its('body').should('deep.eq', bodyResponseUser2);

})


it('Get request Test : using get request alias', ()=> {

cy.get('@getRequest').then((res)=> {

expect(res.status).to.eq(200)

})


})


it('Get request Test/Assertion: Response Headers and values', ()=> {

  cy.get('@getRequest').then((res)=> {
  
  expect(res.headers.server).to.eq('cloudflare');
  expect(res.headers.vary).to.eq('Accept-Encoding');
 
  
  
  })
  
  })



it('Get request Test/Assertion: Response Headers and values using its', ()=> {

  cy.get('@getRequest')
  
  .its('headers.server').should('eq', 'cloudflare')
 
})

it('Get request Test/Assertion: Response Headers and values where there is DASH (-) in header', ()=> {

  cy.get('@getRequest')
  
  .its('headers.content-encoding').should('eq', 'gzip')
 
})

it('Get request Test from JSON file - Reading data or body to assert from Json file', ()=> {

  cy.request({

    method: 'Get',
    url: 'https://reqres.in/api/users/'
  
  }).then((res)=> {
  
    expect(res.body).to.deep.eq(allUsers);
  
  })





})




})












