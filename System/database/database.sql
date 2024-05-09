DROP DATABASE IF EXISTS geolab;
CREATE DATABASE geolab;      
USE geolab;

DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL, 
    imagem VARCHAR(250) DEFAULT 'https://ionicframework.com/docs/img/demos/avatar.svg'

    -- FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Inserções na tabela 'usuario'
INSERT INTO usuario (nome, email, senha) VALUES 
('a', 'a', 'asdfasdf');