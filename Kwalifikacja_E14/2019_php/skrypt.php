<?php
    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
 
		$tytul = $_POST['tytul'];
		$gatunek = $_POST['gatunek'];
		$rok = $_POST['rok'];
		$ocena = $_POST['ocena'];

		$connect = mysqli_connect('localhost','root','','dane') or die('błąd w połączeniu z bazą danych: dane');
		
			$sql = "INSERT INTO filmy (id, gatunki_id,tytul,rok,ocena ) VALUES (NULL, '$gatunek', '$tytul', '$rok', '$ocena')";

			mysqli_query($connect, $sql);
			echo 'Film '.$tytul.' został dodany do bazy';	
		
mysqli_close($connect);
	?>