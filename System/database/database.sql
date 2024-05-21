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
    imagem VARCHAR(250) DEFAULT './assets/img/default/avatar_default.svg'
    -- imagem VARCHAR(250) DEFAULT 'https://ionicframework.com/docs/img/demos/avatar.svg'
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
(6, 'Qual é o volume de uma esfera com raio de 3 unidades? (use π ≈ 3.14)'),
(7, 'Qual é o resultado da operação 7 * 8?'),
(8, 'Qual é a área de um círculo com raio de 5 unidades? (use π ≈ 3.14)'),
(9, 'Qual é o volume de um cilindro com raio de 2 unidades e altura de 10 unidades? (use π ≈ 3.14)'),
(10, 'Qual é a medida da hipotenusa de um triângulo retângulo com catetos medindo 3 unidades e 4 unidades?'),
(11, 'Qual é o resultado da operação 12 / 4?'),
(12, 'Qual é o perímetro de um quadrado com lado de comprimento 7 unidades?'),
(13, 'Qual é a área de um retângulo com lados de comprimento 10 unidades e 3 unidades?'),
(14, 'Qual é o volume de um cubo com aresta de 4 unidades?'),
(15, 'Qual é o resultado da operação 15 + 9?'),
(16, 'Qual é a medida da diagonal de um quadrado com lado de comprimento 10 unidades?'),
(17, 'Qual é o resultado da operação 2^3?'),
(18, 'Qual é a área de um círculo com raio de 3 unidades? (use π ≈ 3.14)'),
(19, 'Qual é o volume de um cilindro com raio de 4 unidades e altura de 5 unidades? (use π ≈ 3.14)'),
(20, 'Qual é a medida da hipotenusa de um triângulo retângulo com catetos medindo 5 unidades e 12 unidades?'),
(21, 'Qual é o resultado da operação 15 / 3?'),
(22, 'Qual é o perímetro de um quadrado com lado de comprimento 8 unidades?'),
(23, 'Qual é a área de um retângulo com lados de comprimento 7 unidades e 6 unidades?'),
(24, 'Qual é o volume de um cubo com aresta de 5 unidades?'),
(25, 'Qual é o resultado da operação 20 + 15?'),
(26, 'Qual é a medida da diagonal de um quadrado com lado de comprimento 12 unidades?'),
(27, 'Qual é o resultado da operação 3^2?'),
(28, 'Qual é a área de um círculo com raio de 4 unidades? (use π ≈ 3.14)'),
(29, 'Qual é o volume de um cilindro com raio de 3 unidades e altura de 7 unidades? (use π ≈ 3.14)'),
(30, 'Qual é a medida da hipotenusa de um triângulo retângulo com catetos medindo 6 unidades e 8 unidades?'),
(31, 'Qual é o resultado da operação 18 / 3?'),
(32, 'Qual é o perímetro de um quadrado com lado de comprimento 9 unidades?'),
(33, 'Qual é a área de um retângulo com lados de comprimento 8 unidades e 5 unidades?'),
(34, 'Qual é o volume de um cubo com aresta de 6 unidades?'),
(35, 'Qual é o resultado da operação 25 + 15?'),
(36, 'Qual é a medida da diagonal de um quadrado com lado de comprimento 14 unidades?'),
(37, 'Qual é o resultado da operação 2^4?'),
(38, 'Qual é a área de um círculo com raio de 6 unidades? (use π ≈ 3.14)'),
(39, 'Qual é o volume de um cilindro com raio de 5 unidades e altura de 8 unidades? (use π ≈ 3.14)'),
(40, 'Qual é a medida da hipotenusa de um triângulo retângulo com catetos medindo 8 unidades e 15 unidades?');

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
(15, 4, '18 unidades quadradas', FALSE),
(16, 4, '12 unidades quadradas', TRUE),

(17, 5, '3', FALSE),
(18, 5, '6', FALSE),
(19, 5, '4', FALSE),
(20, 5, '3', TRUE),

(21, 6, '36π unidades cúbicas', FALSE),
(22, 6, '18π unidades cúbicas', FALSE),
(23, 6, '27π unidades cúbicas', TRUE),
(24, 6, '12π unidades cúbicas', FALSE),

(25, 7, '48', FALSE),
(26, 7, '56', TRUE),
(27, 7, '64', FALSE),
(28, 7, '42', FALSE),

(29, 8, '78.5 unidades quadradas', FALSE),
(30, 8, '78.5π unidades quadradas', TRUE),
(31, 8, '75 unidades quadradas', FALSE),
(32, 8, '75π unidades quadradas', FALSE),

(33, 9, '120π unidades cúbicas', FALSE),
(34, 9, '120 unidades cúbicas', FALSE),
(35, 9, '60 unidades cúbicas', FALSE),
(36, 9, '40π unidades cúbicas', TRUE),

(37, 10, '3 unidades', FALSE),
(38, 10, '4 unidades', FALSE),
(39, 10, '5 unidades', TRUE),
(40, 10, '6 unidades', FALSE),

(41, 11, '2', FALSE),
(42, 11, '3', TRUE),
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

(53, 14, '16 unidades cúbicas', FALSE),
(54, 14, '64 unidades cúbicas', TRUE),
(55, 14, '32 unidades cúbicas', FALSE),
(56, 14, '24 unidades cúbicas', FALSE),

(57, 15, '24', TRUE),
(58, 15, '25', FALSE),
(59, 15, '26', FALSE),
(60, 15, '27', FALSE),

(61, 16, '10√2 unidades', TRUE),
(62, 16, '5√3 unidades', FALSE),
(63, 16, '20 unidades', FALSE),
(64, 16, '5 unidades', FALSE),

(65, 17, '6', FALSE),
(66, 17, '8', TRUE),
(67, 17, '9', FALSE),
(68, 17, '7', FALSE),

(69, 18, '28.26 unidades quadradas', TRUE),
(70, 18, '18.84 unidades quadradas', FALSE),
(71, 18, '36.42 unidades quadradas', FALSE),
(72, 18, '21.98 unidades quadradas', FALSE),

(73, 19, '80π unidades cúbicas', TRUE),
(74, 19, '60π unidades cúbicas', FALSE),
(75, 19, '100π unidades cúbicas', FALSE),
(76, 19, '40π unidades cúbicas', FALSE),

(77, 20, '13 unidades', TRUE),
(78, 20, '10 unidades', FALSE),
(79, 20, '14 unidades', FALSE),
(80, 20, '12 unidades', FALSE),

(81, 21, '5', TRUE),
(82, 21, '4', FALSE),
(83, 21, '6', FALSE),
(84, 21, '3', FALSE),

(85, 22, '32 unidades', TRUE),
(86, 22, '24 unidades', FALSE),
(87, 22, '36 unidades', FALSE),
(88, 22, '28 unidades', FALSE),

(89, 23, '42 unidades quadradas', TRUE),
(90, 23, '48 unidades quadradas', FALSE),
(91, 23, '36 unidades quadradas', FALSE),
(92, 23, '30 unidades quadradas', FALSE),

(93, 24, '125 unidades cúbicas', TRUE),
(94, 24, '100 unidades cúbicas', FALSE),
(95, 24, '150 unidades cúbicas', FALSE),
(96, 24, '175 unidades cúbicas', FALSE),

(97, 25, '35', TRUE),
(98, 25, '30', FALSE),
(99, 25, '40', FALSE),
(100, 25, '45', FALSE),

(101, 26, '12√2 unidades', TRUE),
(102, 26, '6√3 unidades', FALSE),
(103, 26, '24 unidades', FALSE),
(104, 26, '6 unidades', FALSE),

(105, 27, '6', FALSE),
(106, 27, '9', TRUE),
(107, 27, '8', FALSE),
(108, 27, '7', FALSE),

(109, 28, '50.24 unidades quadradas', TRUE),
(110, 28, '37.68 unidades quadradas', FALSE),
(111, 28, '62.80 unidades quadradas', FALSE),
(112, 28, '43.96 unidades quadradas', FALSE),

(113, 29, '63π unidades cúbicas', TRUE),
(114, 29, '42π unidades cúbicas', FALSE),
(115, 29, '84π unidades cúbicas', FALSE),
(116, 29, '21π unidades cúbicas', FALSE),

(117, 30, '10 unidades', TRUE),
(118, 30, '9 unidades', FALSE),
(119, 30, '11 unidades', FALSE),
(120, 30, '8 unidades', FALSE),

(121, 31, '6', TRUE),
(122, 31, '5', FALSE),
(123, 31, '7', FALSE),
(124, 31, '4', FALSE),

(125, 32, '36 unidades', TRUE),
(126, 32, '28 unidades', FALSE),
(127, 32, '40 unidades', FALSE),
(128, 32, '32 unidades', FALSE),

(129, 33, '40 unidades quadradas', TRUE),
(130, 33, '45 unidades quadradas', FALSE),
(131, 33, '35 unidades quadradas', FALSE),
(132, 33, '30 unidades quadradas', FALSE),

(133, 34, '216 unidades cúbicas', TRUE),
(134, 34, '192 unidades cúbicas', FALSE),
(135, 34, '240 unidades cúbicas', FALSE),
(136, 34, '180 unidades cúbicas', FALSE),

(137, 35, '40', TRUE),
(138, 35, '35', FALSE),
(139, 35, '45', FALSE),
(140, 35, '50', FALSE),

(141, 36, '14√2 unidades', TRUE),
(142, 36, '7√3 unidades', FALSE),
(143, 36, '28 unidades', FALSE),
(144, 36, '7 unidades', FALSE),

(145, 37, '8', FALSE),
(146, 37, '16', TRUE),
(147, 37, '12', FALSE),
(148, 37, '10', FALSE),

(149, 38, '113.04 unidades quadradas', TRUE),
(150, 38, '94.20 unidades quadradas', FALSE),
(151, 38, '132.66 unidades quadradas', FALSE),
(152, 38, '75.36 unidades quadradas', FALSE),

(153, 39, '200π unidades cúbicas', TRUE),
(154, 39, '160π unidades cúbicas', FALSE),
(155, 39, '240π unidades cúbicas', FALSE),
(156, 39, '180π unidades cúbicas', FALSE),

(157, 40, '17 unidades', TRUE),
(158, 40, '15 unidades', FALSE),
(159, 40, '18 unidades', FALSE),
(160, 40, '16 unidades', FALSE);
