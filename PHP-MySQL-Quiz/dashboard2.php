<?php
require('database.php');
include("auth.php"); //include auth.php file on all secure pages 
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Dashboard - Personal Stats</title>
<link rel="stylesheet" href="css/styles.css" />
<img src="images/frontpage.jpg" width="1125" height="329" alt="Dash_Image">
</head>
<body>
<div class="form">
<p>Dashboard - Personal Stats etc.</p>
<p><a href="question.php?n=1" class="start">Start Quiz</a></p>
<p><a href="index.php">Home</a></p>
<a href="logout.php">Logout</a>
</div>
</body>
</html>
