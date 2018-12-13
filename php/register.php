<?php
//解决乱码问题
	header("Content-type: text/html; charset=utf-8");
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "mydb1808";
	
	// 创建连接
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn -> connect_error) {
		die("连接失败: " . $conn -> connect_error);
	}
	
	//接收数据
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	//执行sql语句
	//先判断数据库中是否存在
	$sqlstr = "select * from user where username='$username'";
	$result = $conn->query($sqlstr);
	if ($result->num_rows > 0) {
		$sqlstr2 = "select * from user where password='$password'";
		$result2 = $conn->query($sqlstr2);
		if ($result2->num_rows>0) {
			echo "1";
		}else {
			echo "0";
		}
	}else {
		echo "2";
	}
	$conn->close();
?>