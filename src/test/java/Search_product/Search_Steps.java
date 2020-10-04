package Search_product;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import Utilities.SetBrowser;
import cucumber.api.java.en.And;

public class Search_Steps{
	private WebDriver driver;
	
	public Search_Steps() {
		this.driver=SetBrowser.getDriver();
	}
	
  @Given("^I open browser and click on signin$")
  public void I_open_browser() throws Throwable {
	  driver.get("http://automationpractice.com/index.php");
	  driver.findElement(By.xpath("//a[contains(text(),'Sign in')]")).click();
  }
  
  @And("^scroll down the webpage$")
  public void Scroll_webpage() {
	  driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
	  JavascriptExecutor js = (JavascriptExecutor)driver;
	  js.executeScript("window.scrollBy(0,5000)");
  }
  @When("Login in application by registered username and password")
  public void Login() {
	 driver.findElement(By.xpath("//input[@id='email']")).sendKeys("abc784@gmail.com");
	 driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys("vishal@123");
  }

  @Then("^Login Successfull$")
  public void validate_Login() throws Throwable {
	  driver.findElement(By.xpath("//button[@id='SubmitLogin']")).click();
	  String username=driver.findElement(By.xpath("//header/div[2]/div[1]/div[1]/nav[1]/div[1]/a[1]/span[1]")).getText();
	  Assert.assertEquals(username,"Vishal dadlani");
  }
  @When("^I search for product$")
  public void Search_product() {
	  driver.findElement(By.xpath("//input[@id='search_query_top']")).sendKeys("Dresses");
	  driver.findElement(By.xpath("//header/div[3]/div[1]/div[1]/div[2]/form[1]/button[1]")).click();
  }
  @Then("^i will get the Searched product list$")
  public void then() throws Throwable {
	  String Result=driver.findElement(By.xpath("//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/h1[1]/span[2]")).getText();
	  String Value="have been found";
	  Assert.assertEquals(Result.contains(Value),true);
  }
}
