<?php
$conn =mysqli_connect("localhost","root","","");
if($conn){
    echo "Connection established ... "."<br>";
}
else{
    echo "connection not established... "."<br>".mysqli_error($conn);
}

$name=$_POST['name'];
$doorno=$_POST['doorno'];
$landmark=$_POST['landmark'];
$village=$_POST['village'];
$mandal=$_POST['mandal'];
$district=$_POST['district'];
$mobilenumber=$_POST['mobilenumber'];


#using database:
$query2 = "use supermarket";
if($conn->query($query2)){
	echo "Database supermarket succesfully used..."."<br>";
}
else{
	echo "Database not used..."."<br>";
}

$query3 = "CREATE TABLE address (name varchar(20),door_number varchar(30),landmark varchar(20),village varchar(20),mandal varchar(20),district varchar(15),mobile_number varchar(20));";
if($conn->query($query3))
{
    echo "Table Created";
}
else
{
    echo "Table not Created . ".mysqli_error($conn)."<br>";
}

$query4 = "INSERT INTO address VALUES(?, ?, ?, ?, ?, ?, ?);";
$initialize = mysqli_stmt_init($conn);
if(mysqli_stmt_prepare($initialize, $query4))
{
    mysqli_stmt_bind_param($initialize, "sssssss",$name,$doorno,$landmark,$village,$mandal,$district,$mobilenumber);
    mysqli_stmt_execute($initialize);
    echo "<h4 style='color:yellow'>Records Inserted</h4><br>"."<br>";
	
}

header("Location: order.html");
?>
