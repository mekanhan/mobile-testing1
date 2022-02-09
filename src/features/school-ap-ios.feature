@ios
Feature: Login in and iOS School app
    @TEST002
    Scenario: As a user, I the iOS school app
        # When I install the app
        When I lock device
        And I unlock device
        When I activate the app
        And   I am on "homePage"
        When I wait for "3" seconds
        When  I tap on "btnSchools"
        When  I tap on "btnClose"
        When  I tap on "btnMenu"
        When  I tap on "btnClose2"
        When  I tap on "tglRooms"
        When  I tap on "tglSchool"
