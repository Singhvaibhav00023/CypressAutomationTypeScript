/// <reference types="Cypress" />

import { DataTable, Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I access the get single user endpoint',function()
{
   cy.request('GET','https://reqres.in/api/users/2').then((response)=>
   {
       expect(response.body).to.have.property('job','QA')
       expect(response.status).to.eq(201)
   })
});

Then('Verify the response from the server',(dataTable)=>
{
   
})