CREATE DATABASE escuela01;
USE escuela01;
CREATE TABLE usuario(
    idUser varchar(10) not null primary key,
    nombre varchar(45),
    contra varchar(45)
);

DESCRIBE usuario;

INSERT INTO usuario(idUser,nombre,contra) values('MM','Erly','Erly123');