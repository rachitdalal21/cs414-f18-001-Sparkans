package com.sparkans.banqi.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ContextPropertyLoader {

	private ClassLoader classLoader = getClass().getClassLoader();

	Properties prop;

	public Properties getPropValues() throws IOException {

		try (InputStream input = classLoader.getResourceAsStream("application.properties")) {

			prop = new Properties();
			prop.load(input);

		}

		catch (IOException ex) {
			ex.printStackTrace();
		}

		return prop;

	}
}
