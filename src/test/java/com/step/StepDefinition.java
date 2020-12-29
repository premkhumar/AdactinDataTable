package com.step;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.base.LibGlobal;
import org.locators.BookConfirm;
import org.locators.BookaHotelPage;
import org.locators.LoginPage;
import org.locators.SearchHotelPage;
import org.locators.SelectHotelPage;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class StepDefinition extends LibGlobal{
	
	@Given("User is on the adactin login page")
	public void user_is_on_the_adactin_login_page() {

		browserLaunchChrome();
		maxWindows();
		enterUrl("https://adactinhotelapp.com/");
		implicitWait(20);
	}

	@When("User enters the valid {string} and {string} and click login")
	public void user_enters_the_valid_and_and_click_login(String string, String string2) throws InterruptedException {

		LoginPage l = new LoginPage();
		l.loginPage(string, string2);

	}

	@Then("Search Hotel page to be displayed")
	public void search_Hotel_page_to_be_displayed() {

		String actualUrl = driver.getCurrentUrl();
		String expectedUrl = "https://adactinhotelapp.com/SearchHotel.php";
		Assert.assertEquals(expectedUrl, actualUrl);

	}

	@When("User is on search Hotel page enter {string},{string},{string},{string},{string},{string},{string},{string} details")
	public void user_is_on_search_Hotel_page_enter_details(String string, String string2, String string3,
			String string4, String string5, String string6, String string7, String string8)
			throws InterruptedException {

		SearchHotelPage s = new SearchHotelPage();
		s.searchHotelPage(string, string2, string3, string4, string5, string6, string7, string8);

	}

	@Then("click search button")
	public void click_search_button() {
		SearchHotelPage s = new SearchHotelPage();
		s.getBtnSubmit().click();
	}

	@When("User is on select hotel page select the hotel package")
	public void user_is_on_select_hotel_page_select_the_hotel_package() {
		SelectHotelPage h = new SelectHotelPage();
		h.selectHotelPage();

	}

	@Then("click continue")
	public void click_continue() {
		SelectHotelPage h = new SelectHotelPage();
		h.selectContinue();
	}

	@When("User is on enter {string},{string},{string}")
	public void user_is_on_enter(String string, String string2, String string3, io.cucumber.datatable.DataTable dataTable) {
		BookaHotelPage b = new BookaHotelPage();
		//1d without header
//		List<String> a = dataTable.asList();
//		b.bookaHotelPage(string, string2, string3, a.get(0), a.get(1), a.get(2), a.get(3), a.get(4));
		
//		//2d without header
//		List<List<String>> asLs = dataTable.asLists();
//		List<String> ArrLis = asLs.get(1);
//		System.out.println(ArrLis.get(0));
		
//		//1d with header
//		Map<String, String> map = dataTable.asMap(String.class, String.class);
//		String string4 = map.get("cardno");
//		System.out.println(string4);
//		
//		b.bookaHotelPage(string, string2, string3, map.get("cardno"), map.get("cardtype"), map.get("expmon"), map.get("expyear"), map.get("cvv"));
	
		//2d with header
		List<Map<String,String>> asMaps = dataTable.asMaps(String.class, String.class);
		Map<String, String> map = asMaps.get(0);
		
		b.bookaHotelPage(string, string2, string3, map.get("cardno"), map.get("cardtype"), map.get("expmon"), map.get("expyear"), map.get("cvv"));
		
	}


	@Then("Click BookNow button")
	public void click_BookNow_button() {

		BookaHotelPage b = new BookaHotelPage();
		b.bookSubmit();
	}

	@When("user is on Booking Confirmation page verify the details")
	public void user_is_on_Booking_Confirmation_page_verify_the_details() throws InterruptedException, IOException {

		BookConfirm b = new BookConfirm();
		b.bookConfirm();

	}

	@Then("click Logout")
	public void click_Logout() {

		BookConfirm b = new BookConfirm();
		b.logout();

	}





}
