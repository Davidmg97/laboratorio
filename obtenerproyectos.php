<?php
include 'conexion.php';

$codigo = isset($_GET['codigo']) ? $_GET['codigo'] : '';

if ($codigo) {
    $sql = "SELECT autor_es, fecha, titulo FROM proyectos WHERE codigo=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $codigo);
    $stmt->execute();
    $result = $stmt->get_result();

    $projects = array();

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $projects[] = $row;
        }
    }

    $stmt->close();
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($projects);
?>
