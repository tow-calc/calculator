<?php

$db_link = mysqli_connect('rdbms.strato.de', 'U4173818', 'Iwoiweis18+', 'DB4173818');

if (!$db_link) {
    die("<p> Verbindung kann nicht hergestellt werden. Es tut uns sehr leid. Bitte versuchen Sie es später noch einmal. Danke!");
}

function runSQL($sql)

{
    global $db_link;
    $db_res = mysqli_query($db_link, $sql) or die("SQL-Abfrage: " . $sql . ", Fehler: " . mysqli_error("$db_link"));
    return $db_res;
}


?>
