<?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

$mysql = mysqli_connect('localhost', 'root', "");
if (!$mysql) exit("Błąd połączenia");

mysqli_select_db($mysql, 'wedkowanie');

$query1 = mysqli_query($mysql, 'SELECT nazwa, wystepowanie FROM Ryby');

?>



<!DOCTYPE html>

<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title title>Wędkujemy</title>
    <link rel="stylesheet" href="./css/styl_1.css">
</head>

<body>
    <header>
        <h1>Portal dla wędkarzy</h1>
    </header>
    <main>
        <div class="lewy">
            <h2>Ryby drapieżne naszych wód</h2>
            <ul>
                <?php while ($zapytanie1 = mysqli_fetch_array($query1)) { ?>
                    <li><?php echo $zapytanie1['nazwa'] ?>, wystepowanie: <?php echo $zapytanie1['wystepowanie'] ?></li>
                <?php } ?>
            </ul>
        </div>
        <div class="prawy">
            <img src="ryba1.jpg" alt="Sum">
            <p><a href="kwerendy.txt">Pobierz kwerendy</a></p>
        </div>
    </main>
    <footer>
        <p>Stronę wykonał: 000 000 000</p>
    </footer>
</body>

</html>

<?php mysqli_close($mysql); ?>