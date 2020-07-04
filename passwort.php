<?php
session_start();
$output = null;

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $passwort = $_POST['passwort'];

    if (empty($username) or empty($passwort)) {
        $output = "Bitte fülle alle Felder aus!";
    } else {
        //Connect to Data Base
        $mysqli = new mysqli('rdbms.strato.de', 'U4173818', 'Iwoiweis18+', 'DB4173818');

        $username = $mysqli->real_escape_string($username);
        $passwort = $mysqli->real_escape_string($passwort);

        $query = $mysqli->query("SELECT id from accounts WHERE username = '$username' AND passwort = sha1('$passwort') ");

        if ($query->num_rows == 0) {
            $output = "Falscher Nutzername oder Passwort";
        } else {
            $_SESSION['loggedin'] = TRUE;
            $_SESSION['user'] = $username;

            $output = "Welcome du alter Hase! " . $_SESSION['user'] . " - <a href = 'logout.php'>Logout</a>";
        }
    }
}

if (!isset($_SESSION['loggedin'])) {
    echo "Willkommen mein Captain <p />";


?>
    <form method="POST">
        Nutzername: <input type="TEXT" name="username" />
        <p>
            Passwort: <input type="PASSWORT" name="passwort" />
            <br />
            <input type="Submit" name="submit" value="Log In" />

    </form>

<?php

} else {
    //Display USER and LogOut
}
echo $output;
?>