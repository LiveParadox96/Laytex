<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $to_email = 'your_email@example.com';
    $subject = 'Запрос на звонок';
    $name = $_POST['name'];
    $phone = $_POST['phone_number'];
    $message = "Имя: $name\nТелефон: $phone";
    $headers = 'From: liveparadox@vk.com' . "\r\n" .
    'Reply-To: your_email@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if(mail($to_email, $subject, $message, $headers)) {
        echo "Спасибо! Ваш запрос на звонок отправлен.";
    } else {
        echo "Ошибка отправки запроса на звонок.";
    }
}
?>