<?php
//Create connection
$db_host = 'localhost';
$db_name = 'CS230_Assignment4';
$db_user = 'root';
$db_pass = '';

//Create mysqli object
$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);

//Error Handler
if($mysqli->connect_error){
	printf("Connect failed: %s\n", $mysqli->connect_error);
	exit();
}
?>