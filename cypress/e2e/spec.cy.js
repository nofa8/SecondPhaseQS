describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://my-app.2221437.workers.dev')
  })

  it('h1 contains "MEICM"', () => {
    cy.visit('https://my-app.2221437.workers.dev')
    cy.get('h1').contains('MEICM')
  })
  it('greeting is rendered from the database', () => {
    cy.request('https://my-app.2221437.workers.dev')
      .its('body')
      .should('match', /<h1>Hello, .+!<\/h1>/)
  })
})
