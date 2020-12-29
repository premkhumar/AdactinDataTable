package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.rep.JVMReports;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\SAM\\Desktop\\Java\\AdactinDataTable\\src\\test\\resources\\Adactin.feature",
glue={"com.step"},dryRun=false,monochrome=true,plugin= {"json:C:\\Users\\SAM\\Desktop\\Java\\AdactinDataTable\\Reports\\AdactinReport1.json"})


public class TestRunner {
	
	@AfterClass
	public static void afterClass() {
		
		JVMReports.jvmReportGenerate("C:\\Users\\SAM\\Desktop\\Java\\AdactinDataTable\\Reports\\AdactinReport1.json");
	}
	
	
	

}
