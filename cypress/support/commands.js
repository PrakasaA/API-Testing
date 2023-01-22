// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --


// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const token = "a25bfb0d16219c0f90ad5f308a71de2e9c4867b8241cc939ccbd77e776f1f8c2"

Cypress.Commands.add('makeUser', () => {
    cy.fixture("create").then((create) => {
        
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : 'Bearer ' + token
            },
            body : {
                name : create.name,
                gender : create.gender,
                email : create.email,
                status : create.status
            }
        }).then((response) => {
            expect(response.status).eq(201)
            expect(response.body).to.have.property('name', create.name)
            expect(response.body).to.have.property('gender', create.gender)
            expect(response.body).to.have.property('email', create.email)
            expect(response.body).to.have.property('status', create.status)
        })
    })
})