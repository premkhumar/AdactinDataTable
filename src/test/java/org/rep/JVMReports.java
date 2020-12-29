package org.rep;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReports {
	
	public static void jvmReportGenerate(String json) {

		File f =  new File("C:\\Users\\SAM\\Desktop\\Java\\AdactinDataTable\\Reports");
		Configuration config = new Configuration(f, "Adctin");
		config.addClassifications("Browser", "Google Chrome");
		config.addClassifications("Sprint", "31");
		config.addClassifications("OS", "Windows 10");
		
		List<String> l = new ArrayList<String>();
		l.add(json);
		
		ReportBuilder r = new ReportBuilder(l, config);
		r.generateReports();
	}

}
