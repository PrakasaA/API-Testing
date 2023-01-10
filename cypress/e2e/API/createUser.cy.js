describe('create new user', () => {
    var user = {
        "name": "prakasa",
        "job": "leader"
    }

    it('create new user', () => {
        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users',
            body: {
                name: "prakasa",
                job: "leader"
            }
        
    
        }).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).to.have.property('name', "prakasa")
            expect(response.body).to.have.property('job', "leader")
        })
    })
})