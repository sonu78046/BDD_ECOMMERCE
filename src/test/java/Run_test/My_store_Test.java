package Run_test;

import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features={"F:\\java\\BDD\\ECOMMERCE_AUTOMATION\\src\\test\\java\\Features"}
,glue={"Steps","Utilities"}
,plugin = {"pretty", "html:target/cucumber"},
tags ={"@tag1"},
monochrome = true
)
@Test
public class My_store_Test extends AbstractTestNGCucumberTests{

}
