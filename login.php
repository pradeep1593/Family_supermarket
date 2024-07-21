<?php
$conn = mysqli_connect("localhost", "root", "", "supermarket");

if ($conn) {
    // Connection established
} else {
    die("Connection not established... " . mysqli_error($conn));
}

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the credentials are in the register table
    $query = "SELECT * FROM register WHERE email = ? AND password = ?";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "ss", $email, $password);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
        // Credentials are valid, redirect to index1.html
        header("Location: index1.html");
        exit();
    } else {
        // Credentials are invalid, redirect back with an error message
        header("Location: login.html?");
        exit();
    }

    // Close the statement
    mysqli_stmt_close($stmt);
}

// Close the connection
mysqli_close($conn);
?>
