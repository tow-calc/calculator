document.addEventListener('DOMContentLoaded', function () {
    function rechne() {
        var forschNahrung = document.getElementById('forschNahrung'),
            forschHolz = document.getElementById('forschHolz'),
            forschSilber = document.getElementById('forschSilber');
        forschBlutm = document.getElementById('forschBlutm');
        var summe = forschNahrung.valueAsNumber / 1000 + forschHolz.valueAsNumber / 160 * 3 + forschSilber.valueAsNumber / 40 * 5 + forschBlutm.valueAsNumber * 120;


        summe = summe.toLocaleString();
        document.getElementById('forschErg').value = summe;


        //      gewinneso = gewinneso.toLocaleString('de-DE');
        //    document.getElementById("gewinneso").value = gewinneso;


    }
    document.getElementById("myForm4").addEventListener("input", rechne);
});
