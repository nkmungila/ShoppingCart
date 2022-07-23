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
    cy.get('input[name="name"]:nth-child(2)').should('have.value',this.data.name)
    
    cy.get('input[name="name"]').each(($e1) =>{
      let textbox = $e1.val()
      cy.log(textbox)
    })
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
    cy.get('#inlineRadio3').should('be.disabled')
    cy.get('input[name="name"]').then((e1) =>{
      const prop = e1.prop("minlength")
      cy.log(prop)
      //expect(prop).should.have.attr('minlength','2')
      //assert(prop).should.have.attr('minlength','2')
    })
    cy.get('.nav-link').contains('Shop').click()
    this.data.productName.forEach(function(element){
      cy.addCart(element)
    })
    
  })
})