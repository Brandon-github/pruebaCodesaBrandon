package com.example.pruebaCodesaBackend.serviceImplement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pruebaCodesaBackend.entity.Usuario;
import com.example.pruebaCodesaBackend.repository.UsuarioRepository;
import com.example.pruebaCodesaBackend.service.UsuarioService;

import java.util.List;

@Service
public class UsuarioServiceImplement implements UsuarioService{
    @Autowired
    private UsuarioRepository repository;

    @Override
    public List<Usuario>listar() {
        return repository.findAll();
    }

}
