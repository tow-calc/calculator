document.addEventListener('DOMContentLoaded', function () {
    function rechne() {
        var kbmarken3 = document.getElementById('kbmarken3'),
            kbmarken2 = document.getElementById('kbmarken2'),
            kbmarken1 = document.getElementById('kbmarken1');
        kbmarkensp = document.getElementById('kbmarkensp');
        var summe = kbmarken3.valueAsNumber * 50 + kbmarken2.valueAsNumber * 150 + kbmarken1.valueAsNumber * 375 + kbmarkensp.valueAsNumber * 750;

        var ge1 = "10 h Baubeschleuniger";
        var ge2 = "10 h Forschungsbeschleunigung";
        var ge3 = "20 h Forschungsbeschleunigung";
        var ge4 = "20 h Baubeschleuniger";
        var ge5 = "2 x Sturmangriffs-Marke";
        var ge6 = "20 h Anheuerbeschleuniger";
        var ge7 = "10 x Premium Schiffsbauplan";
        var ge8 = "20 h Munitionsproduktionsbeschleuniger";
        var ge9 = "50 x Taktiker Geschenkbox (Alles) ";
        var ge10 = "30 h Baubeschleuniger";
        var ge11 = "1000 x Seelen des Schmieds";
        var ge12 = "30 h Anheuerbeschleuniger";
        var ge13 = "100 x Wertvolle Schatztruhe";
        var ge14 = "30 h Munitionsproduktionsbeschleuniger ";
        var ge15 = "20 x Premium Schiffsbauplan";
        var ge16 = "30 h Forschungsbeschleuniger";
        var ge17 = "5 Mio Kapitän-EP";
        var ge18 = "500 x Fangvorrichtungen";
        var ge19 = "200 x Blutige Münze";
        var ge20 = "40 h Anheuerbeschleuniger";
        var ge21 = "40 h Munitionsproduktionsbeschleuniger";
        var ge22 = "40x Heilungsbeschleuniger";
        var ge23 = "20 x 100 Ausdauer";
        var ge24 = "40 h Baubeschleunigung";
        var ge25 = "40 h Hohe Beschleunigung";
        var ge26 = "60 h Anheuerbeschleuniger ";
        var ge27 = "60 h Munitionsproduktionsbeschleuniger ";
        var ge28 = "60 h Heilungsbeschleuniger ";
        var ge29 = "7 Mio Kapitäns-EP";
        var ge30 = "300 x Blutige Münze ";
        var ge31 = "150 x Premium Schiffsbauplan";
        var ge32 = "100 h Anheuerbeschleuniger";
        var ge33 = "100 h Munitionsproduktionsbeschleuniger";
        var ge34 = "500 x Essenzen des Meeres";
        var ge35 = "100 h Baubeschleuniger";
        var ge36 = "100 h Forschungsbeschleuniger";
        var ge37 = "8 Mio Kapitäns-EP";
        var ge38 = "80 h Hohe Beschleunigung";
        var ge39 = "200 x Premium Schiffsbauplan";


        summe = summe.toLocaleString();
        document.getElementById('betrag2').value = summe;

        if (summe < 750) {
            gewinneso = "nichts";
        }
        if (summe >= 750) {
            gewinneso = ge1;
        }
        if (summe >= 1500) {
            gewinneso = ge1 + "\n" + ge2;
        }
        if (summe >= 2250) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3;
        }
        if (summe >= 3750) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4;
        }
        if (summe >= 7500) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5;
        }
        if (summe >= 11250) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6;
        }
        if (summe >= 15000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7;
        }
        if (summe >= 18750) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8;
        }
        if (summe >= 22500) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9;
        }
        if (summe >= 26250) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10;
        }
        if (summe >= 30000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11;
        }
        if (summe >= 33750) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12;
        }
        if (summe >= 37500) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13;
        }
        if (summe >= 41250) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14;
        }
        if (summe >= 45000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15;

        }
        if (summe >= 48750) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16;

        }
        if (summe >= 52500) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17;
        }
        if (summe >= 56250) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18;
        }
        if (summe >= 60000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19;
        }
        if (summe >= 63750) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20;
        }
        if (summe >= 67500) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21;
        }
        if (summe >= 71250) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22;
        }
        if (summe >= 75000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23;
        }
        if (summe >= 82500) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24;
        }
        if (summe >= 90000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25;
        }
        if (summe >= 97500) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25 + "\n" + ge26;
        }
        if (summe >= 105000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27;
        }
        if (summe >= 112500) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28;
        }
        if (summe >= 120000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29;
        }
        if (summe >= 135000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30;
        }
        if (summe >= 150000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31;
        }
        if (summe >= 165000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32;
        }
        if (summe >= 180000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33;
        }
        if (summe >= 195000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34;
        }
        if (summe >= 210000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34 + "\n" + ge35;
        }
        if (summe >= 225000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34 + "\n" + ge35 + "\n" + ge36;
        }
        if (summe >= 240000) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34 + "\n" + ge35 + "\n" + ge36 + "\n" + ge37;
        }
        if (summe >= 280500) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34 + "\n" + ge35 + "\n" + ge36 + "\n" + ge37 + "\n" + ge38;
        }
        if (summe >= 325500) {
            gewinneso = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34 + "\n" + ge35 + "\n" + ge36 + "\n" + ge37 + "\n" + ge38 + "\n" + ge39;
        }

        gewinneso = gewinneso.toLocaleString('de-DE');
        document.getElementById("gewinneso").value = gewinneso;


    }
    document.getElementById("myForm2").addEventListener("input", rechne);
});
