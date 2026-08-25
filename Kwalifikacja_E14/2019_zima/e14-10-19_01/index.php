<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style4.css">
	<title>Odżywianie zwierząt</title>
</head>
<body>
	<header>
		<h2>DRAPIEŻNIKI I INNE</h2>
	</header>
	<nav>
		<h3>Wybierz styl życia:</h3>
		<form action="index.php" method="POST">
			<select name="list">
				<option value="1">Drapieżniki</option>
				<option value="2">Roślinożerne</option>
				<option value="3">Padlinożerne</option>
				<option value="4">Wszytkożerne</option>
			</select>
			<input type="submit" value="Zobacz">
		</form>
	</nav>
	<section id="bl" class="blocks">
		<h3>Lista zwierząt</h3>
		<ul>
		<?php
			$connect =mysqli_connect('localhost','root','','baza');
			$sql="SELECT `zwierzeta`.`gatunek`, `odzywianie`.`rodzaj` FROM `zwierzeta` INNER JOIN `odzywianie` ON `odzywianie`.`id` = `zwierzeta`.`Odzywianie_id`";
		 	$query= mysqli_query($connect,$sql);
		 	while ($linia=mysqli_fetch_assoc($query))
		 	{
		 		echo "<li>".$linia['gatunek']." ".$linia['rodzaj']."</li>";
		 	}


			 mysqli_close($connect);
		?>
		</ul>
	</section>
	<section id="bs" class="blocks">
		<?php
			$connect =mysqli_connect('localhost','root','','baza');
			$list = $_POST['list'];
			$sql="SELECT `zwierzeta`.`id`, `zwierzeta`.`gatunek`, `zwierzeta`.`wystepowanie` FROM `zwierzeta` INNER JOIN `odzywianie` ON `odzywianie`.`id` = `zwierzeta`.`Odzywianie_id` WHERE `zwierzeta`.`Odzywianie_id` = $list ";
		 	$query= mysqli_query($connect,$sql);		 	

		 	if (isset($_POST['list']))
			{		
			   	if ($list == 1)
				{
			      echo "<h3>"."Drapieżniki"."</h3>";
			    }
			    else if ($list == 2)
			    {
			      echo "<h3>"."Roślinożerne"."</h3>";
			    }
			    else if ($list == 3)
			    {
			      echo "<h3>"."Padlinożerne"."</h3>";
			    }
			    else if ($list == 4)
			    {
			      echo "<h3>"."Wszytkożerne"."</h3>";
			    }
			}			

			while ($linia=mysqli_fetch_assoc($query))
		 	{
		 		echo $linia['id'].", ".$linia['gatunek'].", ".$linia['wystepowanie']."<br>";
		 	}	    
			mysqli_close($connect);
		?>
	</section>
	<section id="bp">
		<img src="drapieznik.jpg" alt="Wilki">
	</section>
	<footer>
		<a href="https://pl.wikipedia.org" target="blank">Poczytaj o zwierzętach na Wikipedii</a>
		autor strony: 00000000000
	</footer>
</body>
</html>