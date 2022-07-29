class HomePage{
    get EditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }
    get Email(){
        return cy.get('input[name="email"]')
    }
    get Gender(){
        return cy.get('#exampleFormControlSelect1')
    }
    get TwoWayEditBox(){
        return cy.get('input[name="name"]:nth-child(1)')
         
    }
    get shopTab(){
        return cy.get('.nav-link')
    }
}
export default HomePage;