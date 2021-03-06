#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: My store application scenarion
@tag1
  Scenario: signup in application
    Given I open my_store application
    When I click on sign_in button
    And Scroll down webpage
    Then I validate the pagetitle
    Then I enter email id for signup
    And go to Create account page
    And Select the name tile from radio button
    And Fill the First_name last_name pass and DOB
    And Validate checkbox Text
    Then Fill the Address detail
    And Click on submit
    Then Vrify the login user name
    And Logout From Application
  @tag1  
  Scenario: Search Product
  	Given user Registration is done
  	And redirect to application homepage Url
  	Then I click on sign_in button again
    And Scroll down the webpage 
  	Then I login application with Registerd userName and Password
  	And Vrify the loged user name 
    When I search for product
    Then i will get the Searched product list