@ios
Feature: Login in and testing app
    @TEST002
    Scenario: As a user, I the iOS school app
        When I lock device
        And I unlock device
        When I activate the app
        And   I am on "homePage"
        When  I tap on "btnSchools"