Feature:REQRES Api Validation

     end to end testing of reqres api services

     Scenario: Get single user
     Given I access the get single user endpoint
     Then Verify the response from the server
     Examples:
         | email                   | firstName | lastName |
         | janet.weaver@reqres.in  |   Janet   | Weaver   |