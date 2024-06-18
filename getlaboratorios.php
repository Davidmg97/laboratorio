<?php
include 'conexion.php'; 

$sql = "SELECT codigo, nombre_laboratorio FROM laboratorios";
$result = $conn->query($sql);

$laboratorios = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $laboratorios[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($laboratorios);
?>
