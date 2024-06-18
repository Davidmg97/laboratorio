<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "laboratorios_ucp";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $titulo = $_POST['titulo'];
        $autores = $_POST['autores'];
        $fecha = $_POST['fecha'];
        $descripcion = $_POST['descripcion'];
        $codigo = $_POST['codigo'];
        $cedula = $_POST['cedula'];

        $stmt = $conn->prepare("INSERT INTO proyectos (titulo, autor_es, fecha, descripcion, codigo, cedula) 
                                VALUES (:titulo, :autores, :fecha, :descripcion, :codigo, :cedula)");

        $stmt->bindParam(':titulo', $titulo);
        $stmt->bindParam(':autores', $autores);
        $stmt->bindParam(':fecha', $fecha);
        $stmt->bindParam(':descripcion', $descripcion);
        $stmt->bindParam(':codigo', $codigo);
        $stmt->bindParam(':cedula', $cedula);

        $stmt->execute();

        $response = array('success' => true);
    } catch(PDOException $e) {
        $response = array('success' => false, 'message' => $e->getMessage());
    }

    header('Content-Type: application/json');
    echo json_encode($response);

} else {
    $response = array('success' => false, 'message' => 'Método no permitido');
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>