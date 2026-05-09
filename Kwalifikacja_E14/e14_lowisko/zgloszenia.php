<?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

$lowisko=$_POST['lowisko'];
    $data=$_POST['data'];
$sedzia=$_POST['sedzia'];
$conn=mysqli_connect('localhost','root','','wedkarstwo')
    or die('blad w polaczeniu');
$zapytanie="INSERT INTO zawody_wedkarskie (id, karty_wedkarskie_id,lowisko_id,data_zawodow,sedzia) VALUES (NULL, '0', '$lowisko', '$data', '$sedzia')";
$wynik=mysqli_query($conn,$zapytanie);
mysqli_close($conn);





?>