<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="/style.css">

    <h1 style="text-align: center; color: red;">TOW Datenbank</h1>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>


    <form action="insert.php" method="POST">
        <label for="name">Name</label><br />
        <input name="name" type="text" /> <br />
        <br>
        <label for="alianz">Allianz</label><br />
        <select name="alianz">
            <option value=""> Allianz Auswahl </option>
            <option value="IRT"> IRT </option>
            <option value="WRG"> WRG </option>
            <option value="bFC"> bFC </option>
        </select>
        <br>
        <label for="macht">Macht</label><br />
        <input name="macht" type="text" /> <br />
        <br>
        <br>
        <label for="schiff1">Schiff 1</label><br />
        <select name="schiff1">
            <option value=""> Schiff 1 Auswahl </option>
            <option value="Roter Drache"> Roter Drache </option>
            <option value="Blaue Sirene"> Blaue Sirene </option>
            <option value="Sturmreiter"> Sturmreiter </option>
            <option value="Neptuns Ruhm"> Neptuns Ruhm </option>
            <option value="Gewaltige Galeone"> Gewaltige Galeone </option>
            <option value="Kriegsgaleone"> Kriegsgaleone </option>
            <option value="Superfregatte"> Superfregatte </option>
        </select>
        <br>
        <br>
        <label for="schiff2">Schiff 2</label><br />
        <select name="schiff2">
            <option value=""> Schiff 2 Auswahl </option>
            <option value="Roter Drache"> Roter Drache </option>
            <option value="Blaue Sirene"> Blaue Sirene </option>
            <option value="Sturmreiter"> Sturmreiter </option>
            <option value="Neptuns Ruhm"> Neptuns Ruhm </option>
            <option value="Gewaltige Galeone"> Gewaltige Galeone </option>
            <option value="Kriegsgaleone"> Kriegsgaleone </option>
            <option value="Superfregatte"> Superfregatte </option>
        </select>
        <br>
        <br>
        <label for="schiff3">Schiff 3</label><br />
        <select name="schiff3">
            <option value=""> Schiff 3 Auswahl </option>
            <option value="Roter Drache"> Roter Drache </option>
            <option value="Blaue Sirene"> Blaue Sirene </option>
            <option value="Sturmreiter"> Sturmreiter </option>
            <option value="Neptuns Ruhm"> Neptuns Ruhm </option>
            <option value="Gewaltige Galeone"> Gewaltige Galeone </option>
            <option value="Kriegsgaleone"> Kriegsgaleone </option>
            <option value="Superfregatte"> Superfregatte </option>
        </select>
        <br>
        <br>
        <label for="schiff4">Schiff 4</label><br />
        <select name="schiff4">
            <option value=""> Schiff 4 Auswahl </option>
            <option value="Roter Drache"> Roter Drache </option>
            <option value="Blaue Sirene"> Blaue Sirene </option>
            <option value="Sturmreiter"> Sturmreiter </option>
            <option value="Neptuns Ruhm"> Neptuns Ruhm </option>
            <option value="Gewaltige Galeone"> Gewaltige Galeone </option>
            <option value="Kriegsgaleone"> Kriegsgaleone </option>
            <option value="Superfregatte"> Superfregatte </option>
        </select>
        <br>
        <br>
        <label for="schiff5">Schiff 5</label><br />
        <select name="schiff5">
            <option value=""> Schiff 5 Auswahl </option>
            <option value="Roter Drache"> Roter Drache </option>
            <option value="Blaue Sirene"> Blaue Sirene </option>
            <option value="Sturmreiter"> Sturmreiter </option>
            <option value="Neptuns Ruhm"> Neptuns Ruhm </option>
            <option value="Gewaltige Galeone"> Gewaltige Galeone </option>
            <option value="Kriegsgaleone"> Kriegsgaleone </option>
            <option value="Superfregatte"> Superfregatte </option>
        </select>
        <br>
        <br>
        <label for="parker">Parker</label><br />
        <select name="parker">
            <option value=""> Parker Dunkel vorhanden? </option>
            <option value="ja"> Ja </option>
            <option value="nein"> Nein </option>
        </select>

        <br>
        <br>
        <label for="perez">Perez</label><br />
        <select name="perez">
            <option value=""> Perez Dunkel vorhanden? </option>
            <option value="ja"> Ja </option>
            <option value="nein"> Nein </option>
        </select>
        <br>
        <br>

        <button type="submit" name="speichern" value="speichern">SPEICHERN!</button>
    </form>

    <br>
    <br>

    <form>

   

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

        $db_res = runSQL("Select ID, Name, Alianz, Macht, Schiff1, Schiff2, Schiff3, Schiff4, Schiff5, Parker, Perez, Datum FROM TOW");

        echo "<table border='1' cellpadding='5'>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Allianz</th>
    <th>Macht</th>
    <th>1. Schiff</th>
    <th>2. Schiff</th>
    <th>3. Schiff</th>
    <th>4. Schiff</th>
    <th>5. Schiff</th>
    <th>Parker?</th>
    <th>Perez?</th>
    <th>Datum</th>
    <th>löschen</th>
    </tr>";
        echo "<form method='post'>";


        while ($row = mysqli_fetch_array($db_res)) {

            echo ('<td>' . $row['ID'] . '</td>');
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
            echo "<td> <a href=delete.php?id=".$row['ID'].">Delete</a> </td>";
            echo ('</tr>');
        }
        echo ('</table>');


        ?>
    </form>
    </form>
</body>

</html>