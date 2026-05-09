<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8">
        <title>Portal ogłoszeniowy</title>
        <link rel="stylesheet" href="styl.css">
    </head>
    <body>
         <div id="baner">
        <h1>Portal ogłoszeniowy</h1>
        </div>
        <div id="lewy">
        <h2>Kategorie ogłoszeń</h2>
            <ol>
            <li>Książki</li>
                <li>Muzyka</li>
                <li>Filmy</li>
            </ol>
            <img src="ksiazki.jpg" alt="Kupie/Sprzedam ksiazki">
            <table>
            <tr><td>Liczba ogłoszeń</td><td>Cena ogłoszenia</td><td>Bonus</td></tr>
                <tr><td>1-10</td><td>1zł</td><td rowspan="3">Subskrypcja newslettera to upust 0,20zł na ogłoszenie</td></tr>
                <tr><td>11-50</td><td>0,80zł</td>
                <tr><td>51 i więcej</td><td>0,60zł</td>
            </table>
        </div>
        <div id="prawy">
        <h2>Ogłoszenie kategorii książki</h2>
          <?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

            $conn=mysqli_connect('localhost','root','','ogloszenia') or die('Nie udało się połączyć');
            $zapytanie1="select id,tytul,tresc from ogloszenie where kategoria=1";
                $dane=mysqli_query($conn, $zapytanie1);
            foreach($dane as $dane1){
                echo "<h3>".$dane1['id']." ";
                echo $dane1['tytul']."</h3>";
                echo "<p>".$dane1['tresc']."</p>";
                $zapytanie2="select telefon from uzytkownik join ogloszenie on uzytkownik.id=ogloszenie.uzytkownik_id where ogloszenie.id=".$dane1['id'];
                    $telefon = mysqli_query($conn,$zapytanie2);
                echo "<p>Telefon kontaktowy: ".mysqli_fetch_row($telefon)[0]."</p>"."<br>";
            }
            ?>
        </div>
        <div id="stopka">Portal opracował:xxxxxxxx</div>
    </body>
</html>