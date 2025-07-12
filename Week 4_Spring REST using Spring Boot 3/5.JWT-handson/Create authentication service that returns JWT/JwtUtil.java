package com.cognizant.springjwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import javax.crypto.SecretKey;   
import io.jsonwebtoken.security.Keys;
import java.util.Date;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {
	  private static final SecretKey KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
	    private static final long EXPIRY_MS = 10 * 60 * 1000;

	    public String generateToken(String username) {
	        return Jwts.builder()
	                   .setSubject(username)
	                   .setIssuedAt(new Date())
	                   .setExpiration(new Date(System.currentTimeMillis() + EXPIRY_MS))
	                   .signWith(KEY)    
	                   .compact();
	    }
	}
