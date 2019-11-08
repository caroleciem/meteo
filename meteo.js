
document.getElementById('dernMesure').addEventListener('click', function (event) {
    var titreDern = "Dernière mesure du";
    // appel de l'API

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', ` https://distorted-louse-3971.dataplicity.io/last-measure`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)
            var temperature = jsonResult.temperature;
            var measureDate = jsonResult.measureDate;
            var pressure = jsonResult.pressure;
            var humidity = jsonResult.humidity;
            //récupération de la date du fichier
            var jour = measureDate.substring(8, 10);
            var mois = measureDate.substring(5, 7);
            var annee = measureDate.substring(0, 4);
            const zoneAff = document.querySelector("section");
            while (zoneAff.children.length > 0) {
                zoneAff.removeChild(zoneAff.firstChild);
            }
            //création du titre dernière mesure avec le titre + date récupérée du fichier reformattée
            titreDern = `${titreDern} ${jour}/${mois}/${annee}`;
            //création du block en envoyant le titre, la temperature, la pression et l'humidité 
            zoneAff.appendChild(affichageBlock(titreDern, temperature, pressure, humidity));
        } else {
            console.log('Erreur ...')
        }
    }

    // Send request
    request.send();
    //fin de l'appel de l'API

})
document.getElementById('topMesure').addEventListener('click', function (event) {
    const zoneAff = document.querySelector("section");
    while (zoneAff.children.length > 0) {
        zoneAff.removeChild(zoneAff.firstChild);
    }
    var titreTopHum = "Top humidité le";
    var titreTopTemp = "Top température le";
    var titreTopPression = "Top pression le";

    // je créé l'env globale de mes 3 Top mesures
    const envTop = document.createElement('div');
    // j'affecte la classe top pour les afficher en row et pas colonnes
    envTop.classList.add('top');
    // appel de l'API

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', ` https://distorted-louse-3971.dataplicity.io/top-measure/humidity`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)
            var temperature = jsonResult.temperature;
            var measureDate = jsonResult.measureDate;
            var pressure = jsonResult.pressure;
            var humidity = jsonResult.humidity;
            //formatage de la date pour l'afficher au format jour/mois/annee
            var jour = measureDate.substring(8, 10);
            var mois = measureDate.substring(5, 7);
            var annee = measureDate.substring(0, 4);

            //création du titre top humidity avec le titre + la date
            titreTopHum = `${titreTopHum} ${jour}/${mois}/${annee}`;
            envTop.appendChild(affichageBlock(titreTopHum, temperature, pressure, humidity));


        } else {
            console.log('Erreur ...')
        }
    }

    // Send request
    request.send();
    //fin de l'appel de l'API
    // gestion pour le Top température
    const request2 = new XMLHttpRequest();
    // Open a new connection, using the GET request on the URL endpoint
    request2.open('GET', ` https://distorted-louse-3971.dataplicity.io/top-measure/temperature`, true);

    request2.onload = function () {
        if (request2.status >= 200 && request2.status < 400) {
            const jsonResult = JSON.parse(this.response)
            var temperature = jsonResult.temperature;
            var measureDate = jsonResult.measureDate;
            var pressure = jsonResult.pressure;
            var humidity = jsonResult.humidity;
            //formatage de la date pour l'afficher au format jour/mois/annee
            var jour = measureDate.substring(8, 10);
            var mois = measureDate.substring(5, 7);
            var annee = measureDate.substring(0, 4);
            //création du titre top temperature avec le titre + la date
            titreTopTemp = `${titreTopTemp} ${jour}/${mois}/${annee}`;

            envTop.appendChild(affichageBlock(titreTopTemp, temperature, pressure, humidity));


        } else {
            console.log('Erreur ...')
        }
    }

    // Send request
    request2.send();
    //fin de l'appel de l'API
    // gestion pour le Top température
    const request3 = new XMLHttpRequest();
    // Open a new connection, using the GET request on the URL endpoint
    request3.open('GET', ` https://distorted-louse-3971.dataplicity.io/top-measure/pressure`, true);

    request3.onload = function () {
        if (request3.status >= 200 && request3.status < 400) {
            const jsonResult = JSON.parse(this.response)
            var temperature = jsonResult.temperature;
            var measureDate = jsonResult.measureDate;
            var pressure = jsonResult.pressure;
            var humidity = jsonResult.humidity;
            //formatage de la date pour l'afficher au format jour/mois/annee
            var jour = measureDate.substring(8, 10);
            var mois = measureDate.substring(5, 7);
            var annee = measureDate.substring(0, 4);
            //création du titre top Pression avec le titre + la date
            titreTopPression = `${titreTopPression} ${jour}/${mois}/${annee}`;

            envTop.appendChild(affichageBlock(titreTopPression, temperature, pressure, humidity));


        } else {
            console.log('Erreur ...')
        }
    }

    // Send request
    request3.send();
    //fin de l'appel de l'API



    zoneAff.appendChild(envTop);

})
document.getElementById('tableauMesure').addEventListener('click', function (event) {
    const request = new XMLHttpRequest();
    var laDate = new Date();
    var dateComplete = laDate.toISOString()
    var jourComp = dateComplete.substring(8, 10);
    var jourComph = jourComp - 1;
    if (jourComph < 10) {
        jourComph = `0${jourComph}`
    }
    var moisComp = dateComplete.substring(5, 7);
    var anneeComp = dateComplete.substring(0, 4);
    //date d'hier
    var dateComph = `${anneeComp}-${moisComp}-${jourComph}`;
    //date aujourd'hui
    var dateComp = `${anneeComp}-${moisComp}-${jourComp}`;
    var url = `https://distorted-louse-3971.dataplicity.io/measure/date?startDate=${dateComph}&endDate=${dateComp}`

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', ` ${url}`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)
            const zoneAff = document.querySelector("section");
            //nettoyage des affichages précédents
            while (zoneAff.children.length > 0) {
                zoneAff.removeChild(zoneAff.firstChild);
            }
            //création de la table, et l'entete
            const nouvTable = document.createElement('table');
            const nouvEnt = document.createElement('thead');
            const nouveauTrEnt = document.createElement('tr');
            const nouveauThDate = document.createElement('th');
            nouveauThDate.innerText = "Date";
            const nouveauThTemp = document.createElement('th');
            nouveauThTemp.innerText = "Température (°C)";
            const nouveauThHum = document.createElement('th');
            nouveauThHum.innerText = "Humidité (%hum)";
            const nouveauThPress = document.createElement('th');
            nouveauThPress.innerText = "Pression (hPa)";



            nouvTable.appendChild(nouvEnt);
            nouvTable.appendChild(nouveauTrEnt);
            nouvTable.appendChild(nouveauThDate);
            nouvTable.appendChild(nouveauThTemp);
            nouvTable.appendChild(nouveauThHum);
            nouvTable.appendChild(nouveauThPress);

            //remplissage des valeurs à partir du fichier

            for (i = 0; i < jsonResult.length; i++) {
                const nouveauTr = document.createElement('tr');
                const nouveauTdDate = document.createElement('td');
                const nouveauTdTemp = document.createElement('td');
                const nouveauTdHum = document.createElement('td');
                const nouveauTdPress = document.createElement('td');

                var temperature = jsonResult[i].temperature;
                var measureDate = jsonResult[i].measureDate;
                var pressure = jsonResult[i].pressure;
                var humidity = jsonResult[i].humidity;
                var jour = measureDate.substring(8, 10);
                var mois = measureDate.substring(5, 7);
                var annee = measureDate.substring(0, 4);
                const date = `${jour}/${mois}/${annee}`;
                nouveauTdDate.innerText = date;
                nouveauTdTemp.innerText = temperature;
                nouveauTdHum.innerText = humidity;
                nouveauTdPress.innerText = pressure;
                nouvTable.appendChild(nouveauTr);
                nouvTable.appendChild(nouveauTdDate);
                nouvTable.appendChild(nouveauTdTemp);
                nouvTable.appendChild(nouveauTdHum);
                nouvTable.appendChild(nouveauTdPress);
            }
            zoneAff.appendChild(nouvTable);

        } else {
            console.log('Erreur ...')
        }
    }

    // Send request
    request.send();
    //fin de l'appel de l'API


})
document.getElementById('graphMesure').addEventListener('click', function (event) {
    //gestion des l'affichage des graphiques
    const request = new XMLHttpRequest();
    var laDate = new Date();
    var dateComplete = laDate.toISOString()
    var jourComp = dateComplete.substring(8, 10);
    var moisComp = dateComplete.substring(5, 7);
    var anneeComp = dateComplete.substring(0, 4);
    //date aujourd'hui
    var dateComp = `${anneeComp}-${moisComp}-${jourComp}`;
    //calcul du jour d'hier
    var jourComph = jourComp - 1;
    if (jourComph < 10) {
        jourComph = `0${jourComph}`
    }
    //date d'hier
    var dateComph = `${anneeComp}-${moisComp}-${jourComph}`;
    //formattage de l'url pour récupérer toutes les valeurs de la drenière journée
    var url = `https://distorted-louse-3971.dataplicity.io/measure/date?startDate=${dateComph}&endDate=${dateComp}`


    // Open a new connection, using the GET request on the URL endpoint

    request.open('GET', ` ${url}`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response)
            const zoneAff = document.querySelector("section");
            while (zoneAff.children.length > 0) {
                zoneAff.removeChild(zoneAff.firstChild);
            }
            const graphe = document.createElement('div');
            graphe.id = "envGraph"
            //création du canvas pour la temperature
            const nvcanvas = document.createElement('canvas');
            nvcanvas.id = "myChart";
            
            graphe.appendChild(nvcanvas);

            //création du canvas pour l'humidité
            const nvcanvas2 = document.createElement('canvas');
            nvcanvas2.id = "myChart2";
            graphe.appendChild(nvcanvas2);

               //création du canvas pour la pression
            const nvcanvas3 = document.createElement('canvas');
            nvcanvas3.id = "myChart3";
            graphe.appendChild(nvcanvas3);

            //ajout dans ma zone d'aff
            zoneAff.appendChild(graphe);

            //déclaration des tableaux de données pour construire les graphes
            var tabTemp = [];
            var tabDate = [];
            var tabHum = [];
            var tabPress = [];

            //remplissage des tableaux à partir du JSON

            for (i = 0; i < jsonResult.length || i < 17; i++) {
                tabTemp.push(jsonResult[i].temperature);
                tabHum.push(jsonResult[i].humidity);
                tabPress.push(jsonResult[i].pressure);
                var measureDate = jsonResult[i].measureDate;
                var jour = measureDate.substring(8, 10);
                var mois = measureDate.substring(5, 7);
                var annee = measureDate.substring(0, 4);
                const date = `${jour}/${mois}/${annee}`;
                tabDate.push(date);

            }
            //graphe température
            var contexte = document.getElementById("myChart").getContext('2d');
            var myChart = new Chart(contexte, {
                type: 'line',
                data: {
                    labels: tabDate,
                    datasets: [{
                        label: 'Evolution de la température', // Nom
                        data: tabTemp,
                        fill: false,
                        borderColor: 'yellow', // Add custom color border (Line)
                        backgroundColor: 'aquamarine', // Add custom color background (Points and Fill)
                        borderWidth: 1 // Specify bar border width
                    }]
                },
                options: {
                    responsive: true, // Instruct chart js to respond nicely.
                    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                }
            })
            //graphe humidité
            var contexte2 = document.getElementById("myChart2").getContext('2d');
            var myChart2 = new Chart(contexte2, {
                type: 'line',
                data: {
                    labels: tabDate,
                    datasets: [{
                        label: 'Evolution de l\'humidité relative', // Nom
                        data: tabHum,
                        fill: false,
                        borderColor: '#2196f3', // Add custom color border (Line)
                        backgroundColor: 'cadetblue', // Add custom color background (Points and Fill)
                        borderWidth: 1 // Specify bar border width
                    }]
                },
                options: {
                    responsive: true, // Instruct chart js to respond nicely.
                    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                }
            })
            //graphe pression
            var contexte3 = document.getElementById("myChart3").getContext('2d');
            var myChart3 = new Chart(contexte3, {
                type: 'line',
                data: {
                    labels: tabDate,
                    datasets: [{
                        label: 'Evolution de la pression atmosphérique', // Nom
                        data: tabPress,
                        fill: false,
                        borderColor: 'red', // Add custom color border (Line)
                        backgroundColor: 'cadetlue', // Add custom color background (Points and Fill)
                        borderWidth: 1 // Specify bar border width
                    }]
                },
                options: {
                    responsive: true, // Instruct chart js to respond nicely.
                    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                }
            })
        } else {
            console.log('Erreur ...')
        }
    }

    // Send request
    request.send();
    //fin de l'appel de l'API


})

//fonction permettant de formatter le block de titre + l'affichage des trois libellés + leur valeur
function affichageBlock(titre, temperature, pressure, humidity) {


    const nouveauContenu = document.createElement('div');
    const nouveauTitre = document.createElement('h2');
    nouveauTitre.textContent = titre;
    const nouveauContenuTemp = document.createElement('div');
    nouveauContenuTemp.textContent = `Température : ${temperature}°C`;
    const nouveauContenuHum = document.createElement('div');
    nouveauContenuHum.textContent = `Humidité : ${humidity} %hum`;
    const nouveauContenuPression = document.createElement('div');
    nouveauContenuPression.textContent = `Pression : ${pressure}hPa`;

    nouveauContenu.appendChild(nouveauTitre);
    nouveauContenu.appendChild(nouveauContenuTemp);
    nouveauContenu.appendChild(nouveauContenuHum);
    nouveauContenu.appendChild(nouveauContenuPression);

    return nouveauContenu;

}

