<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="salon.css">
	<title>Salon pielęgnacji</title>
</head>
<body>
	<header>
		<h1>SALON PIELĘGNACJI PSÓW I KOTÓW</h1>
	</header>
	<nav>
		<h3>SALON ZAPRASZA W DNIACH</h3>
		<ul>
			<li>Poniedziałek, 12:00 - 18:00</li>
			<li>Wtorek, 12:00 - 18:00</li>
		</ul>
		<a href="pies.jpg"><img src="pies-mini.jpg"></a>
		<p>Umów się telefonicznie na wizytę lub po prostu przyjdź!</p>
	</nav>
	<main>
		<h3>PRZYPOMNIENIE O NASTĘPNEJ WIZYCIE</h3>
		<?php
		$connect = mysqli_connect('localhost','root','','salon');
		$ask = "SELECT `zwierzeta`.`imie`, `zwierzeta`.`rodzaj`, `zwierzeta`.`nastepna_wizyta`, `zwierzeta`.`telefon` FROM `zwierzeta` WHERE `zwierzeta`.`nastepna_wizyta` != 0";
		$ask2 = "SELECT `zwierzeta`.`imie`, `zwierzeta`.`rodzaj`, `zwierzeta`.`nastepna_wizyta`, `zwierzeta`.`telefon` FROM `zwierzeta` WHERE `zwierzeta`.`nastepna_wizyta` != 0 AND `zwierzeta`.`rodzaj` = 1";
		$ask3 = "SELECT `zwierzeta`.`imie`, `zwierzeta`.`rodzaj`, `zwierzeta`.`nastepna_wizyta`, `zwierzeta`.`telefon` FROM `zwierzeta` WHERE `zwierzeta`.`nastepna_wizyta` != 0 AND `zwierzeta`.`rodzaj` = 2";
		$result = mysqli_query($connect, $ask);
		$result2 = mysqli_query($connect, $ask2);		
		$result3 = mysqli_query($connect, $ask3);		
		while ($line = mysqli_fetch_row($result)) 
		{
			while ($line2 = mysqli_fetch_row($result2) ) 
			{ 
				echo 'Pies: '.$line2[0].'<br>'.'Data następnej wizyty: '.$line2[2].', telefon właściciela: '.$line2[3].'<br>';
			}
			while ($line3 = mysqli_fetch_row($result3) ) 
			{ 
				echo 'Kot: '.$line3[0].'<br>'.'Data następnej wizyty: '.$line3[2].', telefon właściciela: '.$line3[3].'<br>';
			}
		}

		mysqli_close($connect);
		?>
	</main>
	<aside>
		<h3>USŁUGI</h3>
		<?php
		$connect = mysqli_connect('localhost','root','','salon');
		$ask1 = "SELECT nazwa, cena FROM `uslugi`";
		$result1 = mysqli_query($connect, $ask1);
		while ($line1 = mysqli_fetch_row($result1))
		{
			echo $line1[0].', '.$line1[1].'<br>';
		}

		mysqli_close($connect);
		?>
	</aside>
</body>
</html>