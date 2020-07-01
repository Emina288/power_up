import "./styles/index.scss";

window.addEventListener("DOMContentLoaded", () => {
   let modal = document.getElementById("myModal");
   let hydroModal = document.getElementById("hydroModal");
   let thermoModal = document.getElementById("thermoModal");
   let solarModal = document.getElementById("solarModal");
   let sound = document.getElementsByClassName("audio")
   console.log(sound)


    // Get the button that opens the modal
   let btn = document.getElementById("myBtn");
   let hbtn = document.getElementById("hBtn");
   let tbtn = document.getElementById("tBtn");
   let sbtn = document.getElementById("sBtn");
   let wbtn = document.getElementById("wBtn");


    // Get the <span> element that closes the modal
   let span = document.getElementsByClassName("close")[0];
   let spanW = document.getElementsByClassName("close")[1];
   let spanS = document.getElementsByClassName("close")[2];
   let spanT = document.getElementsByClassName("close")[3];
   let spanH = document.getElementsByClassName("close")[4];

    btn.onclick = function () {
        modal.style.display = "block";
        sound[0].currentTime = 0;
        sound[0].play();

    }

    hbtn.onclick = function () {
        hydroModal.style.display = "block";
    }

    tbtn.onclick = function () {
        thermoModal.style.display = "block";
    }

    sbtn.onclick = function () {
        solarModal.style.display = "block";
    }

    wbtn.onclick = function () {
        windModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    spanH.onclick = function () {
        hydroModal.style.display = "none";
    }

    spanT.onclick = function () {
        thermoModal.style.display = "none";
    }

    spanS.onclick = function () {
        solarModal.style.display = "none";
    }

    spanW.onclick = function () {
        windModal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal || event.target == hydroModal || event.target === thermoModal || event.target === solarModal || event.target === windModal) {
            event.target.style.display = "none";
        }
    }

})


