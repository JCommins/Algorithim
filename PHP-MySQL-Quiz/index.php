<?php //Reference: Eduonix: https://www.youtube.com/watch?v=jwY8XlVAcfE ?>

<?php
 include 'database.php';
 //Get Total Questions
 $query ="SELECT * FROM questions";
 //Get results
 $results = $mysqli->query($query) or die($mysqli->error.__LINE__);
 $total = $results->num_rows;
?>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8" />
	<title>Yoga Quiz</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<header>
		<div class="container">
			<h1>Yoga Quiz</h1>
		</div>
	</header>
	<div class="container">
	  	<p></p>
	  	<form class="form-inline"><img src="images/frontpage.jpg" width="1125" height="329" alt="Frontpage">
		  <p></p>
		  <hr>
	  <p>Not registered yet? <a href='registration.php' class="start">Register Here</a></p>
	  </form>
	</div>
	<main>
		<div class="container">
			<h2>Test Your Yoga Knowledge!</h2>
			<p>Cards courtesy of <a href="http://www.yogacards.com">www.yogacards.com</a></p>
			<ul>
				<li><strong>Number of Questions: </strong><?php echo $total; ?></li>
				<li><strong>Type: </strong>Multiple Choice</li>
				<li><strong>Estimated Time: </strong><?php echo $total * .5; ?> Minutes</li>
				<p><li><a href="question.php?n=1" class="start">Start Quiz</a></li></p>
				<p><li><a href="dashboard.php" class="start">Dashboard</a></li></p>
				<p><li><a href="login.php" class="start">Login</a></li></p>
		  		<li><a href="logout.php" class="start">Logout</a></li>
			</ul>
			<hr>
	</main>
	<footer>
		<div class="container">
		</div>
	</footer>
</body>
</html>