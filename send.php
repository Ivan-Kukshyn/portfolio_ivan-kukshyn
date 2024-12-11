<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require __DIR__ . '/vendor/autoload.php';

// Get data from the form
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$phone = htmlspecialchars($_POST["phone"]);
$subject = htmlspecialchars($_POST["subject"]);
$message = htmlspecialchars($_POST["message"]);

// Create PHPMailer instance
$mail = new PHPMailer(true);

    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ivan.kukshyn@gmail.com';
    $mail->Password = 'ueol vzlu wqso bvht';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Sender and recipient settings
    $mail->setFrom($email, $name);
    $mail->addAddress('ivan.kukshyn@gmail.com', 'Ivan Kukshyn');

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "Message from Portfolio: $subject";
    $mail->Body = "
        <h2>New message from Portfolio</h2>
        <p><b>Name:</b> $name</p>
        <p><b>Sender's Email:</b> $email</p>
        <p><b>Phone number:</b> $phone</p>
        <p><b>Message:</b><br>$message</p>
    ";

    // Send email
    $mail->send();
    header("Location: index.html");
?>