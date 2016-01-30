<?php
header("Content-type:text/html;charset=utf-8");

$userName = $_POST['username'];
if ($userName=='admin'){
	echo '用户名不能是admin';
} else {
	echo '用户名'.$userName.'可以注册';
}

?>