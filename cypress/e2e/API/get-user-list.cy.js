describe('Get user list', () => {
    it('verify the list users will display', () => {
        cy.request({
            method: 'Get',
            url: 'https://reqres.in/api/users'
        })
    });
});