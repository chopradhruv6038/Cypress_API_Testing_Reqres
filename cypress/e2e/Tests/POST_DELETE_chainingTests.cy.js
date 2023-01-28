describe('This suite will test POST & PUT request in chaining', ()=> {


it('POST & PUT Requests Tests', ()=> {

cy.request({

    method: 'POST',
    url: 'https://reqres.in/api/users/',
    body: {
        "name": "Balraj",
        "job": "Tim Hortons manager"
    }

}).then((res)=> {

const bodyid = res.body.id;



return bodyid;



}).then((bodyid)=> {

    cy.log('id of the use is ' + bodyid)

cy.request({

    method: 'DELETE',
    url : 'https://reqres.in/api/users/' + bodyid


}).then((respon)=> {

expect(respon.status).eq(204);






})







})








})














})