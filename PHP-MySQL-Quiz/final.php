<?php //Reference: Eduonix: https://www.youtube.com/watch?v=jwY8XlVAcfE ?>

<?php include 'database.php'; ?>
<?php session_start(); ?>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8" />
	<title>Yoga Quiz</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body>
	<header>
		<div class="container">
			<h1>Yoga Quiz</h1>
		</div>
	</header>
	<main>
		<div class="container">
			<h2></h2>
			<img src="images/frontpage.jpg" width="1125" height="329" alt="Frontpage">
				<?php 
				$query = "SELECT * FROM `questions`";
				$questions = $mysqli->query($query) or die($mysqli->error.__LINE__);
			    $total = $questions->num_rows; 
				//$score = $_SESSION['score']; 
				if (empty($_SESSION['score'])){
				    $score = 0;
				}
				else{
					$score = $_SESSION['score'];
				}
				?>
				<p>Well done <?php 
				if (empty($_SESSION['username'])){
					  echo "";
				}
				else{
					echo $_SESSION['username']; 
				}
					?>!	
			    </p>You have completed the test!</p>
				<p>Final Score: <?php echo $score; ?> out of <?php echo $total; ?> </p></p>
				<p>Percentage: <?php echo ceil(($score/$total)*100); ?> % </p>
				<a href="question.php?n=1" class="start">Take Again</a>
				<p><a href="index.php" class="start">Home</a></p>
				<p><a href="dashboard.php" class="start">Dashboard</a></p>
				<p><a href="login.php" class="start">Login</a></p>
			  	<a href="logout.php" class="start">Logout</a>
				<hr>
		</div>
	</main>
	<footer>
		<div class="container">
		</div>
	</footer>
</body>
</html>
<?php session_destroy(); ?>