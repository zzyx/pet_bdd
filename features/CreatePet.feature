Feature: As a user I can create new pet

  Scenario: I can create new pet with name only
    When I create pet with name Sunny
    Then I see status code is 200
     And I see pet created with correct name Sunny
     And I see tags are empty

  Scenario: I can create pet and get ID
    When I create pet with name Sunny
    Then I see status code is 200
     And I see id of created pet


  Scenario: I cannot create new pet without name
    When I create pet with name Sunny
    Then I see status code is 400
