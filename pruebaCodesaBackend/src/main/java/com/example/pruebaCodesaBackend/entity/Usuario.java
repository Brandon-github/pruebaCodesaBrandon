package com.example.pruebaCodesaBackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @Column(name = "id_usuario")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "id_rol")
    private int rol;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "activo")
    private char activo;

    // Methods Getters and Setters

    // Id
    public int getId() {
        return this.id;
    } 

    public void setId(int id) {
        this.id = id;
    }

    // Rol
    public int getRol() {
        return this.rol;
    }

    public void setRol(int rol) {
        this.rol = rol;
    }

    // Nombre
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // Activo
    public char getActivo() {
        return this.activo;
    }

    public void setActivo(char activo) {
        this.activo = activo;
    }
}
