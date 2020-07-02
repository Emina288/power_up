import "./styles/index.scss";

window.addEventListener("DOMContentLoaded", () => {
   let modal = document.getElementById("myModal");
   let hydroModal = document.getElementById("hydroModal");
   let thermoModal = document.getElementById("thermoModal");
   let solarModal = document.getElementById("solarModal");
   let sound = document.getElementsByClassName("audio");
//    let canvas = document.getElementById("canvas1");
//    let c = canvas.getContext("2d");
//    let img = document.getElementById("")

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

    var x = 10;
    var y = 50;
    var dx = 5;




    // function anime() {
    //     requestAnimationFrame(anime);
    //     c.clearRect(0, 0, innerWidth, innerHeight);
    //     c.beginPath();
    //     c.moveTo(x, y);
    //     c.lineTo(x+70,y);
    //     c.lineTo(x+70,y-20);
    //     c.lineTo(x+90, y+15);
    //     c.lineTo(x+70,y+50);
    //     c.lineTo(x+70,y+30);
    //     c.lineTo(x,y+30)
    //     c.closePath();
    //     c.strokeStyle = "red";
    //     c.stroke();

    //     if (x > 600 ) {
    //        x = 10;
    //     } else {

    //     x += dx;
    //     }

    // }

    // anime();

    // c.beginPath();
    // c.moveTo(10,200);
    // c.lineTo(200, 180);
    // c.lineTo(200, 220);
    // c.closePath();
    // c.strokeStyle = "black"
    // c.stroke();

    // c.beginPath();
    // c.arc(240,200,40, 0, Math.PI * 2, false);
    // c.strokeStyle = "black"
    // c.stroke();

    // c.beginPath();
    // c.moveTo(220, 0);
    // c.lineTo(180, 190);
    // c.lineTo(220, 190);
    // c.closePath();
    // c.strokeStyle = "black"
    // c.stroke();

    // c.beginPath();
    // c.moveTo(10, 50);
    // c.lineTo(80,50);
    // c.lineTo(80,30);
    // c.lineTo(100, 65);
    // c.lineTo(80,100);
    // c.lineTo(80,80);
    // c.lineTo(10,80)
    // c.closePath();
    // c.strokeStyle = "red";
    // c.stroke();

    

})


