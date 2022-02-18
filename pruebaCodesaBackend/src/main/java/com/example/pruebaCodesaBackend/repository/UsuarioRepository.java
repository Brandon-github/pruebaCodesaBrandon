package com.example.pruebaCodesaBackend.repository;

import org.springframework.data.repository.Repository;
import com.example.pruebaCodesaBackend.entity.Usuario;
import java.util.List;

public interface UsuarioRepository extends  Repository<Usuario, Integer>{
    List<Usuario>findAll();    
}
