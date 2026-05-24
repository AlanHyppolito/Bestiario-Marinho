-- ------------------------------------------------------------------------------

create database Bestiario_Marinho;

-- ------------------------------------------------------------------------------

use Bestiario_Marinho;

-- ------------------------------------------------------------------------------

create table users (
id int primary key auto_increment,
nome varchar(225) not null,
email varchar(225) not null unique,
senha varchar(40) not null,
data_cadastro datetime default current_timestamp
);

-- ------------------------------------------------------------------------------

create table bestas(
id_besta int primary key auto_increment,
nome varchar(225),
classe varchar(255)
);   

-- ------------------------------------------------------------------------------

create table historico(
id_pesquisa int primary key auto_increment,
fk_besta int,
fk_usuario int,
data_hora date default (current_date),
hora time default (current_time),
foreign key (fk_besta) references bestas(id_besta),
foreign key (fk_usuario) references users(id)
);

-- ------------------------------------------------------------------------------

-- inserts

-- ------------------------------------------------------------------------------

insert into users (Nome, email, senha) values
('Alan Crivellaro Hyppolito', 'alan.hyppolito@gmail.com', 'alan123'),
('Rafaela Mayumi Wada Fukuda', 'rafaela.mayumi@gmail.com', 'rafaela123'),
('Luiz Fernando Silva Correia', 'luiz.fernando@gmail.com', 'luiz123'),
('Ricardo Kazuo Inoue', 'ricardo.kazuo@gmail.com', 'ricardo123'),
('Murilo Mendes Leon', 'murilo.leon@gmail.com', 'murilo123'),
('Letícia Miranda Bastos', 'leticia.miranda@gmail.com', 'leticia123');

-- ------------------------------------------------------------------------------

insert into bestas (nome) values
('Kraken'),
('Jörmungandr'),
('Sereias'),
('Cila'),
('Ryūjin'),
('Leviatã'),
('Aspidochelone'),
('Cthulhu'),
('Godzilla'), -- 
('Megalodon'),  --                      
('Kappa'),-- 
('Hipocampo');

-- ------------------------------------------------------------------------------

insert into historico (fk_besta, fk_usuario) values
(1, 1),  -- Alan pesquisou Kraken
(2, 1),  -- Alan pesquisou Jörmungandr
(3, 2),  -- Rafaela pesquisou Sereias
(5, 2),  -- Rafaela pesquisou Ryūjin
(4, 3),  -- Luiz pesquisou Cila
(10, 3), -- Luiz pesquisou Megalodon
(6, 4),  -- Ricardo pesquisou Leviatã
(8, 4),  -- Ricardo pesquisou Cthulhu
(9, 5),  -- Murilo pesquisou Godzilla
(11, 5), -- Murilo pesquisou Kappa
(7, 6),  -- Letícia pesquisou Aspidochelone
(4, 1),  -- Alan pesquisou Cila
(5, 6),  -- Letícia pesquisou Ryūjin
(6, 3),  -- Luiz pesquisou Leviatã
(7, 2),  -- Rafaela pesquisou Aspidochelone
(8, 5),  -- Murilo pesquisou Cthulhu
(9, 4),  -- Ricardo pesquisou Godzilla
(10, 1), -- Alan pesquisou Megalodon
(11, 6), -- Letícia pesquisou Kappa
(12, 2), -- Rafaela pesquisou Hipocampo
(1, 5),  -- Murilo pesquisou Kraken
(2, 3),  -- Luiz pesquisou Jörmungandr
(3, 1),  -- Alan pesquisou Sereias
(4, 6),  -- Letícia pesquisou Cila
(5, 4),  -- Ricardo pesquisou Ryūjin
(6, 1),  -- Alan pesquisou Leviatã
(7, 5),  -- Murilo pesquisou Aspidochelone
(8, 2),  -- Rafaela pesquisou Cthulhu
(9, 3),  -- Luiz pesquisou Godzilla
(10, 6), -- Letícia pesquisou Megalodon
(11, 4), -- Ricardo pesquisou Kappa
(12, 5), -- Murilo pesquisou Hipocampo
(7, 4),  -- Ricardo pesquisou Aspidochelone
(8, 3),  -- Luiz pesquisou Cthulhu
(9, 2),  -- Rafaela pesquisou Godzilla
(10, 5), -- Murilo pesquisou Megalodon
(11, 1), -- Alan pesquisou Kappa
(12, 4); -- Ricardo pesquisou Hipocampo

-- ------------------------------------------------------------------------------

-- selects

-- ------------------------------------------------------------------------------

SELECT 
    h.data_hora AS data,
    h.hora AS hora,
    b.nome AS besta,
    u.nome AS usuario
FROM historico h
JOIN bestas b 
    ON h.fk_besta = b.id_besta
JOIN users u 
    ON h.fk_usuario = u.id
ORDER BY h.data_hora, h.hora;

-- ------------------------------------------------------------------------------

select h.dia data, h.hora hora, b.nome nome
from historico h
join bestas b on h.fk_besta = b.id_besta
join users u on h.fk_usuario = u.id
where u.id = 1 and h.dia >= curdate() - interval 15 day
order by h.dia desc, h.hora desc;

-- ------------------------------------------------------------------------------