<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="przychodnia.css">
	<meta charset="utf-8">
	<title>Przychodnia</title>
</head>
<body>
	<div id="cont">
		<div id="baner">
			<h1>PRAKTYKA LEKARZA RODZINNEGO</h1>
		</div>
		<div id="pl">
			<h3>LISTA PACJENTÓW</h3>
			<?php 
				$host="localhost";
				$user="root";
				$passwd="";
				$dbname="przychodnia";
				$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);
				$sql="SELECT id, imie, nazwisko FROM `pacjenci`";
				$wynik=mysqli_query($polaczenie,$sql);
				while($wiersz=mysqli_fetch_assoc($wynik))
				{		
					echo '<p>'.$wiersz['id'].' '.$wiersz['imie'].' '.$wiersz['nazwisko'].'</p>';
				}
				mysqli_close($polaczenie);

				 ?>
			<br><br>
			<form action="pacjent.php" method="post">  
          
    			Podaj id:
    			<input type="number" name="id"/>    
    			<input type="submit" value="Pokaż dane"/>
    
  			</form>
  			<h3>LEKARZE</h3>
  				<ul>
  					<li>pn - śr
    					<ol>
      						<li>Anna Kwaitkowska</li>
      						<li>Jan Kowalski</li>
    					</ol>
  					</li>
  					<li>czw - pt
  						<ol>
      						<li>Krzysztof Nowak</li>
      					</ol>
  					</li>
				</ul>
		</div>
		<div id="pp">
			<h2>INFORMACJE SZCZEGÓŁOWE O PACJENCIE</h2>
			<?php 
				$id=$_POST['id'];
				$host="localhost";
				$user="root";
				$passwd="";
				$dbname="przychodnia";
				$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);
				$sql="SELECT imie, nazwisko,choroby_przewlekle, uczulenia FROM `pacjenci`WHERE id=$id";
				$wynik=mysqli_query($polaczenie,$sql);
				while($wiersz=mysqli_fetch_assoc($wynik))
				{		
					echo '<p>Imię i Nazwisko: '.$wiersz['imie'].' '.$wiersz['nazwisko'].'</p>'.'<p>Choroby przewlekłe: '.$wiersz['choroby_przewlekle'].'</p>'.'<p>Uczulenia: '.$wiersz['uczulenia'].'</p>';
				}
				mysqli_close($polaczenie);

				 ?>
		</div>
		<section id="footer">
			<p>Utworzone przez: PESEL</p>
			<a href="kwerendy.txt">Pobierz plik z kwerendami</a>
		</section>
	</div>
</body>
</html>