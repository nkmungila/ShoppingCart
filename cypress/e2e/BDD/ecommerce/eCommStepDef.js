import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

Given('I open Ecommerce page',function(){
    cy.visit('/')
})