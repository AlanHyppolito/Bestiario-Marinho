create database Bestiario_Marinho;

use Bestiario_marinho;

create table users (
Id_user int primary key auto_increment,
Nome varchar(225) not null,
email varchar(225) not null,
senha varchar(40) not null,
data_cadastro datetime,


);

create table pesquisa(
Id_pesquisa int primary key auto_increment,
fk_besta int,
fk_usuario int,
data_hora datetime,
foreign key (fk_besta) references bestas(Id_bestas),
foreign key (fk_usuario) references usuarios(Id_user)
);

create table bestas(
Id_besta int primary key auto_increment,
nome_popular varchar(225),
nome_cientifico varchar(225),
dominio varchar(225),
reino varchar(225),
filo varchar(225),
classe varchar(225),
ordem varchar(225),
familia varchar(225),
genero varchar(225),
especie varchar(225)
regioes 
informacoes varchar(225)
);  

