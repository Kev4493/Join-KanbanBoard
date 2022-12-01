<?php

########### CONFIG ###############

$redirect = 'https://kevin-wagner.developerakademie.net/Join-Javascript/index.html';
$link = "https://kevin-wagner.developerakademie.net/Join-Javascript/html/reset-password.html";
$message = "Hello, \r\n \r\n
please click on link below to reset your password \r\n \r\n $link \r\n \r\n
Yours sincerely \r\n
your JOIN-Kanban Team
";


########### CONFIG END ###########



########### Intruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST rewquest to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $subject = "Contact From JOIN-Kanban Team";
        $headers = "From:  noreply@developerakademie.com";
        $recipient = $_POST['mail']

        mail($recipient, $subject, $message, $headers);
        header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
