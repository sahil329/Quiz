<?php 
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$fn=$_POST['fname'];
	$ln=$_POST['lname'];
	$pass=$_POST['pasw'];
	// $con=mysqli_connect('localhost','sahil','sahil');
	$con=new mysqli('localhost','sahil','sahil',"quiz");
	// if(!mysqli_connect_errno()) echo "sucssec to connect";
// 
	$q="insert into persons values('','$fn','$ln','$pass')";
	echo $q;
	if($result=mysqli_query($con,$q)){
		header('Location: ..\html\index.html');
	}
	else
		header('Location: resourse\php\login.php');
	}
?>
 