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
            <input name="id" type="text" placeholder="Gib die ID ein" />
            <input type="submit" name="search" value="search Data">
        </form>

        <?php
        $con = mysqli_connect('rdbms.strato.de', 'U4173818', 'Iwoiweis18+', 'DB4173818');

        if (isset($_POST['search'])) {

            $id = $_POST['id'];

            $query = "SELECT * FROM `GregorGold` WHERE `ID` ='$id'";

            $query_run = mysqli_query($con, $query);

            while ($row = mysqli_fetch_array($query_run)) {
        ?>

                <form action="" method="POST">
                    <input type="hidden" name="id"  value="<?php echo $row['ID']  ?>" />
                    <label for="gold20">20 Gold</label>
                    <input name="gold20" type="text" value="<?php echo $row['Gold20']  ?>" />
                    <label for="gold100">100 Gold</label>
                    <input name="gold100" type="text" value="<?php echo $row['Gold100']  ?>" />
                    <label for="gold200">200 Gold</label>
                    <input name="gold200" type="text" value="<?php echo $row['Gold200']  ?>" />
                    <label for="gold500">500 Gold</label>
                    <input name="gold500" type="text" value="<?php echo $row['Gold500']  ?>" />
                    <label for="gold1000">1000 Gold</label>
                    <input name="gold1000" type="text" value="<?php echo $row['Gold1000']  ?>" />
                    <br>
                    <br>
                    <label for="gold2000">2000 Gold</label>
                    <input name="gold2000" type="text" value="<?php echo $row['Gold2000']  ?>" />
                    <label for="gold3000">3000 Gold</label>
                    <input name="gold3000" type="text" value="<?php echo $row['Gold3000']  ?>" />
                    <label for="gold3500">3500 Gold</label>
                    <input name="gold3500" type="text" value="<?php echo $row['Gold3500']  ?>" />
                    <label for="gold4000">4000 Gold</label>
                    <input name="gold4000" type="text" value="<?php echo $row['Gold4000']  ?>" />
                    <label for="gold5000">5000 Gold</label>
                    <input name="gold5000" type="text" value="<?php echo $row['Gold5000']  ?>" />
                    <br>
                    <br>
                    <label for="gold10000">10000 Gold</label>
                    <input name="gold10000" type="text" value="<?php echo $row['Gold10000']  ?>" />
                    <br>
                    <br>
                    <input type="submit" name="update" value="Daten updaten">
                </form>
        <?php
            }
        }
        ?>
</body>

</html>

<?php
// $con = mysqli_connect('rdbms.strato.de', 'U4173818', 'Iwoiweis18+', 'DB4173818');

if (isset($_POST['update'])) {

    $id = $_POST['id'];
    $gold20 = $_POST['gold20'];
    $gold100 = $_POST['gold100'];
    $gold200 = $_POST['gold200'];
    $gold500 = $_POST['gold500'];
    $gold1000 = $_POST['gold1000'];
    $gold2000 = $_POST['gold2000'];
    $gold3000 = $_POST['gold3000'];
    $gold3500 = $_POST['gold3500'];
    $gold4000 = $_POST['gold4000'];
    $gold5000 = $_POST['gold5000'];
    $gold10000 = $_POST['gold10000'];
    $goldErgebnis = $gold20 * 20 + $gold100 * 100 + $gold200 * 200 + $gold500 * 500 + $gold1000 * 1000 + $gold2000 * 2000 + $gold3000 * 3000 + $gold3500 * 3500 + $gold4000 * 4000 + $gold5000 * 5000 + $gold10000 * 10000;


   


   $sql = "UPDATE `GregorGold` SET `Gold20` = '".$gold20."', `Gold100` = '".$gold100."', `Gold200` = '".$gold200."', `Gold500` = '".$gold500."', `Gold1000` = '".$gold1000."', 
   `Gold2000` = '".$gold2000."', `Gold3000` = '".$gold3000."', `Gold3500` = '".$gold3500."', `Gold4000` = '".$gold4000."', `Gold5000` = '".$gold5000."', `Gold10000` = '".$gold10000."',
   `Ergebnis` = '".$goldErgebnis."' WHERE `ID` ='$id'";
    $query_run =  mysqli_query($con, $sql);

    if ($query_run) {
        echo '<script> alert("Daten Update erfolgreich!") </script>';
    } 
    else {
        echo '<script> alert("Daten Update NICHT erfolgreich!") </script>';
    }

    //UPDATE `GregorGold` SET `Gold20` = '999' WHERE `GregorGold`.`ID` = 20;    ID='$_GET[id]'
}

?>