<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "membership";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $gender = $_POST['gender'];
    $member = $_POST['member'];
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }


    $sql = "INSERT INTO members (gender, member_type, first_name, last_name, email, contact)
            VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $gender, $member, $fname, $lname, $email, $contact);

    if ($stmt->execute()) {
        echo "<h2>Registration Successful!</h2>";
        echo "<p><strong>Gender:</strong> " . htmlspecialchars($gender) . "</p>";
        echo "<p><strong>Membership Type:</strong> " . htmlspecialchars($member) . "</p>";
        echo "<p><strong>First Name:</strong> " . htmlspecialchars($fname) . "</p>";
        echo "<p><strong>Last Name:</strong> " . htmlspecialchars($lname) . "</p>";
        echo "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
        echo "<p><strong>Contact:</strong> " . htmlspecialchars($contact) . "</p>";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    
    header("Location: index.html");
    exit;
}


$conn->close();
?>
