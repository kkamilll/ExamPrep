<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8">
        <title>Wykaz samochodów</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="baner"></div>
        <div id="lewa">
        <H1>Wykaz samochodów</H1>
            <ul>
            <?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

               $connect= mysqli_connect('localhost','root','','wedkarstwo') or die('blad w polaczeniu z baza danych');
                $zapytanie1="select id, marka, model from samochody";
                $dane=mysqli_query($connect, $zapytanie1);
                    foreach($dane as $dane1){
                        echo "<li>".$dane1['id']." ";
                        echo $dane1['marka']." ";
                        echo $dane1['model']."</li>";
                    }
                    mysqli_close($connect);
                ?>
        </ul>
            <h1>Zamówienia</h1>
            <ul>
            <?php
               $connect= mysqli_connect('localhost','root','','wedkarstwo') or die('blad w polaczeniu z baza danych');
                $zapytanie2="select Samochody_id, Klient from zamowienia";
                $info1=mysqli_query($connect, $zapytanie2);
                    foreach($info1 as $info2){
                        echo "<li>".$info2['Samochody_id']." ";
                        echo $info2['Klient']."</li>";
                    }
                    mysqli_close($connect);
                ?>
        </ul>
        </div>
        <div id="prawa">
        <?php
               $connect= mysqli_connect('localhost','root','','wedkarstwo') or die('blad w polaczeniu z baza danych');
                $zapytanie2="select id, marka, model, rocznik, kolor, stan from samochody where marka='Fiat'";
                $info3=mysqli_query($connect, $zapytanie2);
                    foreach($info3 as $info4){
                        echo"<p>".$info4['id']."/".$info4['marka']."/".$info4['model']."/".$info4['rocznik']."/".$info4['kolor']."/".$info4['stan']."</p>";
                    }
                    mysqli_close($connect);
                ?>
        </div>
        <div id="stopka">sdsdsdsd</div>
        
        
    </body>
</html>
    
        