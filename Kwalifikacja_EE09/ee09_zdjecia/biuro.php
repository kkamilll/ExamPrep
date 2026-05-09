<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styl4.css">
    <title>Wycieczki krajoznawcze</title>
    </head>
    <body>
 <header><h1>WITAMY W BIURZE PODRÓŻY</h1></header>
        <section id="dane">
        <H3>ARCHIWUM WYCIECZEK</H3>
            <?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

            $conn=mysqli_connect('localhost','root','','egzamin4');
            $zapytanie="select id,cel,cena from wycieczki where dostepna=0";
                $dane=mysqli_query($conn,$zapytanie);
            foreach($dane as $dane1){
                echo"<p>".$dane1['id'].". ".$dane1['cel'].", cena: ".$dane1['cena']."</p>";
                
            }
            
            mysqli_close($conn);
            ?>
        </section>
        <section id="lewy">
<h3>NAJTANIEJ</h3>
            <TABLE>
            <tr><td>Włochy</td><td>od 1200zł</td></tr>
                <tr><td>Francja</td><td>od 1200zł</td></tr>
                <tr><td>Hiszpania</td><td>od 1400zł</td></tr>
            </TABLE>
        </section>
<section id="srodek">
        <h3>TU BYLIŚMY</h3>
     <?php
            $conn=mysqli_connect('localhost','root','','egzamin4');
            $zapytanie1="select nazwaPliku,podpis from zdjecia order by podpis desc";
                $dane=mysqli_query($conn,$zapytanie1);
            foreach($dane as $dane1){
                echo'<img src="'.$dane1['nazwaPliku'].'" alt="'.$dane1['podpis'].'"</img>';
                
            }
            
            mysqli_close($conn);
            ?>
        </section>
        <section id="prawy">
        <H3>SKONTAKTUJ SIĘ</H3>
            <a href="mailto:wycieczki@wycieczki.pl">napisz do nas</a>
            <p>telefon:55566677</p>
        </section>
        <footer>
        <p>Stronę wykonał:Mateusz Graś</p>
        </footer>
    
    </body>
</html>
