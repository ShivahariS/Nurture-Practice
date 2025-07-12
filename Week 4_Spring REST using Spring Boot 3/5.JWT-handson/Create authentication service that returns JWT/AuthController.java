package com.cognizant.springjwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest; 
import java.util.Base64;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @RequestMapping("/authenticate")
    public ResponseEntity<?> generateToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] decoded = Base64.getDecoder().decode(base64Credentials);
            String[] credentials = new String(decoded).split(":", 2);

            String username = credentials[0];
            String password = credentials[1];

            if ("Shivahari".equals(username) && "pwd1234".equals(password)) {
                String token = jwtUtil.generateToken(username);
                return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
            } else {
                return ResponseEntity.status(401).body("Invalid Credentials");
            }
        }
        return ResponseEntity.badRequest().body("Missing Authorization header");
    }
}
