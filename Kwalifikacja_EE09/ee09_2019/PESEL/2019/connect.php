<?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
 
$servername="localhost";
$username="root";
$password='';
$db="wedkowanie";

$conn = new mysqli($servername, $username, $password, $db);
if($conn->connect_error==true){
	echo"blad";
}
?>