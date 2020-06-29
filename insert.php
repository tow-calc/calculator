<!DOCTYPE html>
<html lang="en">

<head>
<link rel="stylesheet" href="style.css">

<h1>TOW Datenbank</h1>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>


    <form action="insert.php" method="POST">
        <label for="name">Name</label><br />
        <input name="name" type="text" /> <br />
        <br>
        <label for="alianz">Allianz</label><br />
        <input name="alianz" type="text" /> <br />
        <br>
        <label for="macht">Macht</label><br />
        <input name="macht" type="text" /> <br />
        <br>
        <br>
        <label for="schiff1">Schiff 1</label><br />
        <input name="schiff1" type="text" /> <br />
        <br>
        <br>
        <label for="schiff2">Schiff 2</label><br />
        <input name="schiff2" type="text" /> <br />
        <br>
        <br>
        <label for="schiff3">Schiff 3</label><br />
        <input name="schiff3" type="text" /> <br />
        <br>
        <br>
        <label for="schiff4">Schiff 4</label><br />
        <input name="schiff4" type="text" /> <br />
        <br>
        <br>
        <label for="schiff5">Schiff 5</label><br />
        <input name="schiff5" type="text" /> <br />
        <br>
        <br>   
        <label for="parker">Parker</label><br />
        <input name="parker" type="text" /> <br />
        <br>
        <br>   
        <label for="perez">Perez</label><br />
        <input name="perez" type="text" /> <br />
        <br>
        <br>   

        <button type="submit" name="speichern" value="speichern">SPEICHERN!</button>
    </form>

    <?php

    if (isset($_POST['speichern'])) {

        require('Include/db_connect.php');


        $name = $_POST['name'];
        $alianz = $_POST['alianz'];
        $macht = $_POST['macht'];
        $schiff1 = $_POST['schiff1'];
        $schiff2 = $_POST['schiff2'];
        $schiff3 = $_POST['schiff3'];
        $schiff4 = $_POST['schiff4'];
        $schiff5 = $_POST['schiff5'];
        $parker = $_POST['parker'];
        $perez = $_POST['perez'];


        echo "eingetragener Name: " . $name;
        echo "<br>";
        echo "eingetragene Allianz: " . $alianz;
        echo "<br>";
        echo "eingetragene Macht: " . $macht;
        echo "<br>";
        echo "eingetragenes Schiff 1: " . $schiff1;
        echo "<br>";
        echo "eingetragenes Schiff 2: " . $schiff2;
        echo "<br>";
        echo "eingetragenes Schiff 3: " . $schiff3;
        echo "<br>";
        echo "eingetragenes Schiff 4: " . $schiff4;
        echo "<br>";
        echo "eingetragenes Schiff 5: " . $schiff5;
        echo "<br>";
        echo "eingetragener Taktiker: " . $parker;
        echo "<br>";
        echo "eingetragener Taktiker: " . $perez;




        $sql = "INSERT INTO TOW(Name, Alianz, Macht, Schiff1, Schiff2, Schiff3, Schiff4, Schiff5, Parker, Perez) values (:name, :alianz, :macht, :schiff1, :schiff2, :schiff3, :schiff4, :schiff5, :parker, :perez)";
        $stmt = $dbh->prepare($sql);
        $stmt->bindValue(':name', $name);
        $stmt->bindValue(':alianz', $alianz);
        $stmt->bindValue(':macht', $macht);
        $stmt->bindValue(':schiff1', $schiff1);
        $stmt->bindValue(':schiff2', $schiff2);
        $stmt->bindValue(':schiff3', $schiff3);
        $stmt->bindValue(':schiff4', $schiff4);
        $stmt->bindValue(':schiff5', $schiff5);
        $stmt->bindValue(':parker', $parker);
        $stmt->bindValue(':perez', $perez);

        $stmt->execute();
    }

    require('connectBD.php');

$db_res = runSQL("Select Name, Alianz, Macht, Schiff1, Schiff2, Schiff3, Schiff4, Schiff5, Parker, Perez, Datum FROM TOW");


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
    echo ('<td>' . $row['Parker'] . '</td>');
    echo ('<td>' . $row['Perez'] . '</td>');
    echo ('<td>' . $row['Datum'] . '</td>');


    echo ('</tr>');
}
echo ('</table>');


    ?>

</body>

</html>