<?php
require 'config.php';
if (isset($_POST["submit"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $result = mysqli_query($conn, "SELECT * FROM tb_user WHERE username = '$username' OR '$username' ");
    $row = mysqli_fetch_assoc($result);
    if (mysqli_num_rows($result) > 0) {
        if ($password == $row["password"]) {
            $_SESSION["login"] = true;
            $_SESSION["id"] = $row["id"];
            header("Location: acl-store.html");
        } else {
            echo
            "<script> alert ('Wrong Password'); </script>";
        }
    } else {
        echo
        "<script> alert ('User Not Registered'); </script>";
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

    <title>ACL - Login</title>
    <link rel="stylesheet" href="CSS/login.css">

</head>

<body>
    <div class="container">
        <form action="#" method="post" autocomplete="off" class="login-form">
            <h1>SIGN IN</h1>
            <div class="input-group">
                <input type="text" name="username" id="username" placeholder="Username" required>
                <input type="password" name="password" id="password" placeholder="Enter Password" required>
            </div>

            <button type="submit" name="submit">LOGIN</button>
            <p>OR</p>
            <a href="index.html" id="go-back">Go back?</a>
            <p class="register-link">Don't have an account? <a href="register.php">Register</a></p>
        </form>
    </div>
</body>

</html>