<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create the file 
$filename = $name . ".txt";
$file = fopen($filename, "W");
$fileContent = "Please contact:\n" . $name . " on " . $email . "\nMessage:\n" . $message;
fwrite($file, $fileContent);
fclose($file);

// Send email

// Return a message for the user
echo "Dear " . $name . ". We have received your message! We will contact you soon at " . $email;

?>