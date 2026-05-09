<?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

$nrz=$_POST['nrzes'];
$nrd=$_POST['nrdys'];
$adres=$_POST['adres'];

$conn=mysqli_connect('localhost','root','','ratownictwo') or die('blad w polaczeniu');
$zapytanie="INSERT INTO zgloszenia values(NULL,'$nrz','$nrd','$adres',0,CURRENT_TIMESTAMP)";

mysqli_query($conn,$zapytanie);

mysqli_close($conn);




?>
