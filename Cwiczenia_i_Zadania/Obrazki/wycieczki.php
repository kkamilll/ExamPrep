<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Wycieczki i urlopy</title>
        <link rel="Stylesheet" href="styl3.css">
    </head>
    <body>
        <header>
            <h1>BIURO PODRÓŻY</h1>
        </header>
        <section>
            <h2>KONTAKT</h2>
            <a href="mailto:biuro@wycieczki.pl">napisz do nas</a>
            <p>telefon: 555666777</p>
        </section>
        <section>
            <h2>GALERIA</h2>
            <?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

                $connection = new mysqli('localhost', 'root', '', 'egzamin3');
                $query = "SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis;";
                $result = $connection->query($query);
                $i = 0;
                while($row = $result->fetch_assoc())
                {
                    echo "<img src=".$row['nazwaPliku']." alt=".$row['podpis'].">";
                    if($i == 2 || $i == 5)
                        echo "<br>";
                    $i++;
                }
                $connection->close();
            ?>
        </section>
        <section>
            <h2>PROMOCJE</h2>
            <table>
                <tr>
                    <td>Jesień</td>
                    <td>Grupa 4+</td>
                    <td>Grupa 10+</td>
                </tr>
                <tr>
                    <td>5%</td>
                    <td>10%</td>
                    <td>15%</td>
                </tr>
            </table>
        </section>
        <section style="clear: both;"></section>
        <section>
            <h2>LISTA WYCIECZEK</h2>
            <?php
                $connection = new mysqli('localhost', 'root', '', 'egzamin3');
                $query = "SELECT id, dataWyjazdu, cel, cena FROM wycieczki WHERE dostepna=1;";
                $result = $connection->query($query);
                while($row = $result->fetch_assoc())
                {
                    echo $row['id'].", ".$row['dataWyjazdu'].", ".$row['cel'].", cena: ".$row['cena']."<br>";
                }
            ?>
        </section>
        <footer>
            <p>Stronę wykonał: 0000000000</p>
        </footer>
    </body>
</html>