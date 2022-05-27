<?php

$name = $_POST['name'];

$conn = new mysqli('localhost', 'root', '', 'test');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);

}else{
    $stmt = $conn->prepare("insert into registration(name) values(?)");
    $stmt->bind_param("s", $name);
    echo "reg succ";
    $stmt->close();
    $conn->close();
}
?>