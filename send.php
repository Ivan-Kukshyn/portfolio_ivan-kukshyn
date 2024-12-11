<?php
use PHPMailer\PHPMailer\PHPMailer;

// Connect PHPMailer
require 'vendor/autoload.php';

    // Get data from the form
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    // Server settings
    $mail = new PHPMailer(true);

    // Настройки сервера
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; 
    $mail->SMTPAuth = true;
    $mail->Username = 'ivan.kukshyn@gmail.com';
    $mail->Password = 'oost adaq yyip iqaf';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  
    $mail->Port = 587; 

    // Sender setting
    $mail->setFrom($email, $name);
    $mail->addAddress('ivan.kukshyn@gmail.com', 'Ivan Kukshyn');

    // Content of the letter
    $mail->isHTML(true);                              
    $mail->Subject = "Message from Portfolio: $subject";
    $mail->Body = "
        <h2>New message from Portfolio</h2>
        <p><b>Name:</b> $name</p>
        <p><b>Sender's Email:</b> $email</p>
        <p><b>Phone number:</b> $phone</p>
        <p><b>Message:</b><br>$message</p>
    ";

    // Sending a letter
    $mail->send();
    header("Location: sent.html");
?>