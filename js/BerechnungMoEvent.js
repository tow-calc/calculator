document.addEventListener('DOMContentLoaded', function () {
    function rechne() {
        var moStufe3 = document.getElementById('moStufe3');
        var summe = moStufe3.valueAsNumber * 1;
        var ge1 = "Bitte Level 30-36 eintragen!";
        var ge29 = 1106000 / 144;
        var ge2 = 1106000 / 158;
        var ge3 = 1106000 / 190;
        var ge4 = 1106000 / 228;
        var ge5 = 1106000 / 274;
        var ge6 = 1106000 / 329;
        var ge7 = 1106000 / 395;
        var ge8 = 1106000 / 474;
        var ge9 = "Bitte Level 30-36 eintragen!";

        summe = summe.toLocaleString();
        ge2 = ge2.toFixed(0);
        ge3 = ge3.toFixed(0);
        ge4 = ge4.toFixed(0);
        ge5 = ge5.toFixed(0);
        ge6 = ge6.toFixed(0);
        ge7 = ge7.toFixed(0);
        ge8 = ge8.toFixed(0);
        ge29 = ge29.toFixed(0);

        document.getElementById('betragmo').value = summe;

        if (summe <= 28) {
            gewinnemo = ge1;
        }
        if (summe = 29) {
            gewinnemo = ge29;
        }
        if (summe == 30) {
            gewinnemo = ge2;
        }
        if (summe == 31) {
            gewinnemo = ge3;
        }
        if (summe == 32) {
            gewinnemo = ge4;
        }
        if (summe == 33) {
            gewinnemo = ge5;
        }
        if (summe == 34) {
            gewinnemo = ge6;
        }
        if (summe == 35) {
            gewinnemo = ge7;
        }
        if (summe == 36) {
            gewinnemo = ge8;
        }
        if (summe >= 37) {
            gewinnemo = ge9;
        }

        document.getElementById("gewinne3").value = gewinnemo;


        ge10 = gewinnemo / 5;
        ge10 = ge10.toFixed(0);
        ge11 = gewinnemo / 10;
        ge11 = ge11.toFixed(0);
        ge12 = gewinnemo *5 / 50;
        ge12 = ge12.toFixed(0);
        ge13 = gewinnemo *5 / 100;
        ge13 = ge13.toFixed(0);




        document.getElementById("gewinne31").value = ge10;
        document.getElementById("gewinne32").value = ge11;
        document.getElementById("gewinne33").value = ge12;
        document.getElementById("gewinne34").value = ge13;


    }
    document.getElementById("myForm3").addEventListener("input", rechne);

});