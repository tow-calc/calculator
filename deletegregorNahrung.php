<?php
            $con = mysqli_connect('rdbms.strato.de', 'U4173818', 'Iwoiweis18+', 'DB4173818');

            $sql = "DELETE FROM GregorNahrung WHERE ID='$_GET[id]'";

            if(mysqli_query($con,$sql))
                header("refresh:1; url=gregor.php");
                else 
                echo "Nicht gelöscht";
                ?>
