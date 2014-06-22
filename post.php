<?php
require_once "db.php";
// echo $_POST["dis"];
// if(isset($_POST['name']) && isset($_POST['email']) )
// {
// 	$name = $_POST['name'];
// 	$email = $_POST['email'];
// }
// $sql="SELECT district1, district2,district3,district4,district5,district6,district7,city FROM data WHERE 1";
// $result = mysql_query($sql);
// while ( $row = mysql_fetch_row($result) ) {
// // echo $row['id'];
// 	// var_dump($row);
// 	echo $row[0];
// }
$post = $_POST;
if (isset($post['air'])) {
	$air = $post['air'];
	$sql = "SELECT district1, district2,district3,district4,district5,district6,district7,city FROM data WHERE category = 'air'; ";
	$sql_result = mysql_query($sql);
	$result = array();
	while ($row = mysql_fetch_row($sql_result)) {
		$result[] = $row;
	}
	// $output['district1']=$result['district1'];
	// $output['district2']=$result['district2'];
}
echo json_encode($result[0]);
// echo json_encode($result);
?>


