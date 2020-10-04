$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search_Product.feature");
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
  "name": "This is to Search product in application",
  "description": "",
  "id": "this-is-to-search-product-in-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 9410896300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search Product",
  "description": "",
  "id": "this-is-to-search-product-in-application;search-product",
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
  "name": "I open browser and click on signin",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "scroll down the webpage",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Login in application by registered username and password",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Login Successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I search for product",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "i will get the Searched product list",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.I_open_browser()"
});
formatter.result({
  "duration": 10533190700,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.Scroll_webpage()"
});
formatter.result({
  "duration": 89170600,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.Login()"
});
formatter.result({
  "duration": 1735945299,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.validate_Login()"
});
formatter.result({
  "duration": 2911248900,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.Search_product()"
});
formatter.result({
  "duration": 2417403199,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.then()"
});
formatter.result({
  "duration": 74844400,
  "status": "passed"
});
formatter.after({
  "duration": 2253467600,
  "status": "passed"
});
formatter.uri("signup.feature");
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
formatter.before({
  "duration": 9547803800,
  "status": "passed"
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
  "name": "Fill the First_name last_name pass and DOB",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Validate checkbox Text",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Fill the Address detail",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1399418600,
  "status": "passed"
});
});