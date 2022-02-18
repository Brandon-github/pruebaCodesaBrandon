-- eliminacion de base de datos(si existe)
DROP DATABASE IF EXISTS pruebaCodesa;

-- eliminacion de base de datos(si no existe)
CREATE DATABASE IF NOT EXISTS pruebaCodesa;

-- selecion de base de datos a usar
USE pruebaCodesa;

-- -------------------
-- Creacion de tablas
-- -------------------

-- creacion de tabla de roles
CREATE TABLE rol(
	id_rol INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    PRIMARY KEY(id_rol)
);

-- creacion de tabla de usuarios
CREATE TABLE usuario(
	id_usuario INT NOT NULL AUTO_INCREMENT,
    id_rol INT NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    activo CHAR NOT NULL,
    PRIMARY KEY(id_usuario),
    FOREIGN KEY(id_rol) REFERENCES rol(id_rol)
);

-- ---------------------
-- Insertacion de datos
-- ---------------------

INSERT INTO rol(nombre) 
	VALUES(
		'Administrador'
	),(
		'Auditor'
	),(
		'Auxiliar'
	);


    





