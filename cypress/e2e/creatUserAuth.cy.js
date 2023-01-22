

describe('create user', () => {

    it('create new user', () => {
        const token = "a25bfb0d16219c0f90ad5f308a71de2e9c4867b8241cc939ccbd77e776f1f8c2"

        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : 'Bearer ' + token
            },
            body : {
                name : "prakasa",
                gender : "male",
                email : "prakasa10@gmail.co",
                status : "active"
            }
        }).then((response) => {
            expect(response.status).eq(201)
            expect(response.body).to.have.property('name','prakasa')
            expect(response.body).to.have.property('gender', 'male')
            expect(response.body).to.have.property('email', 'prakasa10@gmail.co')
            expect(response.body).to.have.property('status', 'active')
        })
    })

})