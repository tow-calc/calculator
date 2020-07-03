document.addEventListener('DOMContentLoaded', function () {
    function rechne() {
        var ausbauStufeAktuell = document.getElementById('ausbauStufeAktuell');
        ausbauStufeMax = document.getElementById('ausbauStufeMax');
        ausbauNahrung = document.getElementById('ausbauNahrung');
        ausbauHolz = document.getElementById('ausbauHolz');
        ausbauSilber = document.getElementById('ausbauSilber');
        ausbauSpNahrung = document.getElementById('ausbauSpNahrung');
        ausbauSpHolz = document.getElementById('ausbauSpHolz');
        ausbauSpSilber = document.getElementById('ausbauSpSilber');

        var summe = ausbauNahrung.valueAsNumber + ausbauHolz.valueAsNumber + ausbauSilber.valueAsNumber + ausbauSpNahrung.valueAsNumber + ausbauSpHolz.valueAsNumber + ausbauSpSilber.valueAsNumber;
        summe = summe.toLocaleString();

        var stufenUnterschied = ausbauStufeMax.valueAsNumber - ausbauStufeAktuell.valueAsNumber;

        var teil1 = ausbauNahrung.valueAsNumber;
        var teil1a = ausbauNahrung.valueAsNumber*1.05;
        var teil2 = teil1a * 1.05 + teil1a + teil1;
        var teil3 = teil1 + teil2 + teil2 * 1.05;
        var teil4 = teil1 + teil2 +teil3* 1.05;
        var teil5 = teil4 + ausbauNahrung.valueAsNumber * 1.05;
        var teil6 = teil5 + ausbauNahrung.valueAsNumber * 1.05;


        if (stufenUnterschied == 0) {
            summe2 = teil1;
        }
        else if (stufenUnterschied == 1) {
            summe2 = teil1*1.05 + teil1;
        }
        else if (stufenUnterschied == 2) {
            summe2 = teil2;
        }
        else if (stufenUnterschied == 3) {
            summe2 = teil3;
        }
        else if (stufenUnterschied == 4) {
            summe2 = teil4;
        }
        else if (stufenUnterschied == 5) {
            summe2 = teil5;
        }
        else if (stufenUnterschied == 6) {
            summe2 = teil6;
        }
else {"Da ging was schief!"}


        summe2 = summe2.toLocaleString();



        document.getElementById('ausbauStufeErgebnisNahrung').value = summe2;
    }
    document.getElementById("myForm4").addEventListener("input", rechne);

});



summe2 = summe2.toFixed(0);
