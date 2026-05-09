create database Bestiario_Marinho;

use Bestiario_Marinho;

create table users (
Id_user int primary key auto_increment,
Nome varchar(225) not null,
email varchar(225) not null unique,
senha varchar(40) not null,
data_cadastro datetime
);

create table bestas(
Id_besta int primary key auto_increment,
nome_popular varchar(225)
);   

create table historico(
Id_pesquisa int primary key auto_increment,
fk_besta int,
fk_usuario int,
data_hora datetime default current_timestamp(),
foreign key (fk_besta) references bestas(Id_besta),
foreign key (fk_usuario) references users(Id_user)
);
