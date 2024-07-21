<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "supermarket";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else{
    echo "connection successful";
}

$email=$_POST['mail'];
$password=$_POST['pwd'];
 
echo "email: ".$email."<br>"; 
echo "password: ".$password."<br>"; 

$query1 = "use supermarket";
if($conn->query($query1)){
	echo "Database supermarket succesfully used..."."<br>";
}
else{
	echo "Database not used..."."<br>";
}

// $query2 = "CREATE TABLE register (email varchar(25), password varchar(20));";
// if($conn->query($query2))
// {
//     echo "Table Created";
// }
// else
// {
//     echo "Table not Created . "."<br>";
// }\

$query3 = "INSERT INTO register VALUES(?, ?);";
$initialize = mysqli_stmt_init($conn);
if(mysqli_stmt_prepare($initialize, $query3))
{
    mysqli_stmt_bind_param($initialize, "ss", $email , $password);
    mysqli_stmt_execute($initialize);
    echo "<h4 style='color:yellow'>Records Inserted</h4><br>"."<br>";
}

$conn->close();
header("Location: login.html");
?>