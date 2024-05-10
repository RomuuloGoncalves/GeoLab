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

$sql = "SELECT * FROM `questoes`";
$stmt = $conn->prepare($sql);
$stmt->execute();
$questoes = $stmt->fetchAll(PDO::FETCH_ASSOC); 

foreach ($questoes as &$questao) {
    $sql_opcoes = "SELECT * FROM `opcoes_resposta` WHERE `id_questao` = :id";
    $stmt_opcoes = $conn->prepare($sql_opcoes);
    $stmt_opcoes->bindValue(':id', $questao['id_questao'], PDO::PARAM_INT);
    $stmt_opcoes->execute();
    $opcoes = $stmt_opcoes->fetchAll(PDO::FETCH_ASSOC); 

    $questao['opcoes'] = $opcoes;
}

echo json_encode($questoes);
?>
