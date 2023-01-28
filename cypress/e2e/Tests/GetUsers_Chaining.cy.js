/// <reference types = "Cypress"/>

describe('This suite will test Get requests chaining from Reqres', ()=> {

it('Tests: Get Request Chaining using id of the user from the response of first get request', ()=> {

cy.request({ //1 get request

    method: 'Get',
    url : 'https://reqres.in/api/users/'

}).then((res)=> {

  const userid = res.body.data[2].id;

return userid;

}).then((userid)=> {

cy.request({ // 2 get request for for the specific user id.

    method: 'Get',
    url: 'https://reqres.in/api/users/'+ userid // getting user based on id got from previous get request

}).then((res)=> {

expect(res.status).eq(200);
expect(res.body.data.id).eq(userid);
expect(res.body.data.email).eq('emma.wong@reqres.in');
expect(res.body.data.first_name).eq('Emma');
expect(res.body.data.last_name).eq('Wong');
expect(res.body.data.avatar).eq('https://reqres.in/img/faces/3-image.jpg');

})

})


})






it('Get Request chaining test with loop to traverse through all body', ()=> {


    cy.request({
    
        method: 'Get',
        url : 'https://reqres.in/api/users/'
    
    }).then((res)=> {
    
    const bodydata = res.body.data;
    
    return bodydata;
    
    }).then((bodydata)=>{
    
    for(let i=0; i<bodydata.length; i++){
    
        cy.request({
    
            method: 'Get',
            url : 'https://reqres.in/api/users/'+ bodydata[i].id //no hard coded values
    
        }).then((resp)=>{
    
    
            expect(resp.status).eq(200)


            expect(resp.body.data).to.have.property('id', bodydata[i].id )
    
    
        })
    
    
    
    
    }
    
    })






})













})