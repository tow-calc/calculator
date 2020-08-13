<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daten update</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>

    <div id="top">
        <div id="logo">Gregor´s geheimer ToW Rechner</div>
        <div id="logo-name">Nur DU hast Zugriff auf diese Daten!</div>
        <div id="logo-name">Daten bearbeiten!</div>
        <div id="navigation">
            <a href="gregor.php">Zurück</a>

            <br>

            <form action="" method="POST">
                <input name="id" type="text" placeholder="Gib die ID ein...">
                <input type="submit" name="search" value="search Data">
            </form>
            
            <?php
            $con = mysqli_connect('rdbms.strato.de', 'U4173818', 'Iwoiweis18+', 'DB4173818');

            if (isset($_POST['search'])) {

                $id = $_POST['id'];

                $query = "SELECT * FROM `GregorNahrung` WHERE `ID` ='$id'";

                $query_run = mysqli_query($con, $query);

                while ($row = mysqli_fetch_array($query_run)) {
            ?>

                    <form action="" method="POST">
                        <input type="hidden" name="id" value="<?php echo $row['ID']  ?>" />
                        <label for="nahrungName">Account</label>
                        <input name="nahrungName" type="text" value="<?php echo $row['Account']  ?>" />
                        <br>
                        <br>
                        <label for="nahrung150">150 Nahrung</label>
                        <input name="nahrung150" type="text" value="<?php echo $row['Nahrung150']  ?>" />
                        <label for="nahrung600">600 Nahrung</label>
                        <input name="nahrung600" type="text" value="<?php echo $row['Nahrung600']  ?>" />
                        <label for="nahrung3k">3k Nahrung</label>
                        <input name="nahrung3k" type="text" value="<?php echo $row['Nahrung3k']  ?>" />
                        <label for="nahrung6k">6k Nahrung</label>
                        <input name="nahrung6k" type="text" value="<?php echo $row['Nahrung6k']  ?>" />
                        <label for="nahrung12k">12k Nahrung</label>
                        <input name="nahrung12k" type="text" value="<?php echo $row['Nahrung12k']  ?>" />
                        <br>
                        <br>
                        <label for="nahrung30k">30k Nahrung</label>
                        <input name="nahrung30k" type="text" value="<?php echo $row['Nahrung30k']  ?>" />
                        <label for="nahrung60k">60k Nahrung</label>
                        <input name="nahrung60k" type="text" value="<?php echo $row['Nahrung60k']  ?>" />
                        <label for="nahrung120k">120k Nahrung</label>
                        <input name="nahrung120k" type="text" value="<?php echo $row['Nahrung120k']  ?>" />
                        <label for="nahrung300k">300k Nahrung</label>
                        <input name="nahrung300k" type="text" value="<?php echo $row['Nahrung300k']  ?>" />
                        <label for="nahrung600k">600k Nahrung</label>
                        <input name="nahrung600k" type="text" value="<?php echo $row['Nahrung600k']  ?>" />
                        <br>
                        <br>
                        <label for="nahrung12m">1,2 Mio Nahrung</label>
                        <input name="nahrung12m" type="text" value="<?php echo $row['Nahrung12m']  ?>" />
                        <label for="nahrung6m">6 Mio Nahrung</label>
                        <input name="nahrung6m" type="text" value="<?php echo $row['Nahrung6m']  ?>" />
                        <br>
                        <br>
                        <input type="submit" name="updateNahrung" value="Daten updaten">
                    </form>
            <?php
                }
            }
            ?>
</body>

</html>

<?php
// $con = mysqli_connect('rdbms.strato.de', 'U4173818', 'Iwoiweis18+', 'DB4173818');

if (isset($_POST['updateNahrung'])) {

    $id = $_POST['id'];
    $nahrungName = $_POST['nahrungName'];
    $nahrung150 = $_POST['nahrung150'];
    $nahrung600 = $_POST['nahrung600'];
    $nahrung3k = $_POST['nahrung3k'];
    $nahrung6k = $_POST['nahrung6k'];
    $nahrung12k = $_POST['nahrung12k'];
    $nahrung30k = $_POST['nahrung30k'];
    $nahrung60k = $_POST['nahrung60k'];
    $nahrung120k = $_POST['nahrung120k'];
    $nahrung300k = $_POST['nahrung300k'];
    $nahrung600k = $_POST['nahrung600k'];
    $nahrung12m = $_POST['nahrung12m'];
    $nahrung6m = $_POST['nahrung6m'];
    $nahrungErgebnis = $nahrung150 * 150 + $nahrung600 * 600 + $nahrung3k * 3000 + $nahrung6k * 6000 + $nahrung12k * 12000 + $nahrung30k * 30000 + $nahrung60k * 60000 +
        $nahrung120k * 120000 + $nahrung300k * 300000 + $nahrung600k * 600000 + $nahrung12m * 1200000 + $nahrung6m * 6000000;


    $sql = "UPDATE `GregorNahrung` SET `Account` = '" . $nahrungName . "',`Nahrung150` = '" . $nahrung150 . "',`Nahrung600` = '" . $nahrung600 . "', `Nahrung3k` = '" . $nahrung3k . "', `Nahrung6k` = '" . $nahrung6k . "', `Nahrung12k` = '" . $nahrung12k . "', `Nahrung30k` = '" . $nahrung30k . "', `Nahrung60k` = '" . $nahrung60k . "', `Nahrung120k` = '" . $nahrung120k . "', `Nahrung300k` = '" . $nahrung300k . "', `Nahrung600k` = '" . $nahrung600k . "', `Nahrung12m` = '" . $nahrung12m . "', `Nahrung6m` = '" . $nahrung6m . "', `Ergebnis` = '" . $nahrungErgebnis . "' WHERE `ID` ='$id'";

    $query_run =  mysqli_query($con, $sql);

    if ($query_run) {
        echo '<script> alert("Daten Update erfolgreich!") </script>';
    } else {
        echo '<script> alert("Daten Update NICHT erfolgreich!") </script>';
    }

    //UPDATE `GregorGold` SET `Gold20` = '999' WHERE `GregorGold`.`ID` = 20;    ID='$_GET[id]'
}

?>