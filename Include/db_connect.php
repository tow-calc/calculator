<?php

$user = "U4173818";
$pass = "Iwoiweis18+";

try {

    $dbh = new PDO('mysql:host=rdbms.strato.de; dbname=DB4173818', $user, $pass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch (PDOException $e) 
{
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>