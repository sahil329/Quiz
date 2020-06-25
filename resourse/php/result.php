<?php
	session_start();
	// $con=mysqli_connect('localhost','sahil','sahil');
	$con=new mysqli('localhost','sahil','sahil',"quiz");
	// if(!mysqli_connect_errno()) echo "sucssec to connect";
	echo $_SESSION['user'];
	// $q="insert into results values('',)";
	// echo $q;
	// if($result=mysqli_query($con,$q)){
	// 	header('Location: ..\html\index.html');
	// }
	// else
	// 	header('Location: resourse\php\login.php');
	
?>