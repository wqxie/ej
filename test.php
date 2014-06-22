<?php
require_once "db.php";

$sql="SELECT district1, district2,district3,district4 FROM data WHERE 1";
$result = mysql_query($sql);
while ( $row = mysql_fetch_row($result) ) {
// echo $row['id'];
	// var_dump($row);
	echo $row[0];
}
?>