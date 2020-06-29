document.addEventListener('DOMContentLoaded', function () {
    function rechne() {
        var hsmarken3 = document.getElementById('hsmarken3'),
            hsmarken2 = document.getElementById('hsmarken2'),
            hsmarken1 = document.getElementById('hsmarken1');
        hsmarkensp = document.getElementById('hsmarkensp');
        var summe = hsmarken3.valueAsNumber * 20 + hsmarken2.valueAsNumber * 60 + hsmarken1.valueAsNumber * 150 + hsmarkensp.valueAsNumber * 375;
        var serienerg = hsmarken3.valueAsNumber * 5 + hsmarken2.valueAsNumber * 5 + hsmarken1.valueAsNumber * 5 + hsmarkensp.valueAsNumber * 5;
        var ge1 = "10 h Baubeschleuniger";
        var ge2 = "10 h Forschungsbeschleuniger";
        var ge3 = "20 h Forschungsbeschleunigung";
        var ge4 = "20 h Baubeschleuniger";
        var ge5 = "2 x Sturmangriffs-Marke";
        var ge6 = "20 h Anheuerbeschleuniger";
        var ge7 = "5 x Premium Schiffsbauplan";
        var ge8 = "20 h Munitionsproduktionsbeschleuniger";
        var ge9 = "30 x Taktiker Geschenkbox (Alles) ";
        var ge10 = "30 h Baubeschleuniger";
        var ge11 = "500 x Seelen des Schmieds";
        var ge12 = "30 h Anheuerbeschleuniger";
        var ge13 = "100 x Wertvolle Schatztruhe";
        var ge14 = "30 h Munitionsproduktionsbeschleuniger ";
        var ge15 = "10 x Premium Schiffsbauplan";
        var ge16 = "30 h Forschungsbeschleuniger";
        var ge17 = "5 Mio Kapitän-EP";
        var ge18 = "500 x Fangvorrichtungen";
        var ge19 = "100 x Blutige Münze";
        var ge20 = "40 h Anheuerbeschleuniger";
        var ge21 = "40 h Munitionsproduktionsbeschleuniger";
        var ge22 = "40 h Heilungsbeschleuniger";
        var ge23 = "20 x 100 Ausdauer";
        var ge24 = "40 h Baubeschleuniger ";
        var ge25 = "40 h Hohe Beschleunigung";
        var ge26 = "60 h Anheuerbeschleunigung";
        var ge27 = "60 h Munitionsproduktionsbeschleuniger ";
        var ge28 = "60 h Heilungsbeschleuniger ";
        var ge29 = "7 Mio Kapitäns-EP";
        var ge30 = "200 x Blutige Münze ";
        var ge31 = "100 x Premium Schiffsbauplan";
        var ge32 = "100 h Anheuerbeschleuniger";
        var ge33 = "100 h Munitionsproduktionsbeschleuniger";
        var ge34 = "200 x Essenzen des Meeres";
        var ge35 = "100 h Baubeschleuniger";
        var ge36 = "100 h Forschungsbeschleuniger";
        var ge37 = "8 Mio Kapitäns-EP";
        var ge38 = "80 h Hohe Beschleunigung";
        var ge39 = "150 x Premium Schiffsbauplan";



        summe = summe.toLocaleString('de-DE');
        document.getElementById('betrag').value = summe;
        serienerg = serienerg.toLocaleString();
        document.getElementById("serien").value = serienerg;

        if (summe < 300) {
            gewinnesu = "nichts";
        }
        if (summe >= 300) {
            gewinnesu = ge1;
        }
        if (summe >= 600) {
            gewinnesu = ge1 + "\n" + ge2;
        }
        if (summe >= 900) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3;
        }
        if (summe >= 1500) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4;
        }
        if (summe >= 3000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5;
        }
        if (summe >= 4500) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6;
        }
        if (summe >= 6000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7;
        }
        if (summe >= 7500) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8;
        }
        if (summe >= 9000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9;
        }
        if (summe >= 10500) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10;
        }
        if (summe >= 12000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11;
        }
        if (summe >= 13500) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12;
        }
        if (summe >= 15000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13;
        }
        if (summe >= 16500) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14;
        }
        if (summe >= 18000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15;

        }
        if (summe >= 19500) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16;

        }
        if (summe >= 21000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17;
        }
        if (summe >= 22500) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18;
        }
        if (summe >= 24000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19;
        }
        if (summe >= 25500) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20;
        }
        if (summe >= 27000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21;
        }
        if (summe >= 28500) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22;
        }
        if (summe >= 30000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23;
        }
        if (summe >= 33000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24;
        }
        if (summe >= 36000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25;
        }
        if (summe >= 39000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25 + "\n" + ge26;
        }
        if (summe >= 42000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27;
        }
        if (summe >= 45000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28;
        }
        if (summe >= 48000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29;
        }
        if (summe >= 54000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30;
        }
        if (summe >= 60000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31;
        }
        if (summe >= 66000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32;
        }
        if (summe >= 72000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33;
        }
        if (summe >= 78000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34;
        }
        if (summe >= 84000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34 + "\n" + ge35;
        }
        if (summe >= 90000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34 + "\n" + ge35 + "\n" + ge36;
        }
        if (summe >= 96000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34 + "\n" + ge35 + "\n" + ge36 + "\n" + ge37;
        }
        if (summe >= 108000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34 + "\n" + ge35 + "\n" + ge36 + "\n" + ge37 + "\n" + ge38;
        }
        if (summe >= 108000) {
            gewinnesu = ge1 + "\n" + ge2 + "\n" + ge3 + "\n" + ge4 + "\n" + ge5 + "\n" + ge6
                + "\n" + ge7 + "\n" + ge8 + "\n" + ge9 + "\n" + ge10 + "\n" + ge11 + "\n" + ge12 + "\n" + ge13
                + "\n" + ge14 + "\n" + ge15 + "\n" + ge16 + "\n" + ge17 + "\n" + ge18 + "\n" + ge19 + "\n" + ge20 + "\n" + ge21 + "\n" + ge22 + "\n" + ge23 + "\n" + ge24 + "\n" + ge25
                + "\n" + ge26 + "\n" + ge27 + "\n" + ge28 + "\n" + ge29 + "\n" + ge30 + "\n" + ge31 + "\n" + ge32 + "\n" + ge33 + "\n" + ge34 + "\n" + ge35 + "\n" + ge36 + "\n" + ge37 + "\n" + ge38 + "\n" + ge39;
        }






        document.getElementById("gewinne").value = gewinnesu;

    }
    document.getElementById("myForm").addEventListener("input", rechne);

});