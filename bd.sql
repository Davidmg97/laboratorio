create database laboratorios_ucp;

use laboratorios_ucp;

create table usuarios(
cedula varchar(10) primary key, 
nombre varchar(30), 
email varchar(30), 
pass varchar(15)
);

create table laboratorios(
codigo varchar (15) primary key, 
nombre_laboratorio varchar (100), 
precio_x_hora int
);

create table proyectos (
id int primary key auto_increment, 
titulo varchar(30), 
autor_es varchar (60), 
fecha date, 
descripcion varchar (500), 
codigo varchar (15), 
foreign key (codigo) references laboratorios(codigo),
cedula varchar(10), 
foreign key (cedula) references usuarios(cedula)
);
