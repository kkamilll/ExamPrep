<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="styl_1.css" />
<title>Wędkujemy</title>
</head>
<body>
<div id="baner"> 
 <h1> Portal dla wędkarzy </h1> 
</div>
<div id="lewy">
<h2> Ryby drapieżne naszych wód </h2>
<?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

require_once("connect.php");
$query="select nazwa,wystepowanie from ryby";
$result=$conn->query($query);

if ($result->num_rows>0){
echo "<ul>";
foreach ($result as $row){
echo "<li>".$row['nazwa']." wystepowanie:".$row['wystepowanie']."</li>";
}
echo "</ul>";
}
$conn->close();
?>
</div>
<div id="prawy">
<img src="ryba1.jpg"  alt="sum" style="padding:5px; margin:10px; border:solid #000080 1px ">
<br><a href="kwerendy.txt">Pobierz kwerendy</a>
</div>


<div id="stopka">
Stronę wykonał: 0000000000000
</div>
</body>
</html> 
