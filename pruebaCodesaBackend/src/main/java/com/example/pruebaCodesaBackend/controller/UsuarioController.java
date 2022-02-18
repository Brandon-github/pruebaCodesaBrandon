package com.example.pruebaCodesaBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pruebaCodesaBackend.service.UsuarioService;
import com.example.pruebaCodesaBackend.entity.Usuario;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/usuarios"})
public class UsuarioController {
    
    @Autowired
    UsuarioService service;

    @GetMapping
    public List<Usuario>listar() {
        return service.listar();
    }

}
