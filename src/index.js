import "./styles/index.scss";


window.addEventListener("DOMContentLoaded", () => {
   let modal = document.getElementById("myModal");
   let hydroModal = document.getElementById("hydroModal");
   let thermoModal = document.getElementById("thermoModal");
   let solarModal = document.getElementById("solarModal");
   let sound = document.getElementsByClassName("audio");
   let thermo1 = document.getElementsByClassName("p-thermo")[0];
   let thermo2 = document.getElementsByClassName("p-thermo")[1];
   let thermo3 = document.getElementsByClassName("p-thermo")[2];
    let moreThermo= document.getElementById("more");
    let lessThermo = document.getElementById("less");
   let backThermo = document.getElementById("back")


    thermo1.style.display = "none";
    thermo2.style.display = "none";
    thermo3.style.display = "none";
    lessThermo.style.display = "none";

    moreThermo.onclick = function () {
    thermo1.style.display = "block";
    thermo2.style.display = "block";
    thermo3.style.display = "block";
    lessThermo.style.display = "block";
    moreThermo.style.display ="none"
    backThermo.classList.remove("back-thermo");
    backThermo.classList.add("back-other");
      
    };

    lessThermo.onclick = function () {
      thermo1.style.display = "none";
      thermo2.style.display = "none";
      thermo3.style.display = "none";
      lessThermo.style.display = "none";
      moreThermo.style.display = "block";
      backThermo.classList.remove("back-other");
      backThermo.classList.add("back-thermo");
    };

    // var canvas = document.getElementById("myCanvas");
    // var ctx = canvas.getContext("2d");
    // ctx.beginPath();
    // ctx.arrow(50, 180, 100, 200, [0, 1, -10, 1, -10, 5]);
    // ctx.fill();
    // var sun = new Image();
    // var moon = new Image();
    // var earth = new Image();
    // function init() {
    //  sun.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png";
    //  moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
    //  earth.src = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";
    //   window.requestAnimationFrame(draw);
    // }

    // function draw() {
    //   var ctx = document.getElementById("myCanvas").getContext("2d");

    //   ctx.globalCompositeOperation = "destination-over";
    //   ctx.clearRect(0, 0, 300, 300); // clear canvas

    //   ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    //   ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    //   ctx.save();
    //   ctx.translate(150, 150);

    //   // Earth
    //   var time = new Date();
    //   ctx.rotate(
    //     ((2 * Math.PI) / 60) * time.getSeconds() +
    //       ((2 * Math.PI) / 60000) * time.getMilliseconds()
    //   );
    //   ctx.translate(105, 0);
    //   ctx.fillRect(0, -12, 40, 24); // Shadow
    //   ctx.drawImage(earth, -12, -12);

    //   // Moon
    //   ctx.save();
    //   ctx.rotate(
    //     ((2 * Math.PI) / 6) * time.getSeconds() +
    //       ((2 * Math.PI) / 6000) * time.getMilliseconds()
    //   );
    //   ctx.translate(0, 28.5);
    //   ctx.drawImage(moon, -3.5, -3.5);
    //   ctx.restore();

    //   ctx.restore();

    //   ctx.beginPath();
    //   ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    //   ctx.stroke();

    //   ctx.drawImage(sun, 0, 0, 300, 300);

    //   window.requestAnimationFrame(draw);
    // }

    // init();

     var img = new Image();

     // User Variables - customize these to change the image being scrolled, its
     // direction, and the speed.

     img.src =
       "https://www.evolutionmeasurement.com/wp-content/uploads/2016/08/iStock_31889096_XXXLARGE-800x200.jpg";
     var CanvasXSize = 800;
     var CanvasYSize = 700;
     var speed = 40; // lower is faster
     var scale = 1.05;
     var y = -4.5; // vertical offset

     // Main program

     var dx = 0.75;
     var imgW;
     var imgH;
     var x = 0;
     var clearX;
     var clearY;
     var ctx;

     img.onload = function () {
       imgW = img.width * scale;
       imgH = img.height * scale;

       if (imgW > CanvasXSize) {
         // image larger than canvas
         x = CanvasXSize - imgW;
       }
       if (imgW > CanvasXSize) {
         // image width larger than canvas
         clearX = imgW;
       } else {
         clearX = CanvasXSize;
       }
       if (imgH > CanvasYSize) {
         // image height larger than canvas
         clearY = imgH;
       } else {
         clearY = CanvasYSize;
       }

       // get canvas context
       ctx = document.getElementById("canvas").getContext("2d");

       // set refresh rate
       return setInterval(draw, speed);
     };

     function draw() {
       ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

       // if image is <= Canvas Size
       if (imgW <= CanvasXSize) {
         // reset, start from beginning
         if (x > CanvasXSize) {
           x = -imgW + x;
         }
         // draw additional image1
         if (x > 0) {
           ctx.drawImage(img, -imgW + x, y, imgW, imgH);
         }
         // draw additional image2
         if (x - imgW > 0) {
           ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
         }
       }

       // image is > Canvas Size
       else {
         // reset, start from beginning
         if (x > CanvasXSize) {
           x = CanvasXSize - imgW;
         }
         // draw aditional image
         if (x > CanvasXSize - imgW) {
           ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
         }
       }
       // draw image
       ctx.drawImage(img, x, y, imgW, imgH);
       // amount to move
       x += dx;
     }
  
    // let canvasBack = document.getElementsByClassName("back")[0];


    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);
    

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

});


