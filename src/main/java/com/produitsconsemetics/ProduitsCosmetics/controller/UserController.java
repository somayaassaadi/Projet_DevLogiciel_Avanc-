package com.produitsconsemetics.ProduitsCosmetics.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.produitsconsemetics.ProduitsCosmetics.model.User;
import com.produitsconsemetics.ProduitsCosmetics.service.UserService;

import java.security.NoSuchAlgorithmException;
import java.util.Map;

@RestController
@RequestMapping("auth")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("register-user")
    public ResponseEntity<?> registerStudent(@RequestBody User entity){
        User student = userService.register(entity);
        if (student == null)
            return new ResponseEntity<>(
                    "Internal Server error",
                    HttpStatus.INTERNAL_SERVER_ERROR
            );
        return new ResponseEntity<>(
                student,
                HttpStatus.CREATED
        );
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) throws NoSuchAlgorithmException {
        String email = request.get("email");
        String password = request.get("password");
        Map<String, Object> result = userService.login(email, password);
        if (result == null)
            return new ResponseEntity<>(
                    "email or password incorrect",
                    HttpStatus.FORBIDDEN
            );
        return new ResponseEntity<>(
                result,
                HttpStatus.OK
        );
    }
}
