@android
Feature: Login in and testing app
    @TEST001
    Scenario: As a user, I login to the school app
        Given I am on "feedPage"
        When  I tap on Got it
        When  I tap on "tglRooms"
        When  I enter "automation.testing+r1@apptegy.com" email
        When  I enter "taco1234" password
        When  I tap on "btnSignInRooms"