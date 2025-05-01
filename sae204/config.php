<?php
// Configuration :
define("DB", "mysql:host=localhost;dbname=rabehir");
define("USER", "rabehir");
define("PWD", "pha7teigeinich9Uxuga");

try {
    $pdo = new PDO(DB, USER, PWD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}
