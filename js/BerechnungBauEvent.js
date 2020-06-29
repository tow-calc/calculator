document.addEventListener('DOMContentLoaded', function () {
    function rechne() {
        var bnahrung = document.getElementById('bnahrung'),
            bholz = document.getElementById('bholz'),
            bsilber = document.getElementById('bsilber');
        bspnahrung = document.getElementById('bspnahrung');
        bspholz = document.getElementById('bspholz');
        bsilber = document.getElementById('bsilber');
        var summe = bnahrung.valueAsNumber / 1000 + bholz.valueAsNumber * 3 / 160 + bsilber.valueAsNumber * 5 / 40 + bspnahrung.valueAsNumber * 1500 + bspholz.valueAsNumber * 4500 + bspsilber.valueAsNumber * 7500;
        summe = summe.toLocaleString(5);


        document.getElementById('betrag1').value = summe;
    }
    document.getElementById("myForm1").addEventListener("input", rechne);

});



summe = summe.toFixed(0);
