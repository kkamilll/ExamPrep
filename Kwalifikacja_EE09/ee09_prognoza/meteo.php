<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Prognoza pogody Poznań</title>
        <link rel="stylesheet" href="styl4.css" />
          <section id="lewyb">
        <p>maj,2019 r.</p>
        </section>
          <section id="srodb">
        <h2>Prognoza dla Poznania</h2>
        </section>
          <section id="prawyb">
        <img src="logo.png" alt="prognoza">
        </section>
          <section id="lewy">
        <a href="kwerendy.txt">Kwerendy</a>
        </section>
          <section id="prawy">
        <img src="obraz.jpg" alt="Polska, Poznań">
        </section>
          <section id="glowny">
              <table>
                  <tr><th>Lp.</th><th>DATA</th><th>NOC-TEMPERATURA</th><TH>DZIEŃ-TEMPERATURA</TH><TH>OPADY[mm/h]</TH><th>CIŚNIENIE[hPa]</th></tr>
        <?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

              $conn=mysqli_connect('localhost','root','','prognoza') or die('bład w połaczeniu z bazą');
                  $zapytanie="select data_prognozy,temperatura_noc,temperatura_dzien,opady,cisnienie from pogoda where miasta_id=2";
                  $dane=mysqli_query($conn, $zapytanie);
                  $i=1;
                  foreach($dane as $dane1){
                      echo"<tr><td>".$i."</td>";
                      echo"<td>" .$dane1['data_prognozy']."</td>";
                      echo"<td>".$dane1['temperatura_noc']."</td>";
                      echo"<td>".$dane1['temperatura_dzien']."</td>";
                      echo"<td>".$dane1['opady']."</td>";
                      echo"<td>".$dane1['cisnienie']."</td></tr>";
                          $i++;
                  }
              ?>
              </table>
        </section>
        <footer>
        <p>Stronę wykonał:000000000</p>
        </footer>
    </head>
    <body>
        
    
    </body>
</html>
