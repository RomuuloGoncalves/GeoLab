DROP DATABASE IF EXISTS geolab;
CREATE DATABASE geolab;      
USE geolab;

DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    funcao VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL, 
    pontos INT DEFAULT 0, 
    imagem VARCHAR(250) DEFAULT 'https://ionicframework.com/docs/img/demos/avatar.svg'
);

DROP TABLE IF EXISTS questoes;
CREATE TABLE questoes (
    id_questao INT PRIMARY KEY,
    enunciado TEXT
);

DROP TABLE IF EXISTS opcoes_resposta;
CREATE TABLE opcoes_resposta (
    id_opcao INT PRIMARY KEY,
    id_questao INT,
    descricao VARCHAR(100),
    correta BOOLEAN,
    FOREIGN KEY (id_questao) REFERENCES questoes(id_questao)
);

DROP TABLE IF EXISTS respostas;
CREATE TABLE respostas (
    resposta_id INT PRIMARY KEY,
    usuario_id INT,
    id_questao INT,
    opcao_selecionada INT,
    correta BOOLEAN,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_questao) REFERENCES questoes(id_questao),
    FOREIGN KEY (opcao_selecionada) REFERENCES opcoes_resposta(id_opcao)
);

INSERT INTO usuario (nome, email, funcao, senha) VALUES
('Rômulo', 'a@a.a', 'aluno', 'asdfasdf');

INSERT INTO usuario (nome, email, funcao, senha, pontos) VALUES
('João Silva', 'joao@example.com', 'Administrador', 'senha123', 100),
('Maria Oliveira', 'maria@example.com', 'Gerente', 'senha456', 50),
('Pedro Santos', 'pedro@example.com', 'Funcionário', 'senha789', 25),
('Ana Costa', 'ana@example.com', 'Administrador', 'senhaadmin', 150),
('Carlos Pereira', 'carlos@example.com', 'Funcionário', 'senha4321', 75),
('Mariana Lima', 'mariana@example.com', 'Gerente', 'senhagerente', 90),
('Paulo Souza', 'paulo@example.com', 'Funcionário', 'senhafunc', 40),
('Juliana Fernandes', 'juliana@example.com', 'Administrador', 'senhaadm123', 200),
('Rafaela Castro', 'rafaela@example.com', 'Gerente', 'senhager123', 80),
('Fernando Oliveira', 'fernando@example.com', 'Funcionário', 'senhafunc123', 60),
('Luiz Silva', 'luiz@example.com', 'Administrador', 'senhaadm456', 175),
('Camila Santos', 'camila@example.com', 'Gerente', 'senhager789', 120),
('Roberto Costa', 'roberto@example.com', 'Funcionário', 'senhafunc456', 70),
('Amanda Lima', 'amanda@example.com', 'Administrador', 'senhaadm789', 220),
('Diego Pereira', 'diego@example.com', 'Gerente', 'senhager987', 95),
('Carolina Fernandes', 'carolina@example.com', 'Funcionário', 'senhafunc789', 55),
('Gustavo Oliveira', 'gustavo@example.com', 'Administrador', 'senhaadm654', 190),
('Renata Castro', 'renata@example.com', 'Gerente', 'senhager546', 110),
('Lucas Souza', 'lucas@example.com', 'Funcionário', 'senhafunc321', 85),
('Patricia Lima', 'patricia@example.com', 'Administrador', 'senhaadm987', 240);

-- Inserção das perguntas e opções de resposta
INSERT INTO questoes (id_questao, enunciado) VALUES 
(1, 'Qual é a área de um quadrado com lado de comprimento 5 unidades?'),
(2, 'Qual é o resultado da operação 3 * (4 + 2)?'),
(3, 'Qual é o perímetro de um retângulo com lados de comprimento 6 unidades e 8 unidades?'),
(4, 'Qual é a área de um triângulo com base de comprimento 6 unidades e altura de 4 unidades?'),
(5, 'Qual é o resultado da operação (9 - 3) / 2?'),
(6, 'Qual é o volume de uma esfera com raio de 3 unidades? (use π ≈ 3.14)');

INSERT INTO opcoes_resposta (id_opcao, id_questao, descricao, correta) VALUES 
(1, 1, '20 unidades quadradas', FALSE),
(2, 1, '25 unidades quadradas', TRUE),
(3, 1, '30 unidades quadradas', FALSE),
(4, 1, '10 unidades quadradas', FALSE),

(5, 2, '9', FALSE),
(6, 2, '18', FALSE),
(7, 2, '24', TRUE),
(8, 2, '12', FALSE),

(9, 3, '12 unidades', FALSE),
(10, 3, '22 unidades', FALSE),
(11, 3, '36 unidades', FALSE),
(12, 3, '28 unidades', TRUE),

(13, 4, '12 unidades quadradas', FALSE),
(14, 4, '24 unidades quadradas', FALSE),
(15, 4, '18 unidades quadradas', TRUE),
(16, 4, '20 unidades quadradas', FALSE),

(17, 5, '3', FALSE),
(18, 5, '6', FALSE),
(19, 5, '4', TRUE),
(20, 5, '2', FALSE),

(21, 6, '36π unidades cúbicas', TRUE),
(22, 6, '18π unidades cúbicas', FALSE),
(23, 6, '27π unidades cúbicas', FALSE),
(24, 6, '12π unidades cúbicas', FALSE);


INSERT INTO questoes (id_questao, enunciado) VALUES 
(7, 'Qual é o resultado da operação 7 * 8?'),
(8, 'Qual é a área de um círculo com raio de 5 unidades? (use π ≈ 3.14)'),
(9, 'Qual é o volume de um cilindro com raio de 2 unidades e altura de 10 unidades? (use π ≈ 3.14)'),
(10, 'Qual é a medida da hipotenusa de um triângulo retângulo com catetos medindo 3 unidades e 4 unidades?'),
(11, 'Qual é o resultado da operação 12 / 4?'),
(12, 'Qual é o perímetro de um quadrado com lado de comprimento 7 unidades?'),
(13, 'Qual é a área de um retângulo com lados de comprimento 10 unidades e 3 unidades?'),
(14, 'Qual é o volume de um cubo com aresta de 4 unidades?'),
(15, 'Qual é o resultado da operação 15 + 9?'),
(16, 'Qual é a medida da diagonal de um quadrado com lado de comprimento 10 unidades?');

INSERT INTO opcoes_resposta (id_opcao, id_questao, descricao, correta) VALUES 
(25, 7, '48', TRUE),
(26, 7, '56', FALSE),
(27, 7, '64', FALSE),
(28, 7, '42', FALSE),

(29, 8, '78.5 unidades quadradas', FALSE),
(30, 8, '78.5π unidades quadradas', TRUE),
(31, 8, '75 unidades quadradas', FALSE),
(32, 8, '75π unidades quadradas', FALSE),

(33, 9, '120π unidades cúbicas', TRUE),
(34, 9, '120 unidades cúbicas', FALSE),
(35, 9, '60 unidades cúbicas', FALSE),
(36, 9, '60π unidades cúbicas', FALSE),

(37, 10, '3 unidades', FALSE),
(38, 10, '4 unidades', FALSE),
(39, 10, '5 unidades', TRUE),
(40, 10, '6 unidades', FALSE),

(41, 11, '2', TRUE),
(42, 11, '3', FALSE),
(43, 11, '4', FALSE),
(44, 11, '5', FALSE),

(45, 12, '28 unidades', TRUE),
(46, 12, '24 unidades', FALSE),
(47, 12, '30 unidades', FALSE),
(48, 12, '32 unidades', FALSE),

(49, 13, '30 unidades quadradas', TRUE),
(50, 13, '33 unidades quadradas', FALSE),
(51, 13, '40 unidades quadradas', FALSE),
(52, 13, '45 unidades quadradas', FALSE),

(53, 14, '16 unidades cúbicas', TRUE),
(54, 14, '64 unidades cúbicas', FALSE),
(55, 14, '32 unidades cúbicas', FALSE),
(56, 14, '24 unidades cúbicas', FALSE),

(57, 15, '24', TRUE),
(58, 15, '25', FALSE),
(59, 15, '26', FALSE),
(60, 15, '27', FALSE),

(61, 16, '10√2 unidades', TRUE),
(62, 16, '5√3 unidades', FALSE),
(63, 16, '20 unidades', FALSE),
(64, 16, '5 unidades', FALSE);
