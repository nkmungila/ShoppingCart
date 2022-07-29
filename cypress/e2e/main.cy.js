/// <reference types = "Cypress" />
import HomePage from '../PageObject/HomePage'
import Homepage from '../PageObject/HomePage'

describe('Home Page', () => {
  
  before(()=>{
    cy.fixture('example').then(function(data){
      this.data = data      
    })
  })
  it('passes', function() {
    const homepage = new HomePage()
    cy.visit('/')
    homepage.EditBox.type(this.data.name)
    homepage.Email.type(this.data.email)
    homepage.Gender.select(this.data.gender)
    homepage.TwoWayEditBox.should('have.value',this.data.name)
    
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