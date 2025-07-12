package com.cognizant.springjwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringjwtApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringjwtApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringjwtApplication.class, args);
        LOGGER.info("Inside main method");
    }
}
