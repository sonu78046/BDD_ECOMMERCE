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
Feature: This is to Search product in application

  @tag1
  Scenario: Search Product
    Given I open browser and click on signin
    And scroll down the webpage
    When Login in application by registered username and password
    Then Login Successfull
    When I search for product
    Then i will get the Searched product list
    
   ## Examples:
    ##| username       | password |
   ## |abc784@gmail.com|vishal@123|