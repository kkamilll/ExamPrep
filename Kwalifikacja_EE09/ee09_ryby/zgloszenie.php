<?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

$connect = mysqli_connect('localhost', 'root', "");
if (!$connect) exit("Błąd połączenia");
mysqli_select_db($connect, 'wedkarstwo');


$lowisko = $_POST['lowisko'];
$data = $_POST['data'];
$sedzia = $_POST['sedzia'];


$pre_query = "INSERT INTO zawody_wedkarskie (id, Karty_wedkarskie_id, Lowisko_id, data_zawodow, sedzia) 
VALUE ('null', '0', '$lowisko', '$data', '$sedzia')";

mysqli_query($connect, $pre_query);

mysqli_close($connect);

header("Location: http://localhost/ee09 ryby/site/zawody.html");
