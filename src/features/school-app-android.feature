@android
Feature: Login in and testing app
    @TEST001
    Scenario: As a user, I login to the school app
        Given I open the school app
        And   I am on "feedPage"
        And   I tap on "btnGotIt"
        When  I tap on "tglRooms"
        When  I enter "automation.testing+r1@apptegy.com" email
        When  I enter "taco1234" password
        When  I go back
        When  I tap on "tglRooms"
        When  I enter "automation.testing+r1@apptegy.com" email
        When  I enter "taco1234" password
        When  I tap on "btnSignInRooms"