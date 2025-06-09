let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
    let date = new Date();

    // get hours, minutes, and seconds from the date object
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    // Update the digital clock display
    let digital = document.getElementById("digitalClock");
    let hhStr = String(hh).padStart(2, '0');
    let mmStr = String(mm).padStart(2, '0');
    // let ssStr = String(ss).padStart(2, '0');
    digital.textContent = `${hhStr} : ${mmStr}`;
}

setInterval(displayTime, 1000);