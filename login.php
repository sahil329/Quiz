<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<link rel="stylesheet" type="text/css" href="resourse\css\login.css">
	<script type="text/javascript">
		function changeSignup(){
			var l=document.getElementById("login");
			var s=document.getElementById("signup");
			l.style.display="none";
			s.style.display="block";
		}
		function changeLogin(){
			var l=document.getElementById("login");
			var s=document.getElementById("signup");
			l.style.display="block";
			s.style.display="none";
		}
	</script>
</head>
<body>
	<?php 
	session_start();
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$fn=$_POST['fname'];
	$pass=$_POST['pasw'];
	// $con=mysqli_connect('localhost','sahil','sahil');
	$con=new mysqli('localhost','sahil','sahil',"quiz");
	// if(!mysqli_connect_errno()) echo "sucssec to connect";
	$q="select * from persons where PFNAME='$fn' and PASSW='$pass'";
	if($result=mysqli_query($con,$q)){
		$row=mysqli_num_rows($result);
		if($row==1){
			$_SESSION['user']=$fn;
			header('Location: resourse\html\index.html');
			mysqli_free_result($result);
		}
		else
			echo "<h3><center>User not found !!</center></h3>";
	}
  }	
?>

	<div id="login">
		<h2>Login</h2>
		<form  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
			<table>
				<tr>
					<th>First Name:</th>
					<td><input type="text" name="fname" />
				</tr>
				<tr>
					<th>Password:</th>
					<td><input type="password" name="pasw" />
				</tr>
				<tr>
					<td><input type="submit" value="Login" class="btn" ></td>
				</tr>
			</table>
		</form>
		<button class="switch" onclick="changeSignup()">New User</button>
	</div>
	<div id="signup">
		<h2>SignUp</h2>
		<form  action="resourse\php\validate.php" method="POST">
			<table>
				<tr>
					<th>First Name:</th>
					<td><input type="text" name="fname" />
				</tr>
				<tr>
					<th>Last Name:</th>
					<td><input type="text" name="lname" />
				</tr>
				<tr>
					<th>Password:</th>
					<td><input type="password" name="pasw" />
				</tr>
				<tr>
					<td><input type="submit" value="SignUp" class="btn" ></td>
				</tr>
			</table>
		</form>
		<button class="switch" onclick="changeLogin()">Login</button>
	</div>
</body>
</html>