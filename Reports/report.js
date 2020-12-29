$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SAM/Desktop/Java/AdactinDataTable/src/test/resources/Adactin.feature");
formatter.feature({
  "name": "Verifying the login functionality of Adactin",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the adactin login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and click login",
  "keyword": "When "
});
formatter.step({
  "name": "Search Hotel page to be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User is on search Hotel page enter \"\u003clocation\u003e\",\"\u003chotel\u003e\",\"\u003cRoomtype\u003e\",\"\u003cNo.of Rooms\u003e\",\"\u003ccheck in date\u003e\",\"\u003ccheck out date\u003e\",\"\u003cAdult per Room\u003e\",\"\u003cChildren per Room\u003e\" details",
  "keyword": "When "
});
formatter.step({
  "name": "click search button",
  "keyword": "Then "
});
formatter.step({
  "name": "User is on select hotel page select the hotel package",
  "keyword": "When "
});
formatter.step({
  "name": "click continue",
  "keyword": "Then "
});
formatter.step({
  "name": "User is on enter \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cBillingaddress\u003e\"",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "cardno",
        "cardtype",
        "expmon",
        "expyear",
        "cvv"
      ]
    },
    {
      "cells": [
        "4263982640269299",
        "VISA",
        "January",
        "2021",
        "123"
      ]
    }
  ]
});
formatter.step({
  "name": "Click BookNow button",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on Booking Confirmation page verify the details",
  "keyword": "When "
});
formatter.step({
  "name": "click Logout",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotel",
        "Roomtype",
        "No.of Rooms",
        "check in date",
        "check out date",
        "Adult per Room",
        "Children per Room",
        "firstname",
        "lastname",
        "Billingaddress"
      ]
    },
    {
      "cells": [
        "anonym123",
        "admin123",
        "Melbourne",
        "Hotel Sunshine",
        "Deluxe",
        "6 - Six",
        "25/12/2020",
        "28/12/2020",
        "3 - Three",
        "2 - Two",
        "Greens",
        "Tech",
        "Plot No.19,Balamurugan Garden,OMR Road,Kancheepuram District,Okkiam, Thoraipakkam"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the adactin login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_adactin_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the valid \"anonym123\" and \"admin123\" and click login",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_valid_and_and_click_login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search Hotel page to be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.search_Hotel_page_to_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on search Hotel page enter \"Melbourne\",\"Hotel Sunshine\",\"Deluxe\",\"6 - Six\",\"25/12/2020\",\"28/12/2020\",\"3 - Three\",\"2 - Two\" details",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_on_search_Hotel_page_enter_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on select hotel page select the hotel package",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_on_select_hotel_page_select_the_hotel_package()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click continue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on enter \"Greens\",\"Tech\",\"Plot No.19,Balamurugan Garden,OMR Road,Kancheepuram District,Okkiam, Thoraipakkam\"",
  "rows": [
    {
      "cells": [
        "cardno",
        "cardtype",
        "expmon",
        "expyear",
        "cvv"
      ]
    },
    {
      "cells": [
        "4263982640269299",
        "VISA",
        "January",
        "2021",
        "123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_on_enter(String,String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click BookNow button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_BookNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Booking Confirmation page verify the details",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_on_Booking_Confirmation_page_verify_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.click_Logout()"
});
formatter.result({
  "status": "passed"
});
});