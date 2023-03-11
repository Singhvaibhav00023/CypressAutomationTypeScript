/// <reference types="cypress" />
const dataJSON = require('../../../fixtures/createuser.json')
// we can use cy.fixture()
describe('Post Request Tests',()=>
{
    // Arrange
    let accessToken = '4c6e9d6a738f5a20086e64ad1f9be13472d8b5ca3523a4145901213867bdd84f'
    let testEmail=''
    it('create user',()=>
    {
        testEmail = Date.now()+'@gmail.com'
        // Act 
        //1. create user (POST)
        cy.request({
            method: 'POST',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
               'Authorization' : 'Bearer ' + accessToken
            },
            body : {
                'name'   : dataJSON.name,
                'gender' : dataJSON.gender,
                'email'  : testEmail,
                'status' : dataJSON.status
            }
        }).then((response)=>{
            // log Response
         //   cy.log(JSON.stringify(response.body))
            // Assert
            expect(response.status).to.eq(201)
            expect(response.body.data).has.property('name','Test')
            expect(response.body.data).has.property('gender','male')
            expect(response.body.data).has.property('email',testEmail)
            expect(response.body.data).has.property('status','active')
        }).then((response)=>{
            const userId= response.body.data.id
            cy.log("User Id is: "+userId)
            //2. get user (GET)
            cy.request({
                method: 'GET',
                url : 'https://gorest.co.in/public/v1/users/'+userId,
                headers : {
                   'Authorization' : 'Bearer ' + accessToken
                }
            }).then((response)=>{
              //  cy.log(JSON.stringify(response))
    
                // Assert
                expect(response.status).to.eq(200)
                expect(response.body.data).has.property('id',userId)
                expect(response.body.data).has.property('name','Test')
                expect(response.body.data).has.property('gender','male')
                expect(response.body.data).has.property('email',testEmail)
                expect(response.body.data).has.property('status','active')      
            })
        })
    })
    })