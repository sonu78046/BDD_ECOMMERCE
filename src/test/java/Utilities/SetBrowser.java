package Utilities;

import java.io.File;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class SetBrowser {
	private static WebDriver driver;
	public static HashMap<String, String> personal_details=new HashMap<String, String>();
	@Before
	public void setUp()
	{
		System.setProperty("webdriver.chrome.driver","E:\\java\\Chrome\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		//read xml file and set the value
		try   
		{  
		//creating a constructor of file class and parsing an XML file  
		File file = new File(".//Values.xml");  
		//an instance of factory that gives a document builder  
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();  
		//an instance of builder to parse the specified xml file  
		DocumentBuilder db = dbf.newDocumentBuilder();  
		Document doc = db.parse(file);  
		doc.getDocumentElement().normalize(); 
		
		System.out.println("Root element: " + doc.getDocumentElement().getNodeName());  
		NodeList nodeList = doc.getElementsByTagName("Personal_deatils");  
		// nodeList is not iterable, so we are using for loop  
		for (int itr = 0; itr < nodeList.getLength(); itr++)   
		{  
		Node node = nodeList.item(itr);  
		System.out.println("\nNode Name :" + node.getNodeName());  
		if (node.getNodeType() == Node.ELEMENT_NODE)   
		{  
		Element eElement = (Element) node;  
		String First_name = eElement.getElementsByTagName("First_name").item(0).getTextContent(); 
		personal_details.put("First_name",First_name);
		
		String Last_name=eElement.getElementsByTagName("Last_name").item(0).getTextContent();
		personal_details.put("Last_name",Last_name);
		
		String Email=eElement.getElementsByTagName("Email").item(0).getTextContent();
		personal_details.put("Email",Email);
		
		String Password=eElement.getElementsByTagName("Password").item(0).getTextContent();
		personal_details.put("Password",Password);
		}  
		}  
		
		NodeList nodeList1 = doc.getElementsByTagName("DOB");  
		// nodeList is not iterable, so we are using for loop  
		for (int itr = 0; itr < nodeList1.getLength(); itr++)   
		{  
		Node node1 = nodeList1.item(itr);  
		System.out.println("\nNode Name :" + node1.getNodeName());  
		if (node1.getNodeType() == Node.ELEMENT_NODE)   
		{  
		Element eElement1 = (Element) node1; 
		String Date=eElement1.getElementsByTagName("Date").item(0).getTextContent();
		personal_details.put("Date",Date);
		
		String Month_No=eElement1.getElementsByTagName("Month_No").item(0).getTextContent();
		personal_details.put("Month_No",Month_No);
		
		String Year=eElement1.getElementsByTagName("Year").item(0).getTextContent();
		personal_details.put("Year",Year);  
		}  
		} 
		
		NodeList Address = doc.getElementsByTagName("Address");  
		// nodeList is not iterable, so we are using for loop  
		for (int itr = 0; itr < Address.getLength(); itr++)   
		{  
		Node add = Address.item(itr);  
		System.out.println("\nNode Name :" + add.getNodeName());  
		if (add.getNodeType() == Node.ELEMENT_NODE)   
		{  
		Element eElement2 = (Element) add;  
		
		String Company=eElement2.getElementsByTagName("Company").item(0).getTextContent();
		personal_details.put("Company",Company);
		
		String Address1=eElement2.getElementsByTagName("Address1").item(0).getTextContent();
		personal_details.put("Address1",Address1);
		
		String City=eElement2.getElementsByTagName("City").item(0).getTextContent();
		personal_details.put("City",City);
		  
		String state=eElement2.getElementsByTagName("state").item(0).getTextContent();
		personal_details.put("state",state);
		
		String Postcode=eElement2.getElementsByTagName("Postcode").item(0).getTextContent();
		personal_details.put("Postcode",Postcode);
		
		String Country=eElement2.getElementsByTagName("Country").item(0).getTextContent();
		personal_details.put("Country",Country);
		
		String Mobile=eElement2.getElementsByTagName("Mobile").item(0).getTextContent();
		personal_details.put("Mobile",Mobile);
		
		String Addr_tag=eElement2.getElementsByTagName("Addr_tag").item(0).getTextContent();
		personal_details.put("Addr_tag",Addr_tag);
		}  
		} 
		System.out.println(personal_details);
		}   
		catch (Exception e)   
		{  
		e.printStackTrace();  
		}
	}
	
	
	
	  @After public void tearDown() { 
		  driver.quit(); 
		  }
	 
	
	public static WebDriver getDriver()
	{
		return driver;
	}
	public HashMap<String, String> getvalueMap() {
        return personal_details;
    }
}