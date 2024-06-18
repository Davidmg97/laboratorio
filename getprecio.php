<?php
include 'conexion.php'; 

$codigo = isset($_GET['codigo']) ? $_GET['codigo'] : '';

if ($codigo) {
    $sql = "SELECT precio_x_hora FROM laboratorios WHERE codigo=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $codigo);
    $stmt->execute();
    $result = $stmt->get_result();

    $precio = array();

    if ($result->num_rows > 0) {
        $precio = $result->fetch_assoc();
    }

    $stmt->close();
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($precio);
?>
