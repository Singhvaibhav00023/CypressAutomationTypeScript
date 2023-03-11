/// <reference types="cypress" />

describe('go rest tests',()=>
{
    let accessToken = '4c6e9d6a738f5a20086e64ad1f9be13472d8b5ca3523a4145901213867bdd84f'
    it('get user test',()=>
    {
    cy.request({
        method: 'GET',
        url : 'https://gorest.co.in/public/v2/users',
        headers: {
            'authorization':'Bearer'+accessToken
        }
    }).then((response)=>
    {
        expect(response.status).to.eq(200)
        expect(response.body[0].name).to.eq('Bhadrak Ganaka')
        expect(response.body).to.have.property('x[0].name','Bhadrak Ganaka')
    })
})

it.only('get user by id',()=>
{
cy.request({
    method: 'GET',
    url : 'https://gorest.co.in/public/v2/users/939793',
    headers: {
        'authorization':'Bearer 4c6e9d6a738f5a20086e64ad1f9be13472d8b5ca3523a4145901213867bdd84f'
    }
}).then((response)=>
{
    expect(response.status).to.eq(200)
    expect(response.body.name).to.eq('Pres. Arnesh Iyengar')
})
})
})