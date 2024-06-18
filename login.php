<?php
session_start();
include 'conexion.php';

$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'];
$password = $data['password'];

$query = $conn->prepare('SELECT * FROM usuarios WHERE email = ? AND pass = ?');
$query->bind_param('ss', $email, $password);
$query->execute();
$result = $query->get_result();

if ($result->num_rows > 0) {
    $_SESSION['loggedin'] = true;
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>


