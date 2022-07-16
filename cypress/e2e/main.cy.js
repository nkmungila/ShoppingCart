/// <reference types = "Cypress" />
describe('Home Page', () => {
  
  before(()=>{
    cy.fixture('example').then(function(data){
      this.data = data      
    })
  })
  it('passes', function() {
    cy.visit('/')
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('input[name="email"]').type(this.data.email)
    cy.get('#exampleFormControlSelect1').select(this.data.gender)
  })
})