/// <reference types = "Cypress"/>



describe('This suite will test post requests / post users', ()=> {

    let postUsers;

beforeEach('Before each to read postUser.json file', ()=> {

cy.readFile('cypress/fixtures/postUser.json').then((res)=>{

postUsers = res;


})
})

before('Before Block', ()=> {

cy.request('POST','https://reqres.in/api/users').as('postRequest');

})


it('Testing post request : Adding a new user via post request and verifying the name and job details individually in response', ()=> {

    cy.request({

        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
            "name": "Dhruv",
            "job": "Tester"
        }
    
    }).then((res)=> {
    
    expect(res.status).to.eq(201);
    expect(res.body.name).to.eq('Dhruv');
    expect(res.body.job).to.eq('Tester');

    
    })

})


it('Testing post request : verifying the details of the whole response as per the request body', ()=> {

cy.request({

    method: 'POST',
    url: 'https://reqres.in/api/users',
    body: {
        "name": "Dhruv",
        "job": "Tester"
    }

}).then((res)=> {

expect(res.body).to.include ({

    "name": "Dhruv",
    "job": "Tester",
    
})

})

})


it('Post request test: posting users from json file and validating the response',()=> {

    cy.request({

        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: postUsers

    }).its('body')

.should('deep.eq', postUsers);
    
})


it('post request test using expect with property', ()=>{

 cy.request({

    method: 'POST',
    url: 'https://reqres.in/api/users',
    body: {
        "name": "Aruna",
        "job": "Balraj"
    }

 }).then((res)=> {

cy.log(JSON.stringify(res));    
expect(res.body).to.have.property('name', 'Aruna')
expect(res.body).to.have.property('job', 'Balraj')

 })

})


it('post request test : Test for headers in repsonse of post request', ()=>{

    cy.request({
   
       method: 'POST',
       url: 'https://reqres.in/api/users',
       body: {
           "name": "Aruna",
           "job": "Balraj"
       }
   
    }).its('headers.content-length').should('deep.eq', '81');

    })

})


