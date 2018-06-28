<?php //Reference: Eduonix: https://www.youtube.com/watch?v=jwY8XlVAcfE ?>

<?php include 'database.php'; ?>
<?php session_start()?>
<?php
	//Set question number
	$number = (int) $_GET['n'];
	//Get total questions
	$query = "SELECT * FROM `questions`";
	//Get result
	$results = $mysqli->query($query) or die($mysqli->error.__LINE__);
	$total = $results->num_rows;
	//Get Question	
	$query = "SELECT * FROM `questions`WHERE question_number = $number";
	//Get result
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
	
	$question = $result->fetch_assoc();
	//Get Choices
	$query = "SELECT * FROM `choices` WHERE question_number = $number";
	//Get results
	$choices = $mysqli->query($query) or die($mysqli->error.__LINE__);
?>
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
		<?php $q = $question['question_number'];?>
		<div class="container">
			<?php echo '<img src="images/'.$q.'.jpg" alt="Yoga Card"/>';?>
			<div class="current"><strong> Question <?php echo $q; ?> of <?php echo $total; ?> </strong></div>		
			<p class="question">
				<strong><?php echo $question['text']; ?></strong>
			</p>
			<form method="post" action="process.php">
				<ul class="choices">
					 <?php while($row = $choices->fetch_assoc()): ?>
						<li><input name="choice" type="radio" value="<?php echo $row['id']; ?>" /><?php echo $row['text']; ?></li>
					 <?php endwhile; ?> 
				</ul>
				<input type="submit" value="Submit" />
				<input type="hidden" name="number" value="<?php echo $number; ?>" />
			</form>
		</div>
	</main>
	<footer>
		<div class="container">
		</div>
	</footer>
</body>
</html>