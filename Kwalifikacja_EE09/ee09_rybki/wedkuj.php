<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Klub wędkowania</title>
        <link rel="stylesheet" href="styl2.css" />
    </head>
    <body>
       <header><h2>Wędkuj z nami!</h2></header>
        <section id="lewy"><img src="ryba2.jpg" alt="Sczupak"></section>
        <section id="prawy">
        <h3>Ryby spokojnego żeru(białe)</h3>
            <?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

            $conn=mysqli_connect('localhost','root','','wedkowanie') or die('błąd w połaczeniu');
            $zapytanie="select id,nazwa,wystepowanie from ryby where styl_zycia=2";
            $dane=mysqli_query($conn,$zapytanie);
            
            foreach($dane as $dane1){
                echo"<p>".$dane1['id'].". ".$dane1['nazwa'].", występuje w: ".$dane1['wystepowanie']."</p>";
                
            }
            mysqli_close($conn);
            ?>
            <ol>
            <li><a href="https://wedkuje.pl/">Odwiedź także</a></li>
            <li><a href="http://www.pzw.org.pl">Polski Związek Wędkarski</a></li>
            </ol>
        </section>
        <footer><p>Stronę wykonał:0000000</p></footer>

    </body>
</html>