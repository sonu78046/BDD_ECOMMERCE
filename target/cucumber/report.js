$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "My store application scenarion",
  "description": "",
  "id": "my-store-application-scenarion",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 23,
  "name": "signup in application",
  "description": "",
  "id": "my-store-application-scenarion;signup-in-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I open my_store application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on sign_in button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Scroll down webpage",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I validate the pagetitle",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I enter email id for signup",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "go to Create account page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Select the name tile from radio button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Fill the First_name last_name and pass",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_open_my_store_application()"
});
formatter.result({
  "duration": 20959411000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_sign_in_button()"
});
formatter.result({
  "duration": 6409778600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Scroll_down_webpageScroll_down_webpage()"
});
formatter.result({
  "duration": 73575800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 27992800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_enter_emailid_for_signup()"
});
formatter.result({
  "duration": 612451500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.go_to_personal_info_page()"
});
formatter.result({
  "duration": 175405800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Select_the_name_tile_from_radio_button()"
});
formatter.result({
  "duration": 5171964100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Fill_the_First_name_last_name_and_pass()"
});
formatter.result({
  "duration": 698521000,
  "status": "passed"
});
});