<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

each "Dear " . $name . ". We have received your message! We will contact you soon at " . $email;

?>