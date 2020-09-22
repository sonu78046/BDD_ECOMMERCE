package Steps;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	private WebDriver driver;
	private String Email="abc784@gmail.com";
	@Given("^I open my_store application$")
	public void i_open_my_store_application() throws Throwable {
	  System.setProperty("webdriver.chrome.driver","E:\\java\\Chrome\\chromedriver.exe");
	  driver=new ChromeDriver();
	  driver.manage().window().maximize();
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
	@And("^Fill the First_name last_name and pass$")
	public void Fill_the_First_name_last_name_and_pass() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 driver.findElement(By.xpath("//input[@id='customer_firstname']")).sendKeys("Vishal");
	 driver.findElement(By.xpath("//input[@id='customer_lastname']")).sendKeys("dadlani");
	 driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys("vishal@123");
	}
}
