<?php
include '../../lib/conn.php';
include '../../lib/cors.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Falha na requisição!. Somente o método GET é permitido',
    ]);
    exit;
}

$sql = "SELECT * FROM `usuario` ORDER BY `pontos` DESC";
$stmt = $conn->prepare($sql);
$stmt->execute();
$usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC); 

echo json_encode($usuarios);
