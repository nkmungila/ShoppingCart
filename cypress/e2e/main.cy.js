describe('Home Page', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('input[name="name"]:nth-child(2)').type('Bob')
    cy.get('#exampleFormControlSelect1').select('Female')
  })
})