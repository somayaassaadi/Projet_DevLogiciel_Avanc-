package com.produitsconsemetics.ProduitsCosmetics.service;


import java.security.NoSuchAlgorithmException;
import java.util.Map;

import com.produitsconsemetics.ProduitsCosmetics.model.User;

public interface UserService {
    User register(User user);

    Map<String, Object> login(String email, String password) throws NoSuchAlgorithmException;
}
