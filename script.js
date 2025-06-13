let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let hr2 = document.getElementById("hour2");
let min2 = document.getElementById("min2");
let sec2 = document.getElementById("sec2");

function displayTime() {
    let date = new Date();

    // get hours, minutes, and seconds from the date object
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    // Jam pertama
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    // Jam kedua
    hr2.style.transform = `rotate(${hRotation}deg)`;
    min2.style.transform = `rotate(${mRotation}deg)`;
    sec2.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);




// Click Jam--------------------------------------------------------------------
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
    card.classList.toggle('flipped');
  });
});



// Rotate Konten--------------------------------------------------------------------




// Rotate Konten--------------------------------------------------------------------
const openBtn = document.getElementById("open-form")
const closeBtn = document.getElementById("close-form")
const cancelBtn = document.getElementById("cancel-form")
const modal = document.getElementById("content-form")

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

cancelBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});




// Color Picker--------------------------------------------------------------------
const colorInput = document.getElementById('color-form');
const colorPicker = document.querySelector('.color-picker');

colorInput.addEventListener('input', function() {
colorPicker.style.backgroundColor = this.value;
});

colorPicker.addEventListener('click', function() {
colorInput.click();
});