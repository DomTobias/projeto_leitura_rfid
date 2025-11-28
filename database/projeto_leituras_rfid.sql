CREATE DATABASE projeto_leituras_rfid;
USE projeto_leituras_rfid;

CREATE TABLE areas (
    id_area INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE antenas (
    id_antena INT AUTO_INCREMENT PRIMARY KEY,
    id_area INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    status ENUM('on','off') DEFAULT 'off',
    total_leituras INT DEFAULT 0,
    ultima_leitura INT DEFAULT 0,
    ultimos_60s INT DEFAULT 0,
    FOREIGN KEY (id_area) REFERENCES areas(id_area)
);

CREATE TABLE leituras (
    id_leitura INT AUTO_INCREMENT PRIMARY KEY,
    id_antena INT,
    tag VARCHAR(100),
    tempo_segundos INT,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_antena) REFERENCES antenas(id_antena)
);
