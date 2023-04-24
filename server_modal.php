<?php
if($_POST){
    $to_email = "liveparadox@vk.com";
    $subject = "Новая заявка с сайта";
    $message = "Имя: " . $_POST["username"] . "\r\n" .
               "Телефон: " . $_POST["phone"] . "\r\n" .
               "Сообщение: " . $_POST["message"];

    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: webmaster@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if(mail($to_email, $subject, $message, $headers)){
        echo "Сообщение успешно отправлено.";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>