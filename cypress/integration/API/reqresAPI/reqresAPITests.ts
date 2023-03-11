describe('reqres API Test',function()
{
    it('Test GET Request',function()
    {
        cy.request('GET','https://reqres.in/api/users/2',)
        .then((response)=>
        {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.have.property('email','janet.weaver@reqres.in')
            expect(response.body.data).to.have.property('first_name','Janet')
            expect(response.body.data).to.have.property('last_name','Weaver')
        })
    })

    it('Test Post Request',function()
    {
        cy.request('POST','https://reqres.in/api/users',{
            "name": "Test",
            "job": "QA"
        })
        .then((response)=>
        {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name','Test')
            expect(response.body).to.have.property('job','QA')
        })
    })

    it('Test PUT Request',function()
    {
        cy.request('PUT','https://reqres.in/api/users/2',{
            "name": "Automation",
            "job": "Engineer"
        })
        .then((response)=>
        {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name','Automation')
            expect(response.body).to.have.property('job','Engineer')
        })
    })

    it('Test Delete Request',function()
    {
        cy.request('Delete','https://reqres.in/api/users/2')
        .then((response)=>
        {
            expect(response.status).to.eq(204)
        })
    })

})