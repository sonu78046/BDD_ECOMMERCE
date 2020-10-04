package Registration_Steps;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import Utilities.SetBrowser;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	private WebDriver driver;
	private String Email="abc784@gmail.com";
	public Steps() {
		this.driver=SetBrowser.getDriver();
	}
	@Given("^I open my_store application$")
	public void i_open_my_store_application() throws Throwable {
		driver.get("http://automationpractice.com/index.php");
	}

	@When("^I click on sign_in button$")
	public void i_click_on_sign_in_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement Signup_Button=driver.findElement(By.xpath("//a[@class='login']"));
		Signup_Button.click();
		Thread.sleep(5000);
	}
	@And("^Scroll down webpage$")
	public void Scroll_down_webpageScroll_down_webpage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 JavascriptExecutor js=(JavascriptExecutor) driver;
	 js.executeScript("window.scrollBy(0,5000)");
	}
	@Then("^I validate the pagetitle$")
	public void i_validate_the_outcomes() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 String PageTitle=driver.getTitle();
	 Assert.assertEquals("Login - My Store",PageTitle);
	}
	
	@Then("^I enter email id for signup$")
	public void i_enter_emailid_for_signup() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 driver.findElement(By.xpath("//input[@id='email_create']")).sendKeys(Email);
	 driver.findElement(By.xpath("//form[@id='create-account_form']//span[1]")).click();
	}
	@And("^go to Create account page$")
	public void go_to_personal_info_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String header=driver.findElement(By.className("page-subheading")).getText();
		System.out.println(header);
	 Assert.assertEquals(header,"CREATE AN ACCOUNT");
	}
	@And("^Select the name tile from radio button$")
	public void Select_the_name_tile_from_radio_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(5000);
	 driver.findElement(By.xpath("//div[@class='clearfix']//div[1]//label[1]")).click();
	}
	@And("^Fill the First_name last_name pass and DOB$")
	public void Fill_the_First_name_last_name_and_pass_and_DOB() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 driver.findElement(By.xpath("//input[@id='customer_firstname']")).sendKeys("Vishal");
	 driver.findElement(By.xpath("//input[@id='customer_lastname']")).sendKeys("dadlani");
	 driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys("vishal@123");
		/*
		 * Select days=new Select(driver.findElement(By.xpath(
		 * "//select[@id='days']//option[contains(text(),'10')]"))); days.deselectAll();
		 * days.selectByVisibleText("10");
		 */
	 WebElement date = driver.findElement(By.xpath("//select[@id='days']"));  
	 Select dropdown = new Select(date);
	 dropdown.selectByVisibleText("10  ");
	 
	 WebElement month = driver.findElement(By.xpath("//select[@id='months']"));  
	 Select dropdown_month = new Select(month);
	 dropdown_month.selectByVisibleText("March ");
	 
	 WebElement year = driver.findElement(By.xpath("//select[@id='years']"));  
	 Select year_month = new Select(year);
	 year_month.selectByVisibleText("2000  ");
	}
	@And("^Validate checkbox Text$")
	public void Validate_checkbox_Text() throws Throwable {
		String CheckboxText1=driver.findElement(By.xpath("//label[contains(text(),'Sign up for our newsletter!')]")).getText();
		Assert.assertEquals(CheckboxText1, "Sign up for our newsletter!");
		
		String CheckboxText2=driver.findElement(By.xpath("//label[contains(text(),'Receive special offers from our partners!')]")).getText();
		Assert.assertEquals(CheckboxText2,"Receive special offers from our partners!");
	}
	@Then("^Fill the Address detail$")
	public void fill_address() {
		driver.findElement(By.xpath("//input[@id='firstname']")).sendKeys("Vishal");
		driver.findElement(By.xpath("//input[@id='lastname']")).sendKeys("Dadlani");
		driver.findElement(By.xpath("//input[@id='company']")).sendKeys("Eclipse_hub");
		driver.findElement(By.xpath("//input[@id='address1']")).sendKeys("400 N US HIGHWAY 1 , TEQUESTA, FL");
		driver.findElement(By.xpath("//input[@id='city']")).sendKeys("Tequesta");
		WebElement States=driver.findElement(By.xpath("//select[@id='id_state']"));
		Select select_states=new Select(States);
		select_states.selectByVisibleText("Florida");
		driver.findElement(By.xpath("//input[@id='postcode']")).sendKeys("33469");
		
		WebElement Country=driver.findElement(By.xpath("//select[@id='id_country']"));
		Select select_country=new Select(Country);
		select_country.selectByVisibleText("United States");
		
		driver.findElement(By.xpath("//input[@id='phone_mobile']")).sendKeys("8504881234");
		WebElement AddresaTag=driver.findElement(By.xpath("//input[@id='alias']"));
		AddresaTag.clear();
		AddresaTag.sendKeys("Home Adddress");
	}
	@And("^Click on submit$")
	public void Submit_button() {
		WebElement Submit=driver.findElement(By.xpath("//span[contains(text(),'Register')]"));
		Submit.click();
	}	
}