
describe('validate body', () => {
    it('successfully validate body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        // cy.get('@pokemon').its('body').its('forms')
        // .should('name','limber')
        .then((response)=> {
            expect(response.body).to.have.property('name', 'ditto')
        })

    })
})