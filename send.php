<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create the file 
$filename = $name . ".txt";
$file = fopen($filename, "w") or die("Unable to open file: " . $filename);
$fileContent = "Please contact:\n" . $name . " on " . $email . "\nMessage:\n" . $message;
fwrite($file, $fileContent);
fclose($file);

// Send email
$headers = "From: team09@inkumail.com";
$emailBody = "Dear " . $name . "\nYou have requested information about the following message:\n" . $message . "\n\nWe will contact you soon on " . $email;
mail($email,"Thankyou for contacting us!",$emailBody,$headers) or die ("Failed to send email...");

// Return a message for the user
echo "Dear " . $name . ". We have received your message! We will contact you soon at " . $email;

?>