package Steps;

import java.util.HashMap;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import Utilities.SetBrowser;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Search_Steps {
	
	private WebDriver driver;
	SetBrowser x = new SetBrowser();

	public Search_Steps() {
		this.driver = SetBrowser.getDriver();
	}

	@Given("^user Registration is done$")
	public void user_Registration_is_done() {
		System.out.println("This in Second Scenarion");
	}

	@And("^redirect to application homepage Url$")
	public void redirect_to_application_homepage_Url() {
		driver.navigate().to("http://automationpractice.com/index.php");
	}

	@Then("^I click on sign_in button again$")
	public void I_click_on_sign_in_button_again() {
		WebElement Signup_Button = driver.findElement(By.xpath("//a[@class='login']"));
		Signup_Button.click();
	}

	@And("^Scroll down the webpage$")
	public void Scroll_down_webpage() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,5000)");
	}

	@Then("^I login application with Registerd userName and Password$")
	public void Login() {
		HashMap<String, String> Details = x.getvalueMap();
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys(Details.get("Email"));
		driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys(Details.get("Password"));
		driver.findElement(By.xpath("//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[1]/p[2]/button[1]/span[1]")).click();
	}

	@And("^Vrify the loged user name$")
	public void Vrify_the_loged_user_name2() {
		HashMap<String, String> Details = x.getvalueMap();

		String First_Name = Details.get("First_name");
		String Last_name = Details.get("Last_name");
		String name = First_Name + " " + Last_name;
		String username = driver.findElement(By.xpath("//header/div[2]/div[1]/div[1]/nav[1]/div[1]/a[1]/span[1]"))
				.getText();
		Assert.assertEquals(username, name);
	}

	@When("^I search for product$")
	public void I_search_for_product() {
		driver.findElement(By.xpath("//input[@id='search_query_top']")).sendKeys("Dresses");
		driver.findElement(By.xpath("//header/div[3]/div[1]/div[1]/div[2]/form[1]/button[1]")).click();
	}

	@Then("^i will get the Searched product list$")
	public void i_will_get_the_Searched_product_list() {
		String Result = driver.findElement(By.xpath("//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/h1[1]/span[2]"))
				.getText();
		String Value = "have been found";
		Assert.assertEquals(Result.contains(Value), true);
}
}