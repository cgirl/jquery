<?php
header("Content-type:text/html;charset=utf-8");

//$userName = $_GET['username'];
$userName = $_POST['username'];
if ($userName=='admin'){
	echo false;
} else {
	echo true;
}

?>