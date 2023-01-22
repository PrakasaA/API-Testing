describe('Create New User', () => {
    it('successfully create new user', () => {
       
        cy.request({
            method:'POST',
            url :  'https://reqres.in/api/users',
            headers:{},
            body:{
                "name": "prakasa",
                "job": "QA Engineer"
            }
        }).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.data).to.have.property('name', "prakasa")
        });
    })
});