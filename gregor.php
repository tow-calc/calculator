<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="/style.css">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="top">
        <div id="logo">Gregor´s geheimer ToW Rechner</div>
        <div id="logo-name">Nur DU hast Zugriff auf diese Daten!</div>
        <div id="navigation">
            <a href="#handel">Handelsschiff Event</a>
            <br>


            <form action="gregor.php" method="POST">
                <label for="nahrung">Nahrung</label><br />
                <input name="nahrung" type="text" /> <br />
                <br>
                <label for="holz">Holz</label><br />
                <input name="holz" type="text" /> <br />
                <br>
                <label for="silber">Silber</label><br />
                <input name="silber" type="text" /> <br />
                <br>
                <h4>test1</h4>
                <button type="submit" name="speichern" value="speichern">SPEICHERN!</button>
            </form>
        
            <?php
        
            if (isset($_POST['speichern'])) {
        
                require('Include/db_connect.php');
        
        
                $nahrung = $_POST['nahrung'];
                $holz = $_POST['holz'];
                $silber = $_POST['silber'];
       
        
                echo "eingetragene Nahrung: " . $nahrung;
                echo "<br>";
                echo "eingetragenes Holz: " . $holz;
                echo "<br>";
                echo "eingetragenes Silber: " . $silber;       
        
                $sql = "INSERT INTO Gregor(Nahrung, Holz, Silber) values (:nahrung, :holz, :silber)";
                $stmt = $dbh->prepare($sql);
                $stmt->bindValue(':nahrung', $nahrung);
                $stmt->bindValue(':holz', $holz);
                $stmt->bindValue(':silber', $silber);
        
                $stmt->execute();
            }
        
            require('connectBD.php');
        
            $db_res = runSQL("Select Nahrung, Holz, Silber FROM Gregor");
        

            echo ('<table>');
            while ($row = mysqli_fetch_array($db_res)) {
                echo ('<tr>');
                echo ('<td>' . $row['Nahrung'] . '</td>');
                echo ('<td>' . $row['Holz'] . '</td>');
                echo ('<td>' . $row['Silber'] . '</td>');
        
                echo ('</tr>');
            }
            echo ('</table>');

        
        
            ?>
        


</body>

</html>