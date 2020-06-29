<?php?>

<link rel="stylesheet" href="style.css">

<h1>TOW Datenbank</h1>

</form>
<br>
<p>Hier sind die Gegner:</p>

<?php

require('connectBD.php');

$db_res = runSQL("Select Name, Alianz, Macht, Schiff1, Schiff2, Schiff3, Schiff4, Schiff5 FROM TOW");


echo ('<table>');
while ($row = mysqli_fetch_array($db_res)) {
    echo ('<tr>');
    echo ('<td>' . $row['Name'] . '</td>');
    echo ('<td>' . $row['Alianz'] . '</td>');
    echo ('<td>' . $row['Macht'] . '</td>');
    echo ('<td>' . $row['Schiff1'] . '</td>');
    echo ('<td>' . $row['Schiff2'] . '</td>');
    echo ('<td>' . $row['Schiff3'] . '</td>');
    echo ('<td>' . $row['Schiff4'] . '</td>');
    echo ('<td>' . $row['Schiff5'] . '</td>');

    echo ('</tr>');
}
echo ('</table>');

?>