describe('Create New User', () => {
    it('successfully create new user', () => {
        var user = {
            "name": "prakasa",
            "job": "QA Engineer"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', user)
        .then((response) => {
            expect(response.status).equal(201)
            expect(response.body.data).to.have.property('name', "prakasa")
        });
    })
});