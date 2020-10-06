$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
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
  "duration": 10370787600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "signup in application",
  "description": "",
  "id": "my-store-application-scenarion;signup-in-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I open my_store application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on sign_in button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Scroll down webpage",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I validate the pagetitle",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I enter email id for signup",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "go to Create account page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Select the name tile from radio button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Fill the First_name last_name pass and DOB",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Validate checkbox Text",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Fill the Address detail",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Vrify the login user name",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Logout From Application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_open_my_store_application()"
});
formatter.result({
  "duration": 7436341100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_sign_in_button()"
});
formatter.result({
  "duration": 10262152600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Scroll_down_webpageScroll_down_webpage()"
});
formatter.result({
  "duration": 56750000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 26041700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_enter_emailid_for_signup()"
});
formatter.result({
  "duration": 464135300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.go_to_personal_info_page()"
});
formatter.result({
  "duration": 85404400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Select_the_name_tile_from_radio_button()"
});
formatter.result({
  "duration": 3071190800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Fill_the_First_name_last_name_and_pass_and_DOB()"
});
formatter.result({
  "duration": 1601362600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Validate_checkbox_Text()"
});
formatter.result({
  "duration": 120715000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.fill_address()"
});
formatter.result({
  "duration": 2268426600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Submit_button()"
});
formatter.result({
  "duration": 2219349800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Vrify_the_login_user_name()"
});
formatter.result({
  "duration": 114709000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.logout()"
});
formatter.result({
  "duration": 2166745000,
  "status": "passed"
});
formatter.after({
  "duration": 1584841000,
  "status": "passed"
});
formatter.before({
  "duration": 9376386200,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search Product",
  "description": "",
  "id": "my-store-application-scenarion;search-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "user Registration is done",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "redirect to application homepage Url",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on sign_in button again",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Scroll down the webpage",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I login application with Registerd userName and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Vrify the loged user name",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I search for product",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "i will get the Searched product list",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Steps.user_Registration_is_done()"
});
formatter.result({
  "duration": 231700,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.redirect_to_application_homepage_Url()"
});
formatter.result({
  "duration": 7300558400,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.I_click_on_sign_in_button_again()"
});
formatter.result({
  "duration": 2316022700,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.Scroll_down_webpage()"
});
formatter.result({
  "duration": 168072500,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.Login()"
});
formatter.result({
  "duration": 2625538000,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.Vrify_the_loged_user_name2()"
});
formatter.result({
  "duration": 133866400,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.I_search_for_product()"
});
formatter.result({
  "duration": 2325378900,
  "status": "passed"
});
formatter.match({
  "location": "Search_Steps.i_will_get_the_Searched_product_list()"
});
formatter.result({
  "duration": 57643600,
  "status": "passed"
});
formatter.after({
  "duration": 1295684500,
  "status": "passed"
});
});