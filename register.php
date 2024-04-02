<?php
require 'config.php';

if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmpassword = $_POST["confirmpassword"];

    // You need to have $conn defined before using it in mysqli_query
    $duplicate = mysqli_query($conn, "SELECT * FROM tb_user WHERE username = '$username' OR email = '$email'");

    if (!$duplicate) {
        die("Query failed: " . mysqli_error($conn));
    }

    if (mysqli_num_rows($duplicate) > 0) {
        echo "<script> alert ('Username or Email has already taken'); </script>";
    } else {
        if ($password == $confirmpassword) {
            $query = "INSERT INTO tb_user (name, username, email, password) VALUES ('$name', '$username', '$email', '$password')";

            if (mysqli_query($conn, $query)) {
                echo "<script> alert ('Register Successful'); </script>";
            } else {
                echo "<script> alert ('Error: " . mysqli_error($conn) . "'); </script>";
            }
        } else {
            echo "<script> alert ('Password does not match'); </script>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Poppins font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">

    <title>ACL - Register</title>
    <link rel="stylesheet" href="CSS/register.css">
</head>

<body>
    <div class="container">
        <form method="post" autocomplete="off" class="register-form">
            <h1>SIGN UP</h1>
            <div class="input-group1">
                <input type="text" name="name" id="name" placeholder="Your Name" required>
                <input type="text" name="username" id="username" placeholder="Username" required>
                <input type="email" name="email" id="email" placeholder="Email address" required>
            </div>

            <div class="input-group2">
                <input type="password" name="password" id="password" placeholder="New Password" required>
                <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" required>
            </div>

            <button type="submit" name="submit">REGISTER</button>
            <p class="register-link">Already have an account? <a href="login.php">Login</a></p>
        </form>
    </div>
</body>

</html>