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
        var teil2 = teil1 + teil1 * 1.05;
        var teil3 = teil1 + teil2 + teil2 * 1.05;
        var teil4 = teil1 + teil2 +teil3* 1.05;
        var teil5 = teil4 + ausbauNahrung.valueAsNumber * 1.05;
        var teil6 = teil5 + ausbauNahrung.valueAsNumber * 1.05;



        if (stufenUnterschied == 1) {
            summe2 = teil1;
        }
        if (stufenUnterschied == 2) {
            summe2 = teil2;
        }
        if (stufenUnterschied == 3) {
            summe2 = teil3;
        }
        if (stufenUnterschied == 4) {
            summe2 = teil4;
        }
        if (stufenUnterschied == 5) {
            summe2 = teil5;
        }
        if (stufenUnterschied == 6) {
            summe2 = teil6;
        }

        summe2 = summe2.toLocaleString();



        document.getElementById('ausbauStufeErgebnisNahrung').value = summe2;
    }
    document.getElementById("myForm4").addEventListener("input", rechne);

});



summe2 = summe2.toFixed(0);
