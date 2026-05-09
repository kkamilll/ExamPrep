<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8">
        <title>Giełda transportowa</title>
        <link rel="stylesheet" href="style.css">
        <script src="skrypt.js"></script>
        </head>
    <body>
    <header><img src="gielda.png" alt="Logo giełdy transportowej">
    <h1>Giełdta transportowa</h1>
    </header>
    <section id="glowny">
    <section id="lewy">
        <h2>Flota firmy Pol-Trans</h2>
    <p>Nasza flota składa się z 5 pojazdów. To pojazdy o wysokiej
klasie i niesamowitych osiągach. Sprawdź ich szczegóły.</p>
        <div id="blok">
        <label>Wybierz pojazd z listy: </label>
            <select id="marka">
            <option value="Renault">Renault</option>
                <option value="Man">Man</option>
                <option value="Scania">Scania</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
            </select>
            <button onclick="szczegoly()">Wybierz</button>
            <p id="szczegoly-pojazdu"></p>
        </div>
    </section>
    <section id="prawy">
        <h1>Zlecenia transportowe</h1>
        <table>
        <tr><th>Miasto załadunku</th><th>Miasto rozładunku</th>
            <th>Ładunek</th><th>Firma</th></tr>
            <?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

            $conn=mysqli_connect('localhost','root','','transportowa');
            $zapytanie="SELECT miasto_zal,miasto_rozl,ladunek,firma from zlecenia";
            $zapytanie2="SET NAMES 'utf-8";
            $dane=mysqli_query($conn,$zapytanie);
            mysqli_query($conn,$zapytanie2);
            foreach($dane as $dane1){
                echo"<tr><td>".$dane1['miasto_zal']."</td><td>".$dane1['miasto_rozl']."</td><td>".$dane1['ladunek']."</td><td>".$dane1['firma']."</td></tr>";
            }
            
            mysqli_close($conn);
            
            
            ?>
        </table>
        <div id="kalkulator">
        <h3>Kalkulator zlecenia Transportowego</h3>
            <p>Tutaj obliczysz, ile rynkowo kosztuje zlecenie transportowe.</p>
            <label>Podaj ilość ton: </label>
            <input type="number" id="tony"><br>
            <label>Podaj ilość kilometrów:</label>
            <input type="number" id="km"><br>
            <label>Rodzaj towaru:</label>
            <select id="rodzaj">
            <option value="Chlodniczy">Chłodniczy</option>
                <option value="Zwykły">Zwykły</option>
                <option value="Gabaryt">Gabaryt</option>
            </select><br>
           <button onclick="licz()">Oblicz koszt</button>
            <h1 id="koszt"></h1>
        </div>
        </section>
    </section>
    <footer>Wykonał:Mateusz Graś</footer>
    </body>
</html>