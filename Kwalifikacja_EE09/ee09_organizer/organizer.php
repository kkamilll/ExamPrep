<!DOCTYPE HTML>
<HTML>
    <HEAD>
    <meta charset="UTF-8">
        <title>Organizer</title>
        <link rel="stylesheet" href="styl6.css">
    </HEAD>
    <body>
    <section id="baner1">
        <h2>MÓJ ORGANIZER</h2>
        </section>
        <section id="baner2">
        <FORM action="organizer.php" method="post">
            Wpis wydarzenia: <input type="text" name="wpis">
            <input type="submit" value="Zapisz">
            </FORM>
        </section>
            <section id="baner3"><img src="logo1.png" alt="Mój organizer"></section>
        <section id="glowny">
          <?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

    $conn=mysqli_connect('localhost','root','','egzamin6');
    $zapytanie="SELECT dataZadania, miesiac, wpis FROM zadania where  miesiac='sierpien'";
    $dane=mysqli_query($conn,$zapytanie);
    foreach($dane as $dane1){
        echo "<div id='dzien'><h6>".$dane1['dataZadania'].", ".$dane1['miesiac']."</h6><p>".$dane1['wpis']."</p></div>";
    }
            mysqli_close($conn);
    ?>
        </section>
<footer>
    <?php
    $conn=mysqli_connect('localhost','root','','egzamin6');
    $zapytanie="select rok,miesiac from zadania where dataZadania='2020-08-01'";
    $dane=mysqli_query($conn,$zapytanie);
    foreach($dane as $dane1){
    echo"<h1>miesiąc: ".$dane1['miesiac'].", rok: ".$dane1['rok']."</h1>";
    }
    @$wpis=$_POST['wpis'];
$zapytanie2="UPDATE zadania set wpis='$wpis' WHERE dataZadania='2020-08-27'";
mysqli_query($conn,$zapytanie2);
     mysqli_close($conn);
    
    ?>
    <p>Stronę wykonał:00000000</p></footer>
 </body>


</HTML>