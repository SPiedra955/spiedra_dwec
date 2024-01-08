var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
drawClock(ctx, radius);

function drawClock() {
    ctx.font = radius * 0.25 + "px 'Butterfly Kids', cursive";
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}


function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius) {
    var hour = document.querySelector('#hours').value;
    var minute = document.querySelector('#minutes').value;
    var second = document.querySelector('#seconds').value;
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
        (minute * Math.PI / (6 * 60)) +
        (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // second
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}


function clockDate(){

    let sliderHour = document.getElementById("rangeHour");
    let outputHour = document.getElementById("hours");
    outputHour.value = sliderHour.value;

    sliderHour.oninput = function() {
        outputHour.value = this.value;
        //console.log(outputHour);
    }

    let sliderMin = document.getElementById("rangeMin");
    let outputMin = document.getElementById("minutes");
    outputMin.value = sliderMin.value;

    sliderMin.oninput = function(){
        outputMin.value = this.value;
        //console.log(outputMin);

    }

    let sliderSec = document.getElementById("rangeSec");
    let outputSec = document.getElementById("seconds")
    outputSec.value = sliderSec.value;

    sliderSec.oninput = function(){
        outputSec.value = this.value;
        //console.log(outputSec);

    }

    document.addEventListener('click', function(){
    drawClock();
    })
}

clockDate();


(function (){
    let allElements = document.querySelector("#totes");
    let list = document.querySelector("#ul");

    allElements.addEventListener("click", function(){
        list.innerHTML = "";
        for(let i = 0; i < timeZones.length; i++){
            let country = document.createElement("li");
            country.innerHTML = timeZones[i].replace("/", " -> ").replace("/", " - ");
            list.appendChild(country);
        }
    });
})();

(function (){
    let europe = document.querySelector("#europa");
    let list = document.querySelector("#ul");

    europe.addEventListener("click", function(){
        list.innerHTML = "";
        for(let i = 0; i < timeZones.length; i++){
            if(timeZones[i].startsWith("Europe")){
                let country = document.createElement("li");
                country.innerHTML = timeZones[i].replace("/", "-> ").replace("/", " - ");
                list.appendChild(country);
            }
        }
    });
})();

(function (){
    let pacific = document.querySelector("#pacific");
    let list = document.querySelector("#ul");

    pacific.addEventListener("click", function(){
        list.innerHTML = "";
        for(let i = 0; i < timeZones.length; i++){
            if(timeZones[i].startsWith("Pacific")){
                let country = document.createElement("li");
                country.innerHTML = timeZones[i].replace("/", "-> ").replace("/", " - ");
                list.appendChild(country);
            }
        }
    });
})();

(function (){
    let asia = document.querySelector("#asia");
    let list = document.querySelector("#ul");

    asia.addEventListener("click", function(){
        list.innerHTML = "";
        for(let i = 0; i < timeZones.length; i++){
            if(timeZones[i].startsWith("Asia")){
                let country = document.createElement("li");
                country.innerHTML = timeZones[i].replace("/", "-> ").replace("/", " - ");
                list.appendChild(country);
            }
        }
    });
})();

(function (){
    let america = document.querySelector("#america");
    let list = document.querySelector("#ul");

    america.addEventListener("click", function(){
        list.innerHTML = "";
        for(let i = 0; i < timeZones.length; i++){
            if(timeZones[i].startsWith("America")){
                let country = document.createElement("li");
                country.innerHTML = timeZones[i].replace("/", "-> ").replace("/", " - ");
                list.appendChild(country);
            }
        }
    });
})();

(function (){
    let others = ["Europe", "Asia", "Pacific", "America"];
    let altres = document.querySelector("#altres");
    let list = document.querySelector("#ul");

    altres.addEventListener("click", function(){
        // spread operator, hace una copia independiente de 'timeZones' para no modificar el original
        let zone = [...timeZones];
        // let zone = [].concat(timeZones); // otra forma de crear una copia independiente
        list.innerHTML = "";
        for(let i = 0; i < zone.length; i++){
            for(let j = 0; j < others.length; j++){
                if(zone[i].includes(others[j])){
                    zone.splice(i, 1); // splice(indice, nº elementos a borrar, elementos que sustituir)
                    i--; // Disminuyo el indice por la elimininacion de un elemento en zone
                    break; // Elimino un objeto, salgo del bucle para volver a recorrer el bucle exterior
                }
            }
        }

        for(let i = 0; i < zone.length; i++){
            let country = document.createElement("li");
            country.innerHTML = zone[i].replace("/", " -> ").replace("/", " - ");
            list.appendChild(country);
        }


    });
})();



function displayWatch(){
    let start = document.querySelector("#play");
    let stop = document.querySelector("#stop");
    let interval;


    start.addEventListener("click", function(){
        interval = setInterval(function() {
            let currentDate = new Date();
            let hour = currentDate.getHours();
            let minute = currentDate.getMinutes();
            let seconds = currentDate.getSeconds();

            let currentHour = document.getElementById("hours");
            currentHour.value = hour;
        
            let currentMin = document.getElementById("minutes");
            currentMin.value = minute;
        
            let currentSec = document.getElementById("seconds");
            currentSec.value = seconds;
            drawClock();
        }, 1000); 
    });

    stop.addEventListener("click", function(){
        clearInterval(interval);
    });

}

displayWatch();



let cityData; // Variable para almacenar los datos de las ciudades

async function cityList() {
    let response = await fetch("http://34.90.153.139/examen1/citylist.php?");
    cityData = await response.json();
}

async function cityNames() {
    let ciutat = document.querySelector('#ciutats');
    ciutat.innerHTML = "";

    for (let i = 0; i < cityData.cities.length; i++) {
        let button = document.createElement('button');
        button.innerHTML = cityData.cities[i].name;
        button.id = cityData.cities[i].name.replace(" ", "");
        ciutat.appendChild(button);
    }
}

async function cities() {
    await cityList();
    await cityNames();

    const us = document.querySelector("#NewYork");
    const uk = document.querySelector("#Londres");
    const db = document.querySelector("#Dubai");
    const bg = document.querySelector("#Bangkok");
    const tk = document.querySelector("#Tokio");
    let interval;

    us.addEventListener("click", function() {
        clearInterval(interval); // Limpia el intervalo anterior si existe
        interval = setInterval(async function() {
            const hoursResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[0].id + "&tipo=HOUR", // Supongamos que el primer elemento es Nueva York
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const minutesResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[0].id + "&tipo=MINUTE", // Supongamos que el primer elemento es Nueva York
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const secondsResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[0].id + "&tipo=SECOND", // Supongamos que el primer elemento es Nueva York
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const hoursText = await hoursResponse.text();
            const minutesText = await minutesResponse.text();
            const secondsText = await secondsResponse.text();

            let currentHour = document.getElementById("hours");
            let currentMin = document.getElementById("minutes");
            let currentSec = document.getElementById("seconds");

            currentHour.value = hoursText;
            currentMin.value = minutesText;
            currentSec.value = secondsText;
            drawClock();
            console.log("New York" + "-> " + hoursText + ":" + minutesText + ":" + secondsText);
        }, 1000);
    });


    uk.addEventListener("click", function() {
        clearInterval(interval); // Limpia el intervalo anterior si existe
        interval = setInterval(async function() {
            const hoursResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[1].id + "&tipo=HOUR", // Supongamos que el primer elemento es Nueva York
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const minutesResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[1].id + "&tipo=MINUTE", // Supongamos que el primer elemento es Nueva York
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const secondsResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[1].id + "&tipo=SECOND", // Supongamos que el primer elemento es Nueva York
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const hoursText = await hoursResponse.text();
            const minutesText = await minutesResponse.text();
            const secondsText = await secondsResponse.text();

            let currentHour = document.getElementById("hours");
            let currentMin = document.getElementById("minutes");
            let currentSec = document.getElementById("seconds");

            currentHour.value = hoursText;
            currentMin.value = minutesText;
            currentSec.value = secondsText;
            drawClock();
            console.log("Londres" + "-> " + hoursText + ":" + minutesText + ":" + secondsText);
        }, 1000);
    });

    db.addEventListener("click", function() {
        clearInterval(interval); // Limpia el intervalo anterior si existe
        interval = setInterval(async function() {
            const hoursResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[2].id + "&tipo=HOUR",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const minutesResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[2].id + "&tipo=MINUTE",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const secondsResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[2].id + "&tipo=SECOND",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const hoursText = await hoursResponse.text();
            const minutesText = await minutesResponse.text();
            const secondsText = await secondsResponse.text();

            let currentHour = document.getElementById("hours");
            let currentMin = document.getElementById("minutes");
            let currentSec = document.getElementById("seconds");

            currentHour.value = hoursText;
            currentMin.value = minutesText;
            currentSec.value = secondsText;
            drawClock();
            console.log("Dubai" + "-> " + hoursText + ":" + minutesText + ":" + secondsText);
        }, 1000);
    });

    bg.addEventListener("click", function() {
        clearInterval(interval); // Limpia el intervalo anterior si existe
        interval = setInterval(async function() {
            const hoursResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[3].id + "&tipo=HOUR",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const minutesResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[3].id + "&tipo=MINUTE",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const secondsResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[3].id + "&tipo=SECOND",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const hoursText = await hoursResponse.text();
            const minutesText = await minutesResponse.text();
            const secondsText = await secondsResponse.text();

            let currentHour = document.getElementById("hours");
            let currentMin = document.getElementById("minutes");
            let currentSec = document.getElementById("seconds");

            currentHour.value = hoursText;
            currentMin.value = minutesText;
            currentSec.value = secondsText;
            drawClock();
            console.log("Bangkok" + "-> " + hoursText + ":" + minutesText + ":" + secondsText);
        }, 1000);
    });

    tk.addEventListener("click", function() {
        clearInterval(interval); // Limpia el intervalo anterior si existe
        interval = setInterval(async function() {
            const hoursResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[4].id + "&tipo=HOUR",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const minutesResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[4].id + "&tipo=MINUTE",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const secondsResponse = await fetch("http://34.90.153.139/examen1/wolrdtimes.php", {
                method: 'POST',
                body: "id=" + cityData.cities[4].id + "&tipo=SECOND",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const hoursText = await hoursResponse.text();
            const minutesText = await minutesResponse.text();
            const secondsText = await secondsResponse.text();

            let currentHour = document.getElementById("hours");
            let currentMin = document.getElementById("minutes");
            let currentSec = document.getElementById("seconds");

            currentHour.value = hoursText;
            currentMin.value = minutesText;
            currentSec.value = secondsText;
            drawClock();
            console.log("Tokio" + "-> " + hoursText + ":" + minutesText + ":" + secondsText);
        }, 1000);
    });
}

cities();



