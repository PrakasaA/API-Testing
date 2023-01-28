
describe('validate body', () => {
    it('successfully validate body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        
        .then((response)=> {
            // expect(response.body).to.have.property('name', 'ditto')
            expect(response.body.abilities[0].ability).to.have.property('name','limber')
        })

    })
})