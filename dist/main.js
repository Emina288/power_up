/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hydro.js":
/*!**********************!*\
  !*** ./src/hydro.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var sample = [{
  country: "Russia",
  value: 19.95,
  color: "#000000",
  prodH: [12, 15, 18, 9, 16.0],
  dataset: [{
    date: 1993,
    value: 2
  }, {
    date: 1998,
    value: 3
  }, {
    date: 2003,
    value: 8
  }, {
    date: 2005,
    value: 17
  }, {
    date: 2009,
    value: 12
  }, {
    date: 2014,
    value: 17
  }, {
    date: 2019,
    value: 19.95
  }]
}, {
  country: "Canada",
  value: 61.3,
  color: "#00a2ee",
  prodH: [45, 32, 58, 65, 60],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 0
  }, {
    date: 2003,
    value: 8
  }, {
    date: 2005,
    value: 30
  }, {
    date: 2009,
    value: 45
  }, {
    date: 2014,
    value: 42
  }, {
    date: 2019,
    value: 61.3
  }]
}, {
  country: "China",
  value: 20.0,
  color: "#fbcb39",
  prodH: [8, 11, 15, 18, 20],
  dataset: [{
    date: 1993,
    value: 3
  }, {
    date: 1998,
    value: 4
  }, {
    date: 2003,
    value: 7
  }, {
    date: 2005,
    value: 26
  }, {
    date: 2009,
    value: 11
  }, {
    date: 2014,
    value: 16
  }, {
    date: 2019,
    value: 20
  }]
}, {
  country: "United States",
  value: 6.6,
  color: "#007bc8",
  prodH: [1, 3, 5, 10, 7],
  dataset: [{
    date: 1993,
    value: 2
  }, {
    date: 1998,
    value: 3
  }, {
    date: 2003,
    value: 5
  }, {
    date: 2005,
    value: 10
  }, {
    date: 2009,
    value: 15
  }, {
    date: 2014,
    value: 12
  }, {
    date: 2019,
    value: 6.6
  }]
}, {
  country: "Brazil",
  value: 65.0,
  color: "#65cedb",
  prodH: [40, 48, 32, 55, 70],
  dataset: [{
    date: 1993,
    value: 16
  }, {
    date: 1998,
    value: 20
  }, {
    date: 2003,
    value: 36
  }, {
    date: 2005,
    value: 50
  }, {
    date: 2009,
    value: 29
  }, {
    date: 2014,
    value: 46
  }, {
    date: 2019,
    value: 65
  }]
}, {
  country: "Australia",
  value: 5,
  color: "#ff6e52",
  prodH: [1, 3, 5, 10, 7],
  dataset: [{
    date: 1993,
    value: 6
  }, {
    date: 1998,
    value: 5
  }, {
    date: 2003,
    value: 6
  }, {
    date: 2005,
    value: 9
  }, {
    date: 2009,
    value: 2
  }, {
    date: 2014,
    value: 3
  }, {
    date: 2019,
    value: 5
  }]
}, {
  country: "India",
  value: 26.0,
  color: "#f9de3f",
  prodH: [8, 11, 15, 18, 26],
  dataset: [{
    date: 1993,
    value: 1
  }, {
    date: 1998,
    value: 2
  }, {
    date: 2003,
    value: 9
  }, {
    date: 2005,
    value: 15
  }, {
    date: 2009,
    value: 11
  }, {
    date: 2014,
    value: 19
  }, {
    date: 2019,
    value: 26
  }]
}, {
  country: "Argentina",
  value: 36,
  color: "#5d2f8e",
  prodH: [1, 3, 5, 10, 7.3],
  dataset: [{
    date: 1993,
    value: 5
  }, {
    date: 1998,
    value: 3
  }, {
    date: 2003,
    value: 8
  }, {
    date: 2005,
    value: 20
  }, {
    date: 2009,
    value: 27
  }, {
    date: 2014,
    value: 23
  }, {
    date: 2019,
    value: 36
  }]
}, {
  country: "Kazakhstan",
  value: 13.0,
  color: "#008fc9",
  prodH: [12, 15, 18, 9, 16.0],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 0
  }, {
    date: 2003,
    value: 0
  }, {
    date: 2005,
    value: 5
  }, {
    date: 2009,
    value: 9
  }, {
    date: 2014,
    value: 18
  }, {
    date: 2019,
    value: 13
  }]
}];
var years = [2000, 2005, 2010, 2015, 2020];

function level1() {
  var svgContainer = d3.select("#container");
  var svg = svgContainer.append("svg").attr("class", "chart");
  var margin = 80;
  var width = 1000 - 2 * margin;
  var height = 600 - 2 * margin;
  var chart = svg.append("g").attr("transform", "translate(".concat(margin, ", ").concat(margin, ")"));
  var xScale = d3.scaleBand().range([0, width]).domain(sample.map(function (s) {
    return s.country;
  })).padding(0.4);
  var yScale = d3.scaleLinear().range([height, 0]).domain([0, 70]);

  var makeYLines = function makeYLines() {
    return d3.axisLeft().scale(yScale);
  };

  chart.append("g").attr("transform", "translate(0, ".concat(height, ")")).call(d3.axisBottom(xScale));
  chart.append("g").call(d3.axisLeft(yScale));
  chart.append("g").attr("class", "grid").call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));
  var barGroups = chart.selectAll().data(sample).enter().append("g");
  barGroups.append("rect").attr("class", "bar").attr("x", function (d) {
    return xScale(d.country);
  }).attr("width", xScale.bandwidth()).attr("height", 0).transition().duration(500).delay(function (d, i) {
    return i * 50;
  }).attr("y", function (d) {
    return yScale(d.value);
  }).attr("height", function (d) {
    return height - yScale(d.value);
  });
  d3.selectAll(".bar").on("click", function (actual, i) {
    d3.selectAll(".chart").remove();
    level2(actual);
  }).on("mouseenter", function (actual, i) {
    d3.selectAll(".value").attr("opacity", 0);
    d3.select(this).transition().duration(300).attr("opacity", 0.6).attr("x", function (a) {
      return xScale(a.country) - 5;
    }).attr("width", xScale.bandwidth() + 10);
    var y = yScale(actual.value);
    var line = chart.append("line").attr("id", "limit").attr("x1", 0).attr("y1", y).attr("x2", width).attr("y2", y);
    barGroups.append("text").attr("class", "divergence").attr("x", function (a) {
      return xScale(a.country) + xScale.bandwidth() / 2;
    }).attr("y", function (a) {
      return yScale(a.value) - 10;
    }).attr("text-anchor", "middle").text(function (a, idx) {
      var divergence = (a.value - actual.value).toFixed(1);
      var text = "";
      if (divergence > 0) text += "+";
      text += "".concat(divergence, "%");
      return idx !== i ? text : "".concat(actual.country, ", ").concat(actual.value, "%");
    });
  }).on("mouseleave", function () {
    d3.selectAll(".value").attr("opacity", 1);
    d3.select(this).transition().duration(300).attr("opacity", 1).attr("x", function (a) {
      return xScale(a.country);
    }).attr("width", xScale.bandwidth());
    chart.selectAll("#limit").remove();
    chart.selectAll(".divergence").remove();
  });
  var text = barGroups.append("text").attr("class", "value").attr("x", function (a) {
    return xScale(a.country) + xScale.bandwidth() / 2;
  }).attr("y", function (a) {
    return yScale(a.value) - 5;
  }).attr("y", function (d) {
    return height;
  }).attr("height", 0).transition().duration(500).delay(function (d, i) {
    return i * 50;
  }).attr("y", function (d) {
    return yScale(d.value) - 20;
  }).attr("height", function (d) {
    return height - yScale(d.value);
  }).attr("height", function (a) {
    return a.value;
  }).attr("text-anchor", "middle").text(0);
  text.transition().tween("text", function () {
    var selection = d3.select(this);
    var start = d3.select(this).text();
    var end = this.getAttribute("height");
    var interpolator = d3.interpolateNumber(start, end);
    return function (t) {
      selection.text(Math.round(interpolator(t)));
    };
  }).duration(3000);
  svg.append("text").attr("class", "label").attr("x", -(height / 2) - margin).attr("y", margin / 2.4).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text("Out of total electricity genration (%)");
  svg.append("text").attr("class", "title").attr("x", width / 2 + margin).attr("y", 40).attr("text-anchor", "middle").text("Electricity generation by hydropower in 2019");
  svg.append("text").attr("class", "back2").attr("x", width / 10).attr("y", 40).attr("text-anchor", "middle").text("Click to find out more").on("click", function (actual, i) {
    d3.selectAll(".chart").remove();
    level3();
  });
}

function level2(actual) {
  var lineData = actual.dataset;
  console.log(lineData);
  var margin = 80;
  var svgContainer = d3.select("#container");
  var svg = svgContainer.append("svg").attr("class", "chart");
  var chart = svg.append("g").attr("id", "visualisation").attr("transform", "translate(".concat(margin / 2, ", ").concat(margin, ")"));
  var vis = d3.select("#visualisation"),
      MARGINS = 80,
      WIDTH = 1000 - 2 * MARGINS,
      HEIGHT = 600 - 2 * MARGINS,
      MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  },
      xRange = d3.scaleLinear().range([0, WIDTH]).domain(d3.extent(lineData, function (dataPoint) {
    return dataPoint.date;
  })),
      yRange = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, d3.max(lineData, function (d) {
    return d.value;
  })]),
      xAxis = d3.axisBottom().scale(xRange),
      yAxis = d3.axisLeft().scale(yRange);

  var makeYLines = function makeYLines() {
    return d3.axisLeft().scale(yRange);
  };

  chart.append("g").attr("class", "grid").attr("transform", "translate(" + MARGINS.left + ",0)").call(makeYLines().tickSize(-WIDTH, 0, 0).tickFormat(""));
  vis.append("svg:g").attr("class", "x axis").attr("transform", "translate(" + MARGINS.left + "," + (HEIGHT - MARGINS.bottom) + ")").call(xAxis);
  vis.append("svg:g").attr("class", "y axis").attr("transform", "translate(" + MARGINS.left + ",0)").call(yAxis);
  var lineFunc = d3.line().x(function (d) {
    return xRange(d.date);
  }).y(function (d) {
    return yRange(d.value);
  }).curve(d3.curveBasis);
  var path = vis.append("svg:path").attr("class", "path").attr("d", lineFunc(lineData)).attr("stroke", "blue").attr("stroke-width", 2).attr("fill", "none").attr("transform", "translate(" + MARGINS.left + ",0)");
  var totalLength = path.node().getTotalLength();
  path.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(4000).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
  svg.append("text").attr("class", "title").attr("x", WIDTH / 2 + 80).attr("y", 40).attr("text-anchor", "middle").text("Hydro power usage in ".concat(actual.country, " throughout the years"));
  svg.append("text").attr("class", "label").attr("x", -(HEIGHT / 2) - 80).attr("y", 80 / 2.4).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text("Out of total electricity genration (%)");
  svg.append("text").attr("class", "back2").attr("x", WIDTH / 10).attr("y", 40).attr("text-anchor", "middle").text("Back").on("click", function (actual, i) {
    d3.selectAll(".chart").remove();
    level1();
  });
}

function level3() {
  var svgContainer = d3.select("#container");
  var svg = svgContainer.append("svg").attr("class", "chart");
  MARGINS = 80, WIDTH = 1000 - 2 * MARGINS, HEIGHT = 600 - 2 * MARGINS, MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  }, svg.append("foreignObject").attr("class", "graph-title").attr("width", WIDTH).attr("height", 600).attr("x", 50).attr("y", 0).append("xhtml:body").style("font", "14px 'Helvetica Neue'").html("<h1>Hydroelectricity</h1><div><div><p>Hydroenergy is a renewable type of energy that uses flowing water to power a turbine to produce electrical energy</p><p>To generate electricity, water must be in motion. This is kinetic (moving) energy. When flowing water turns blades in a turbine, the form is changed to mechanical (machine) energy. The turbine turns the generator rotor which then converts this mechanical energy into another energy form -- electricity. Since water is the initial source of energy, we call this hydroelectric power or hydropower for short. </p></div><div class='graph-div'></div></div>");
  svg.append("text").attr("class", "back2").attr("x", WIDTH / 10).attr("y", 50).attr("text-anchor", "middle").text("Back").on("click", function () {
    d3.selectAll(".chart").remove();
    level1();
  });
}

window.addEventListener("DOMContentLoaded", function () {
  var h = document.getElementById("what1");

  h.onclick = function () {
    level1();
  };
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hydro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hydro.js */ "./src/hydro.js");
/* harmony import */ var _hydro_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hydro_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wind.js */ "./src/wind.js");
/* harmony import */ var _wind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solar.js */ "./src/solar.js");
/* harmony import */ var _solar_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solar_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _thermo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thermo.js */ "./src/thermo.js");
/* harmony import */ var _thermo_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_thermo_js__WEBPACK_IMPORTED_MODULE_4__);





window.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var hydroModal = document.getElementById("hydroModal");
  var thermoModal = document.getElementById("thermoModal");
  var solarModal = document.getElementById("solarModal");
  var sound = document.getElementsByClassName("audio");
  var btn = document.getElementById("myBtn");
  var hbtn = document.getElementById("hBtn");
  var tbtn = document.getElementById("tBtn");
  var sbtn = document.getElementById("sBtn");
  var wbtn = document.getElementById("wBtn");
  var span = document.getElementsByClassName("close")[0];
  var spanW = document.getElementsByClassName("close")[1];
  var spanS = document.getElementsByClassName("close")[2];
  var spanT = document.getElementsByClassName("close")[3];
  var spanH = document.getElementsByClassName("close")[4];

  btn.onclick = function () {
    modal.style.display = "block";
    sound[0].currentTime = 0;
    sound[0].play();
  };

  hbtn.onclick = function () {
    hydroModal.style.display = "block";
  };

  tbtn.onclick = function () {
    thermoModal.style.display = "block";
  };

  sbtn.onclick = function () {
    solarModal.style.display = "block";
  };

  wbtn.onclick = function () {
    windModal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  spanH.onclick = function () {
    hydroModal.style.display = "none";
    window.location.reload();
  };

  spanT.onclick = function () {
    thermoModal.style.display = "none";
    window.location.reload();
  };

  spanS.onclick = function () {
    solarModal.style.display = "none";
    window.location.reload();
  };

  spanW.onclick = function () {
    windModal.style.display = "none";
    window.location.reload();
  };

  window.onclick = function (event) {
    if (event.target == modal || event.target == hydroModal || event.target === thermoModal || event.target === solarModal || event.target === windModal) {
      event.target.style.display = "none";
      window.location.reload();
    }
  };
});

/***/ }),

/***/ "./src/solar.js":
/*!**********************!*\
  !*** ./src/solar.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var sample = [{
  country: "Russia",
  value: 1,
  color: "#000000",
  prodH: [12, 15, 18, 9, 16.0],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 0
  }, {
    date: 2003,
    value: 0
  }, {
    date: 2005,
    value: 0.3
  }, {
    date: 2009,
    value: 2
  }, {
    date: 2014,
    value: 0.05
  }, {
    date: 2019,
    value: 0.4
  }]
}, {
  country: "Canada",
  value: 5.2,
  color: "#00a2ee",
  prodH: [45, 32, 58, 65, 60],
  dataset: [{
    date: 1993,
    value: 1
  }, {
    date: 1998,
    value: 1
  }, {
    date: 2003,
    value: 1
  }, {
    date: 2005,
    value: 2.8
  }, {
    date: 2009,
    value: 5
  }, {
    date: 2014,
    value: 3
  }, {
    date: 2019,
    value: 5.2
  }]
}, {
  country: "China",
  value: 2.5,
  color: "#fbcb39",
  prodH: [8, 11, 15, 18, 20],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 0.5
  }, {
    date: 2003,
    value: 0.8
  }, {
    date: 2005,
    value: 1
  }, {
    date: 2009,
    value: 3
  }, {
    date: 2014,
    value: 4.2
  }, {
    date: 2019,
    value: 2.5
  }]
}, {
  country: "United States",
  value: 1.8,
  color: "#007bc8",
  prodH: [1, 3, 5, 10, 7],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 2
  }, {
    date: 2003,
    value: 1
  }, {
    date: 2005,
    value: 5
  }, {
    date: 2009,
    value: 2
  }, {
    date: 2014,
    value: 4
  }, {
    date: 2019,
    value: 1.8
  }]
}, {
  country: "Brazil",
  value: 7.2,
  color: "#65cedb",
  prodH: [40, 48, 32, 55, 70],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 2
  }, {
    date: 2003,
    value: 3
  }, {
    date: 2005,
    value: 5.5
  }, {
    date: 2009,
    value: 5.8
  }, {
    date: 2014,
    value: 7
  }, {
    date: 2019,
    value: 7.2
  }]
}, {
  country: "Australia",
  value: 7,
  color: "#ff6e52",
  prodH: [1, 3, 5, 10, 7],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 2
  }, {
    date: 2003,
    value: 3
  }, {
    date: 2005,
    value: 5.5
  }, {
    date: 2009,
    value: 5.8
  }, {
    date: 2014,
    value: 7
  }, {
    date: 2019,
    value: 7
  }]
}, {
  country: "India",
  value: 8.3,
  color: "#f9de3f",
  prodH: [8, 11, 15, 18, 26],
  dataset: [{
    date: 1993,
    value: 1
  }, {
    date: 1998,
    value: 2.9
  }, {
    date: 2003,
    value: 3.8
  }, {
    date: 2005,
    value: 6
  }, {
    date: 2009,
    value: 5.8
  }, {
    date: 2014,
    value: 7
  }, {
    date: 2019,
    value: 8.3
  }]
}, {
  country: "Argentina",
  value: 1,
  color: "#5d2f8e",
  prodH: [1, 3, 5, 10, 7.3],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 0
  }, {
    date: 2003,
    value: 0
  }, {
    date: 2005,
    value: 0.5
  }, {
    date: 2009,
    value: 0.5
  }, {
    date: 2014,
    value: 0.8
  }, {
    date: 2019,
    value: 1
  }]
}, {
  country: "Kazakhstan",
  value: 2.5,
  color: "#008fc9",
  prodH: [12, 15, 18, 9, 16.0],
  dataset: [{
    date: 1993,
    value: 1
  }, {
    date: 1998,
    value: 1
  }, {
    date: 2003,
    value: 1
  }, {
    date: 2005,
    value: 1.5
  }, {
    date: 2009,
    value: 2.5
  }, {
    date: 2014,
    value: 2
  }, {
    date: 2019,
    value: 2.5
  }]
}];
var years = [2000, 2005, 2010, 2015, 2020];

function level1() {
  var svgContainer = d3.select("#container2");
  var svg = svgContainer.append("svg").attr("class", "chart2");
  var margin = 80;
  var width = 1000 - 2 * margin;
  var height = 600 - 2 * margin;
  var chart = svg.append("g").attr("transform", "translate(".concat(margin, ", ").concat(margin, ")"));
  var xScale = d3.scaleBand().range([0, width]).domain(sample.map(function (s) {
    return s.country;
  })).padding(0.4);
  var yScale = d3.scaleLinear().range([height, 0]).domain([0, 10]);

  var makeYLines = function makeYLines() {
    return d3.axisLeft().scale(yScale);
  };

  chart.append("g").attr("transform", "translate(0, ".concat(height, ")")).call(d3.axisBottom(xScale));
  chart.append("g").call(d3.axisLeft(yScale));
  chart.append("g").attr("class", "grid").call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));
  var barGroups = chart.selectAll().data(sample).enter().append("g");
  barGroups.append("rect").attr("class", "bar2").attr("x", function (d) {
    return xScale(d.country);
  }).attr("width", xScale.bandwidth()).attr("y", function (d) {
    return height;
  }).attr("height", 0).transition().duration(500).delay(function (d, i) {
    return i * 50;
  }).attr("y", function (d) {
    return yScale(d.value);
  }).attr("height", function (d) {
    return height - yScale(d.value);
  });
  d3.selectAll(".bar2").on("click", function (actual, i) {
    d3.selectAll(".chart2").remove();
    level2(actual);
  }).on("mouseenter", function (actual, i) {
    d3.selectAll(".value").attr("opacity", 0);
    d3.select(this).transition().duration(300).attr("opacity", 0.6).attr("x", function (a) {
      return xScale(a.country) - 5;
    }).attr("width", xScale.bandwidth() + 10);
    var y = yScale(actual.value);
    var line = chart.append("line").attr("id", "limit").attr("x1", 0).attr("y1", y).attr("x2", width).attr("y2", y);
    barGroups.append("text").attr("class", "divergence").attr("x", function (a) {
      return xScale(a.country) + xScale.bandwidth() / 2;
    }).attr("y", function (a) {
      return yScale(a.value) - 10;
    }).attr("text-anchor", "middle").text(function (a, idx) {
      var divergence = (a.value - actual.value).toFixed(1);
      var text = "";
      if (divergence > 0) text += "+";
      text += "".concat(divergence, "%");
      return idx !== i ? text : "".concat(actual.country, ", ").concat(actual.value, "%");
    });
  }).on("mouseleave", function () {
    d3.selectAll(".value").attr("opacity", 1);
    d3.select(this).transition().duration(300).attr("opacity", 1).attr("x", function (a) {
      return xScale(a.country);
    }).attr("width", xScale.bandwidth());
    chart.selectAll("#limit").remove();
    chart.selectAll(".divergence").remove();
  });
  var text = barGroups.append("text").attr("class", "value").attr("x", function (a) {
    return xScale(a.country) + xScale.bandwidth() / 2;
  }).attr("y", function (a) {
    return yScale(a.value) - 5;
  }).attr("y", function (d) {
    return height;
  }).attr("height", 0).transition().duration(300).delay(function (d, i) {
    return i * 50;
  }).attr("y", function (d) {
    return yScale(d.value) - 20;
  }).attr("height", function (d) {
    return height - yScale(d.value);
  }).attr("height", function (a) {
    return a.value;
  }).attr("text-anchor", "middle").text(0);
  text.transition().tween("text", function () {
    var selection = d3.select(this);
    var start = d3.select(this).text();
    var end = this.getAttribute("height");
    var interpolator = d3.interpolateNumber(end, end);
    return function (t) {
      selection.text(Math.round(interpolator(t)));
    };
  }).duration(3000);
  svg.append("text").attr("class", "label").attr("x", -(height / 2) - margin).attr("y", margin / 2.4).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text("Out of total electricity genration (%)");
  svg.append("text").attr("class", "title").attr("x", width / 2 + margin).attr("y", 40).attr("text-anchor", "middle").text("Electricity generation by solar power in 2019");
  svg.append("text").attr("class", "back2").attr("x", width / 10).attr("y", 40).attr("text-anchor", "middle").text("Click to find out more").on("click", function (actual, i) {
    d3.selectAll(".chart2").remove();
    level3();
  });
}

function level2(actual) {
  var lineData = actual.dataset;
  console.log(lineData);
  var margin = 80;
  var svgContainer = d3.select("#container2");
  var svg = svgContainer.append("svg").attr("class", "chart2");
  var chart = svg.append("g").attr("id", "visualisation").attr("transform", "translate(".concat(margin / 2, ", ").concat(margin, ")"));
  var vis = d3.select("#visualisation"),
      MARGINS = 80,
      WIDTH = 1000 - 2 * MARGINS,
      HEIGHT = 600 - 2 * MARGINS,
      MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  },
      xRange = d3.scaleLinear().range([0, WIDTH]).domain(d3.extent(lineData, function (dataPoint) {
    return dataPoint.date;
  })),
      yRange = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, d3.max(lineData, function (d) {
    return d.value;
  })]),
      xAxis = d3.axisBottom().scale(xRange),
      yAxis = d3.axisLeft().scale(yRange);

  var makeYLines = function makeYLines() {
    return d3.axisLeft().scale(yRange);
  };

  chart.append("g").attr("class", "grid").attr("transform", "translate(" + MARGINS.left + ",0)").call(makeYLines().tickSize(-WIDTH, 0, 0).tickFormat(""));
  vis.append("svg:g").attr("class", "x axis").attr("transform", "translate(" + MARGINS.left + "," + (HEIGHT - MARGINS.bottom) + ")").call(xAxis);
  vis.append("svg:g").attr("class", "y axis").attr("transform", "translate(" + MARGINS.left + ",0)").call(yAxis);
  var lineFunc = d3.line().x(function (d) {
    return xRange(d.date);
  }).y(function (d) {
    return yRange(d.value);
  }).curve(d3.curveBasis);
  var path = vis.append("svg:path").attr("class", "path2").attr("d", lineFunc(lineData)).attr("stroke", "blue").attr("stroke-width", 2).attr("fill", "none").attr("transform", "translate(" + MARGINS.left + ",0)");
  var totalLength = path.node().getTotalLength();
  path.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(4000).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
  svg.append("text").attr("class", "title").attr("x", WIDTH / 2 + 80).attr("y", 40).attr("text-anchor", "middle").text("Solar power usage in ".concat(actual.country, " throughout the years"));
  svg.append("text").attr("class", "label").attr("x", -(HEIGHT / 2) - 80).attr("y", 80 / 2.4).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text("Out of total electricity genration (%)");
  svg.append("text").attr("class", "back3").attr("x", WIDTH / 10).attr("y", 40).attr("text-anchor", "middle").text("Back").on("click", function (actual, i) {
    d3.selectAll(".chart2").remove();
    level1();
  });
}

function level3() {
  var svgContainer = d3.select("#container2");
  var svg = svgContainer.append("svg").attr("class", "chart2");
  MARGINS = 80, WIDTH = 1000 - 2 * MARGINS, HEIGHT = 600 - 2 * MARGINS, MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  }, svg.append("foreignObject").attr("class", "graph-title2").attr("width", WIDTH).attr("height", 600).attr("x", 50).attr("y", 0).append("xhtml:body").style("font", "14px 'Helvetica Neue'").html("<h1>Solar Power</h1><div><div><p>Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV), indirectly using concentrated solar power, or a combination.</p><p>Solar-powered photovoltaic (PV) panels convert the sun's rays into electricity by exciting electrons in silicon cells using the photons of light from the sun. This electricity can then be used to supply renewable energy to your home or business.In most solar systems, solar panels are placed on the roof. An ideal site will have no shade on the panels, especially during the prime sunlight hours of 9 a.m. to 3 p.m.; a south-facing installation will usually provide the optimum potential for your system, but other orientations may provide sufficient production. </p></div><div class='graph-div2'></div></div>");
  svg.append("text").attr("class", "back4").attr("x", WIDTH / 10).attr("y", 50).attr("text-anchor", "middle").text("Back").on("click", function () {
    d3.selectAll(".chart2").remove();
    level1();
  });
}

window.addEventListener("DOMContentLoaded", function () {
  var h = document.getElementById("what2");

  h.onclick = function () {
    level1();
  };
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/thermo.js":
/*!***********************!*\
  !*** ./src/thermo.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var sample = [{
  country: "Russia",
  value: 73.4,
  color: "#000000",
  prodH: [12, 15, 18, 9, 16.0],
  dataset: [{
    date: 1993,
    value: 90
  }, {
    date: 1998,
    value: 88
  }, {
    date: 2003,
    value: 80
  }, {
    date: 2005,
    value: 80
  }, {
    date: 2009,
    value: 75
  }, {
    date: 2014,
    value: 68
  }, {
    date: 2019,
    value: 73.4
  }]
}, {
  country: "Canada",
  value: 34.2,
  color: "#00a2ee",
  prodH: [45, 32, 58, 65, 60],
  dataset: [{
    date: 1993,
    value: 80
  }, {
    date: 1998,
    value: 75
  }, {
    date: 2003,
    value: 70
  }, {
    date: 2005,
    value: 64
  }, {
    date: 2009,
    value: 52
  }, {
    date: 2014,
    value: 41
  }, {
    date: 2019,
    value: 34
  }]
}, {
  country: "China",
  value: 72.1,
  color: "#fbcb39",
  prodH: [8, 11, 15, 18, 20],
  dataset: [{
    date: 1993,
    value: 98
  }, {
    date: 1998,
    value: 84
  }, {
    date: 2003,
    value: 93
  }, {
    date: 2005,
    value: 80
  }, {
    date: 2009,
    value: 70
  }, {
    date: 2014,
    value: 60
  }, {
    date: 2019,
    value: 72
  }]
}, {
  country: "United States",
  value: 62.7,
  color: "#007bc8",
  prodH: [1, 3, 5, 10, 7],
  dataset: [{
    date: 1993,
    value: 90
  }, {
    date: 1998,
    value: 88
  }, {
    date: 2003,
    value: 75
  }, {
    date: 2005,
    value: 88
  }, {
    date: 2009,
    value: 73
  }, {
    date: 2014,
    value: 70
  }, {
    date: 2019,
    value: 62
  }]
}, {
  country: "Brazil",
  value: 25,
  color: "#65cedb",
  prodH: [40, 48, 32, 55, 70],
  dataset: [{
    date: 1993,
    value: 60
  }, {
    date: 1998,
    value: 50
  }, {
    date: 2003,
    value: 40
  }, {
    date: 2005,
    value: 39
  }, {
    date: 2009,
    value: 35
  }, {
    date: 2014,
    value: 20
  }, {
    date: 2019,
    value: 25
  }]
}, {
  country: "Australia",
  value: 75,
  color: "#ff6e52",
  prodH: [1, 3, 5, 10, 7],
  dataset: [{
    date: 1993,
    value: 90
  }, {
    date: 1998,
    value: 88
  }, {
    date: 2003,
    value: 75
  }, {
    date: 2005,
    value: 88
  }, {
    date: 2009,
    value: 73
  }, {
    date: 2014,
    value: 70
  }, {
    date: 2019,
    value: 75
  }]
}, {
  country: "India",
  value: 72,
  color: "#f9de3f",
  prodH: [8, 11, 15, 18, 26],
  dataset: [{
    date: 1993,
    value: 90
  }, {
    date: 1998,
    value: 88
  }, {
    date: 2003,
    value: 75
  }, {
    date: 2005,
    value: 88
  }, {
    date: 2009,
    value: 73
  }, {
    date: 2014,
    value: 70
  }, {
    date: 2019,
    value: 72
  }]
}, {
  country: "Argentina",
  value: 60,
  color: "#5d2f8e",
  prodH: [1, 3, 5, 10, 7.3],
  dataset: [{
    date: 1993,
    value: 90
  }, {
    date: 1998,
    value: 88
  }, {
    date: 2003,
    value: 75
  }, {
    date: 2005,
    value: 88
  }, {
    date: 2009,
    value: 73
  }, {
    date: 2014,
    value: 70
  }, {
    date: 2019,
    value: 60
  }]
}, {
  country: "Kazakhstan",
  value: 86.2,
  color: "#008fc9",
  prodH: [12, 15, 18, 9, 16.0],
  dataset: [{
    date: 1993,
    value: 100
  }, {
    date: 1998,
    value: 98
  }, {
    date: 2003,
    value: 93
  }, {
    date: 2005,
    value: 85
  }, {
    date: 2009,
    value: 90
  }, {
    date: 2014,
    value: 84
  }, {
    date: 2019,
    value: 86.2
  }]
}];
var years = [2000, 2005, 2010, 2015, 2020];

function level1() {
  var svgContainer = d3.select("#container3");
  var svg = svgContainer.append("svg").attr("class", "chart3");
  var margin = 80;
  var width = 1000 - 2 * margin;
  var height = 600 - 2 * margin;
  var chart = svg.append("g").attr("transform", "translate(".concat(margin, ", ").concat(margin, ")"));
  var xScale = d3.scaleBand().range([0, width]).domain(sample.map(function (s) {
    return s.country;
  })).padding(0.4);
  var yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);

  var makeYLines = function makeYLines() {
    return d3.axisLeft().scale(yScale);
  };

  chart.append("g").attr("transform", "translate(0, ".concat(height, ")")).call(d3.axisBottom(xScale));
  chart.append("g").call(d3.axisLeft(yScale));
  chart.append("g").attr("class", "grid").call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));
  var barGroups = chart.selectAll().data(sample).enter().append("g");
  barGroups.append("rect").attr("class", "bar3").attr("x", function (d) {
    return xScale(d.country);
  }).attr("width", xScale.bandwidth()).attr("height", 0).transition().duration(500).delay(function (d, i) {
    return i * 50;
  }).attr("y", function (d) {
    return yScale(d.value);
  }).attr("height", function (d) {
    return height - yScale(d.value);
  });
  d3.selectAll(".bar3").on("click", function (actual, i) {
    d3.selectAll(".chart3").remove();
    level2(actual);
  }).on("mouseenter", function (actual, i) {
    d3.selectAll(".value3").attr("opacity", 0);
    d3.select(this).transition().duration(300).attr("opacity", 0.6).attr("x", function (a) {
      return xScale(a.country) - 5;
    }).attr("width", xScale.bandwidth() + 10);
    var y = yScale(actual.value);
    var line = chart.append("line").attr("id", "limit").attr("x1", 0).attr("y1", y).attr("x2", width).attr("y2", y);
    barGroups.append("text").attr("class", "divergence").attr("x", function (a) {
      return xScale(a.country) + xScale.bandwidth() / 2;
    }).attr("y", function (a) {
      return yScale(a.value) - 10;
    }).attr("text-anchor", "middle").text(function (a, idx) {
      var divergence = (a.value - actual.value).toFixed(1);
      var text = "";
      if (divergence > 0) text += "+";
      text += "".concat(divergence, "%");
      return idx !== i ? text : "".concat(actual.country, ", ").concat(actual.value, "%");
    });
  }).on("mouseleave", function () {
    d3.selectAll(".value3").attr("opacity", 1);
    d3.select(this).transition().duration(300).attr("opacity", 1).attr("x", function (a) {
      return xScale(a.country);
    }).attr("width", xScale.bandwidth());
    chart.selectAll("#limit").remove();
    chart.selectAll(".divergence").remove();
  });
  var text = barGroups.append("text").attr("class", "value3").attr("x", function (a) {
    return xScale(a.country) + xScale.bandwidth() / 2;
  }).attr("y", function (a) {
    return yScale(a.value) - 5;
  }).attr("y", function (d) {
    return height;
  }).attr("height", 0).transition().duration(500).delay(function (d, i) {
    return i * 50;
  }).attr("y", function (d) {
    return yScale(d.value) - 20;
  }).attr("height", function (d) {
    return height - yScale(d.value);
  }).attr("height", function (a) {
    return a.value;
  }).attr("text-anchor", "middle").text(0);
  text.transition().tween("text", function () {
    var selection = d3.select(this);
    var start = d3.select(this).text();
    var end = this.getAttribute("height");
    var interpolator = d3.interpolateNumber(start, end);
    return function (t) {
      selection.text(Math.round(interpolator(t)));
    };
  }).duration(3000);
  svg.append("text").attr("class", "label3").attr("x", -(height / 2) - margin).attr("y", margin / 2.4).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text("Out of total electricity genration (%)");
  svg.append("text").attr("class", "title3").attr("x", width / 2 + margin).attr("y", 40).attr("text-anchor", "middle").text("Electricity generation by thermo power in 2019");
  svg.append("text").attr("class", "back2").attr("x", width / 10).attr("y", 40).attr("text-anchor", "middle").text("Click to find out more").on("click", function (actual, i) {
    d3.selectAll(".chart3").remove();
    level3();
  });
}

function level2(actual) {
  var lineData = actual.dataset;
  console.log(lineData);
  var margin = 80;
  var svgContainer = d3.select("#container3");
  var svg = svgContainer.append("svg").attr("class", "chart3");
  var chart = svg.append("g").attr("id", "visualisation").attr("transform", "translate(".concat(margin / 2, ", ").concat(margin, ")"));
  var vis = d3.select("#visualisation"),
      MARGINS = 80,
      WIDTH = 1000 - 2 * MARGINS,
      HEIGHT = 600 - 2 * MARGINS,
      MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  },
      xRange = d3.scaleLinear().range([0, WIDTH]).domain(d3.extent(lineData, function (dataPoint) {
    return dataPoint.date;
  })),
      yRange = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, d3.max(lineData, function (d) {
    return d.value;
  })]),
      xAxis = d3.axisBottom().scale(xRange),
      yAxis = d3.axisLeft().scale(yRange);

  var makeYLines = function makeYLines() {
    return d3.axisLeft().scale(yRange);
  };

  chart.append("g").attr("class", "grid").attr("transform", "translate(" + MARGINS.left + ",0)").call(makeYLines().tickSize(-WIDTH, 0, 0).tickFormat(""));
  vis.append("svg:g").attr("class", "x axis").attr("transform", "translate(" + MARGINS.left + "," + (HEIGHT - MARGINS.bottom) + ")").call(xAxis);
  vis.append("svg:g").attr("class", "y axis").attr("transform", "translate(" + MARGINS.left + ",0)").call(yAxis);
  var lineFunc = d3.line().x(function (d) {
    return xRange(d.date);
  }).y(function (d) {
    return yRange(d.value);
  }).curve(d3.curveBasis);
  var path = vis.append("svg:path").attr("d", lineFunc(lineData)).attr("stroke", "blue").attr("stroke-width", 2).attr("fill", "none").attr("transform", "translate(" + MARGINS.left + ",0)");
  var totalLength = path.node().getTotalLength();
  path.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(4000).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
  svg.append("text").attr("class", "title3").attr("x", WIDTH / 2 + 80).attr("y", 40).attr("text-anchor", "middle").text("Thermo power usage in ".concat(actual.country, " throughout the years"));
  svg.append("text").attr("class", "label3").attr("x", -(HEIGHT / 2) - 80).attr("y", 80 / 2.4).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text("Out of total electricity genration (%)");
  svg.append("text").attr("class", "back3").attr("x", WIDTH / 10).attr("y", 40).attr("text-anchor", "middle").text("Back").on("click", function (actual, i) {
    d3.selectAll(".chart3").remove();
    level1();
  });
}

function level3() {
  var svgContainer = d3.select("#container3");
  var svg = svgContainer.append("svg").attr("class", "chart3");
  MARGINS = 80, WIDTH = 1000 - 2 * MARGINS, HEIGHT = 600 - 2 * MARGINS, MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  }, svg.append("foreignObject").attr("class", "graph-title3").attr("width", WIDTH).attr("height", 600).attr("x", 50).attr("y", 0).append("xhtml:body").style("font", "14px 'Helvetica Neue'").html("<h1>Thermoelectricity</h1><div><div><p>Thermoelectricity, also called Peltier-Seebeck effect, direct conversion of heat into electricity or electricity into heat through two related mechanisms, the Seebeck effect and the Peltier effect.</p> <p>A thermoelectric device creates a voltage when there is a different temperature on each side. Conversely, when a voltage is applied to it, heat is transferred from one side to the other, creating a temperature difference. At the atomic scale, an applied temperature gradient causes charge carriers in the material to diffuse from the hot side to the cold side.This effect can be used to generate electricity, measure temperature or change the temperature of objects. <p> </p></div><div class='graph-div3'></div></div>");
  svg.append("text").attr("class", "back4").attr("x", WIDTH / 10).attr("y", 50).attr("text-anchor", "middle").text("Back").on("click", function () {
    d3.selectAll(".chart3").remove();
    level1();
  });
}

window.addEventListener("DOMContentLoaded", function () {
  var h = document.getElementById("what4");

  h.onclick = function () {
    level1();
  };
});

/***/ }),

/***/ "./src/wind.js":
/*!*********************!*\
  !*** ./src/wind.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

var sample = [{
  country: "Russia",
  value: 1,
  color: "#000000",
  prodH: [12, 15, 18, 9, 16.0],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 0
  }, {
    date: 2003,
    value: 0
  }, {
    date: 2005,
    value: 0.3
  }, {
    date: 2009,
    value: 2
  }, {
    date: 2014,
    value: 0.05
  }, {
    date: 2019,
    value: 0.1
  }]
}, {
  country: "Canada",
  value: 2.9,
  color: "#00a2ee",
  prodH: [45, 32, 58, 65, 60],
  dataset: [{
    date: 1993,
    value: 1
  }, {
    date: 1998,
    value: 1
  }, {
    date: 2003,
    value: 1
  }, {
    date: 2005,
    value: 1.5
  }, {
    date: 2009,
    value: 2.5
  }, {
    date: 2014,
    value: 2
  }, {
    date: 2019,
    value: 2.9
  }]
}, {
  country: "China",
  value: 6.3,
  color: "#fbcb39",
  prodH: [8, 11, 15, 18, 20],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 0.5
  }, {
    date: 2003,
    value: 0.8
  }, {
    date: 2005,
    value: 1
  }, {
    date: 2009,
    value: 3
  }, {
    date: 2014,
    value: 4.2
  }, {
    date: 2019,
    value: 6.33
  }]
}, {
  country: "United States",
  value: 7.3,
  color: "#007bc8",
  prodH: [1, 3, 5, 10, 7],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 2
  }, {
    date: 2003,
    value: 3
  }, {
    date: 2005,
    value: 5.5
  }, {
    date: 2009,
    value: 5.8
  }, {
    date: 2014,
    value: 7
  }, {
    date: 2019,
    value: 7.3
  }]
}, {
  country: "Brazil",
  value: 2.8,
  color: "#65cedb",
  prodH: [40, 48, 32, 55, 70],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 2
  }, {
    date: 2003,
    value: 3
  }, {
    date: 2005,
    value: 5.5
  }, {
    date: 2009,
    value: 5.8
  }, {
    date: 2014,
    value: 4
  }, {
    date: 2019,
    value: 2.8
  }]
}, {
  country: "Australia",
  value: 7,
  color: "#ff6e52",
  prodH: [1, 3, 5, 10, 7],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 2
  }, {
    date: 2003,
    value: 3
  }, {
    date: 2005,
    value: 5.5
  }, {
    date: 2009,
    value: 5.8
  }, {
    date: 2014,
    value: 7
  }, {
    date: 2019,
    value: 7
  }]
}, {
  country: "India",
  value: 4.6,
  color: "#f9de3f",
  prodH: [8, 11, 15, 18, 26],
  dataset: [{
    date: 1993,
    value: 1
  }, {
    date: 1998,
    value: 1
  }, {
    date: 2003,
    value: 1
  }, {
    date: 2005,
    value: 2.8
  }, {
    date: 2009,
    value: 5
  }, {
    date: 2014,
    value: 3
  }, {
    date: 2019,
    value: 4.6
  }]
}, {
  country: "Argentina",
  value: 1,
  color: "#5d2f8e",
  prodH: [1, 3, 5, 10, 7.3],
  dataset: [{
    date: 1993,
    value: 0
  }, {
    date: 1998,
    value: 0
  }, {
    date: 2003,
    value: 0
  }, {
    date: 2005,
    value: 0.5
  }, {
    date: 2009,
    value: 0.5
  }, {
    date: 2014,
    value: 0.8
  }, {
    date: 2019,
    value: 1
  }]
}, {
  country: "Kazakhstan",
  value: 3.2,
  color: "#008fc9",
  prodH: [12, 15, 18, 9, 16.0],
  dataset: [{
    date: 1993,
    value: 1
  }, {
    date: 1998,
    value: 1
  }, {
    date: 2003,
    value: 1
  }, {
    date: 2005,
    value: 1.5
  }, {
    date: 2009,
    value: 2.5
  }, {
    date: 2014,
    value: 2
  }, {
    date: 2019,
    value: 3.2
  }]
}];
var years = [2000, 2005, 2010, 2015, 2020];

function level1() {
  var svgContainer = d3.select("#container1");
  var svg = svgContainer.append("svg").attr("class", "chart1");
  var margin = 80;
  var width = 1000 - 2 * margin;
  var height = 600 - 2 * margin;
  var chart = svg.append("g").attr("transform", "translate(".concat(margin, ", ").concat(margin, ")"));
  var xScale = d3.scaleBand().range([0, width]).domain(sample.map(function (s) {
    return s.country;
  })).padding(0.4);
  var yScale = d3.scaleLinear().range([height, 0]).domain([0, 10]);

  var makeYLines = function makeYLines() {
    return d3.axisLeft().scale(yScale);
  };

  chart.append("g").attr("transform", "translate(0, ".concat(height, ")")).call(d3.axisBottom(xScale));
  chart.append("g").call(d3.axisLeft(yScale));
  chart.append("g").attr("class", "grid").call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));
  var barGroups = chart.selectAll().data(sample).enter().append("g");
  barGroups.append("rect").attr("class", "bar1").attr("x", function (d) {
    return xScale(d.country);
  }).attr("width", xScale.bandwidth()).attr("height", 0).transition().duration(500).delay(function (d, i) {
    return i * 50;
  }).attr("y", function (d) {
    return yScale(d.value);
  }).attr("height", function (d) {
    return height - yScale(d.value);
  });
  d3.selectAll(".bar1").on("click", function (actual, i) {
    d3.selectAll(".chart1").remove();
    level2(actual);
  }).on("mouseenter", function (actual, i) {
    d3.selectAll(".value").attr("opacity", 0);
    d3.select(this).transition().duration(300).attr("opacity", 0.6).attr("x", function (a) {
      return xScale(a.country) - 5;
    }).attr("width", xScale.bandwidth() + 10);
    var y = yScale(actual.value);
    var line = chart.append("line").attr("id", "limit").attr("x1", 0).attr("y1", y).attr("x2", width).attr("y2", y);
    barGroups.append("text").attr("class", "divergence").attr("x", function (a) {
      return xScale(a.country) + xScale.bandwidth() / 2;
    }).attr("y", function (a) {
      return yScale(a.value) - 10;
    }).attr("text-anchor", "middle").text(function (a, idx) {
      var divergence = (a.value - actual.value).toFixed(1);
      var text = "";
      if (divergence > 0) text += "+";
      text += "".concat(divergence, "%");
      return idx !== i ? text : "".concat(actual.country, ", ").concat(actual.value, "%");
    });
  }).on("mouseleave", function () {
    d3.selectAll(".value").attr("opacity", 1);
    d3.select(this).transition().duration(300).attr("opacity", 1).attr("x", function (a) {
      return xScale(a.country);
    }).attr("width", xScale.bandwidth());
    chart.selectAll("#limit").remove();
    chart.selectAll(".divergence").remove();
  });
  var text = barGroups.append("text").attr("class", "value").attr("x", function (a) {
    return xScale(a.country) + xScale.bandwidth() / 2;
  }).attr("y", function (a) {
    return yScale(a.value) - 5;
  }).attr("y", function (d) {
    return height;
  }).attr("height", 0).transition().duration(300).delay(function (d, i) {
    return i * 50;
  }).attr("y", function (d) {
    return yScale(d.value) - 20;
  }).attr("height", function (d) {
    return height - yScale(d.value);
  }).attr("height", function (a) {
    return a.value;
  }).attr("text-anchor", "middle").text(0);
  text.transition().tween("text", function () {
    var selection = d3.select(this);
    var start = d3.select(this).text();
    var end = this.getAttribute("height");
    var interpolator = d3.interpolateNumber(end, end);
    return function (t) {
      selection.text(Math.round(interpolator(t)));
    };
  }).duration(3000);
  svg.append("text").attr("class", "label").attr("x", -(height / 2) - margin).attr("y", margin / 2.4).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text("Out of total electricity genration (%)");
  svg.append("text").attr("class", "title").attr("x", width / 2 + margin).attr("y", 40).attr("text-anchor", "middle").text("Electricity generation by wind power in 2019");
  svg.append("text").attr("class", "back2").attr("x", width / 10).attr("y", 40).attr("text-anchor", "middle").text("Click to find out more").on("click", function (actual, i) {
    d3.selectAll(".chart1").remove();
    level3();
  });
}

function level2(actual) {
  var lineData = actual.dataset;
  console.log(lineData);
  var margin = 80;
  var svgContainer = d3.select("#container1");
  var svg = svgContainer.append("svg").attr("class", "chart1");
  var chart = svg.append("g").attr("id", "visualisation").attr("transform", "translate(".concat(margin / 2, ", ").concat(margin, ")"));
  var vis = d3.select("#visualisation"),
      MARGINS = 80,
      WIDTH = 1000 - 2 * MARGINS,
      HEIGHT = 600 - 2 * MARGINS,
      MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  },
      xRange = d3.scaleLinear().range([0, WIDTH]).domain(d3.extent(lineData, function (dataPoint) {
    return dataPoint.date;
  })),
      yRange = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, d3.max(lineData, function (d) {
    return d.value;
  })]),
      xAxis = d3.axisBottom().scale(xRange),
      yAxis = d3.axisLeft().scale(yRange);

  var makeYLines = function makeYLines() {
    return d3.axisLeft().scale(yRange);
  };

  chart.append("g").attr("class", "grid").attr("transform", "translate(" + MARGINS.left + ",0)").call(makeYLines().tickSize(-WIDTH, 0, 0).tickFormat(""));
  vis.append("svg:g").attr("class", "x axis").attr("transform", "translate(" + MARGINS.left + "," + (HEIGHT - MARGINS.bottom) + ")").call(xAxis);
  vis.append("svg:g").attr("class", "y axis").attr("transform", "translate(" + MARGINS.left + ",0)").call(yAxis);
  var lineFunc = d3.line().x(function (d) {
    return xRange(d.date);
  }).y(function (d) {
    return yRange(d.value);
  }).curve(d3.curveBasis);
  var path = vis.append("svg:path").attr("class", "path1").attr("d", lineFunc(lineData)).attr("stroke", "blue").attr("stroke-width", 2).attr("fill", "none").attr("transform", "translate(" + MARGINS.left + ",0)");
  var totalLength = path.node().getTotalLength();
  path.attr("stroke-dasharray", totalLength + " " + totalLength).attr("stroke-dashoffset", totalLength).transition().duration(4000).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
  svg.append("text").attr("class", "title").attr("x", WIDTH / 2 + 80).attr("y", 40).attr("text-anchor", "middle").text("Wind power usage in ".concat(actual.country, " throughout the years"));
  svg.append("text").attr("class", "label").attr("x", -(HEIGHT / 2) - 80).attr("y", 80 / 2.4).attr("transform", "rotate(-90)").attr("text-anchor", "middle").text("Out of total electricity genration (%)");
  svg.append("text").attr("class", "back3").attr("x", WIDTH / 10).attr("y", 40).attr("text-anchor", "middle").text("Back").on("click", function (actual, i) {
    d3.selectAll(".chart1").remove();
    level1();
  });
}

function level3() {
  var svgContainer = d3.select("#container1");
  var svg = svgContainer.append("svg").attr("class", "chart1");
  MARGINS = 80, WIDTH = 1000 - 2 * MARGINS, HEIGHT = 600 - 2 * MARGINS, MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  }, svg.append("text").attr("class", "back4").attr("x", WIDTH / 10).attr("y", 650).attr("text-anchor", "middle").text("Back").on("click", function () {
    d3.selectAll(".chart1").remove();
    level1();
  });
  svg.append("foreignObject").attr("class", "graph-title1").attr("width", WIDTH).attr("height", 600).attr("x", 50).attr("y", 0).append("xhtml:body").style("font", "14px 'Helvetica Neue'").html("<h1>Wind Power</h1><div><div><p>Wind power or wind energy is the use of wind to provide the mechanical power through wind turbines to turn electric generators and traditionally to do other work, like milling or pumping.</p><p>When the wind blows past a wind turbine, its blades capture the wind's kinetic energy and rotate, turning it into mechanical energy. This rotation turns an internal shaft connected to a gearbox, which increases the speed of rotation by a factor of 100. That spins a generator that produces electricity.<p> </p></div><div class='graph-div1'></div></div>");
}

window.addEventListener("DOMContentLoaded", function () {
  var h = document.getElementById("what3");

  h.onclick = function () {
    level1();
  };
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h5ZHJvLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29sYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZXJtby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2luZC5qcyJdLCJuYW1lcyI6WyJzYW1wbGUiLCJjb3VudHJ5IiwidmFsdWUiLCJjb2xvciIsInByb2RIIiwiZGF0YXNldCIsImRhdGUiLCJ5ZWFycyIsImxldmVsMSIsInN2Z0NvbnRhaW5lciIsImQzIiwic2VsZWN0Iiwic3ZnIiwiYXBwZW5kIiwiYXR0ciIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiY2hhcnQiLCJ4U2NhbGUiLCJzY2FsZUJhbmQiLCJyYW5nZSIsImRvbWFpbiIsIm1hcCIsInMiLCJwYWRkaW5nIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJtYWtlWUxpbmVzIiwiYXhpc0xlZnQiLCJzY2FsZSIsImNhbGwiLCJheGlzQm90dG9tIiwidGlja1NpemUiLCJ0aWNrRm9ybWF0IiwiYmFyR3JvdXBzIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiZCIsImJhbmR3aWR0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiaSIsIm9uIiwiYWN0dWFsIiwicmVtb3ZlIiwibGV2ZWwyIiwiYSIsInkiLCJsaW5lIiwidGV4dCIsImlkeCIsImRpdmVyZ2VuY2UiLCJ0b0ZpeGVkIiwidHdlZW4iLCJzZWxlY3Rpb24iLCJzdGFydCIsImVuZCIsImdldEF0dHJpYnV0ZSIsImludGVycG9sYXRvciIsImludGVycG9sYXRlTnVtYmVyIiwidCIsIk1hdGgiLCJyb3VuZCIsImxldmVsMyIsImxpbmVEYXRhIiwiY29uc29sZSIsImxvZyIsInZpcyIsIk1BUkdJTlMiLCJXSURUSCIsIkhFSUdIVCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInhSYW5nZSIsImV4dGVudCIsImRhdGFQb2ludCIsInlSYW5nZSIsIm1heCIsInhBeGlzIiwieUF4aXMiLCJsaW5lRnVuYyIsIngiLCJjdXJ2ZSIsImN1cnZlQmFzaXMiLCJwYXRoIiwidG90YWxMZW5ndGgiLCJub2RlIiwiZ2V0VG90YWxMZW5ndGgiLCJlYXNlIiwiZWFzZUxpbmVhciIsInN0eWxlIiwiaHRtbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siLCJtb2RhbCIsImh5ZHJvTW9kYWwiLCJ0aGVybW9Nb2RhbCIsInNvbGFyTW9kYWwiLCJzb3VuZCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJidG4iLCJoYnRuIiwidGJ0biIsInNidG4iLCJ3YnRuIiwic3BhbiIsInNwYW5XIiwic3BhblMiLCJzcGFuVCIsInNwYW5IIiwiZGlzcGxheSIsImN1cnJlbnRUaW1lIiwicGxheSIsIndpbmRNb2RhbCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXZlbnQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFD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T0FBeEIsQ0FBUjs7QUFDQUYsR0FBQyxDQUFDRyxPQUFGLEdBQVksWUFBWTtBQUN0QjlGLFVBQU07QUFDUCxHQUZEO0FBR0QsQ0FMRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IHNhbXBsZSA9IFtcbiAge1xuICAgIGNvdW50cnk6IFwiUnVzc2lhXCIsXG4gICAgdmFsdWU6IDE5Ljk1LFxuICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICBwcm9kSDogWzEyLCAxNSwgMTgsIDksIDE2LjBdLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDIgfSxcbiAgICAgIHsgZGF0ZTogMTk5OCwgdmFsdWU6IDMgfSxcbiAgICAgIHsgZGF0ZTogMjAwMywgdmFsdWU6IDggfSxcbiAgICAgIHsgZGF0ZTogMjAwNSwgdmFsdWU6IDE3IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiAxMiB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogMTcgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDE5Ljk1IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiQ2FuYWRhXCIsXG4gICAgdmFsdWU6IDYxLjMsXG4gICAgY29sb3I6IFwiIzAwYTJlZVwiLFxuICAgIHByb2RIOiBbNDUsIDMyLCA1OCwgNjUsIDYwXSxcbiAgICBkYXRhc2V0OiBbXG4gICAgICB7IGRhdGU6IDE5OTMsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiA4IH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiAzMCB9LFxuICAgICAgeyBkYXRlOiAyMDA5LCB2YWx1ZTogNDUgfSxcbiAgICAgIHsgZGF0ZTogMjAxNCwgdmFsdWU6IDQyIH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiA2MS4zIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiQ2hpbmFcIixcbiAgICB2YWx1ZTogMjAuMCxcbiAgICBjb2xvcjogXCIjZmJjYjM5XCIsXG4gICAgcHJvZEg6IFs4LCAxMSwgMTUsIDE4LCAyMF0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMyB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogNCB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogNyB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMjYgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDExIH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiAxNiB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogMjAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJVbml0ZWQgU3RhdGVzXCIsXG4gICAgdmFsdWU6IDYuNixcbiAgICBjb2xvcjogXCIjMDA3YmM4XCIsXG4gICAgcHJvZEg6IFsxLCAzLCA1LCAxMCwgN10sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMiB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMyB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogNSB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMTAgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDE1IH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiAxMiB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogNi42IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiQnJhemlsXCIsXG4gICAgdmFsdWU6IDY1LjAsXG4gICAgY29sb3I6IFwiIzY1Y2VkYlwiLFxuICAgIHByb2RIOiBbNDAsIDQ4LCAzMiwgNTUsIDcwXSxcbiAgICBkYXRhc2V0OiBbXG4gICAgICB7IGRhdGU6IDE5OTMsIHZhbHVlOiAxNiB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMjAgfSxcbiAgICAgIHsgZGF0ZTogMjAwMywgdmFsdWU6IDM2IH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiA1MCB9LFxuICAgICAgeyBkYXRlOiAyMDA5LCB2YWx1ZTogMjkgfSxcbiAgICAgIHsgZGF0ZTogMjAxNCwgdmFsdWU6IDQ2IH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiA2NSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3VudHJ5OiBcIkF1c3RyYWxpYVwiLFxuICAgIHZhbHVlOiA1LFxuICAgIGNvbG9yOiBcIiNmZjZlNTJcIixcbiAgICBwcm9kSDogWzEsIDMsIDUsIDEwLCA3XSxcbiAgICBkYXRhc2V0OiBbXG4gICAgICB7IGRhdGU6IDE5OTMsIHZhbHVlOiA2IH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiA1IH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiA2IH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiA5IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiAyIH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiAzIH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiA1IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiSW5kaWFcIixcbiAgICB2YWx1ZTogMjYuMCxcbiAgICBjb2xvcjogXCIjZjlkZTNmXCIsXG4gICAgcHJvZEg6IFs4LCAxMSwgMTUsIDE4LCAyNl0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMiB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogOSB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMTUgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDExIH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiAxOSB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogMjYgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJBcmdlbnRpbmFcIixcbiAgICB2YWx1ZTogMzYsXG4gICAgY29sb3I6IFwiIzVkMmY4ZVwiLFxuICAgIHByb2RIOiBbMSwgMywgNSwgMTAsIDcuM10sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogNSB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMyB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogOCB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMjAgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDI3IH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiAyMyB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogMzYgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJLYXpha2hzdGFuXCIsXG4gICAgdmFsdWU6IDEzLjAsXG4gICAgY29sb3I6IFwiIzAwOGZjOVwiLFxuICAgIHByb2RIOiBbMTIsIDE1LCAxOCwgOSwgMTYuMF0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogNSB9LFxuICAgICAgeyBkYXRlOiAyMDA5LCB2YWx1ZTogOSB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogMTggfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDEzIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmNvbnN0IHllYXJzID0gWzIwMDAsMjAwNSwgMjAxMCwgMjAxNSwgMjAyMF1cblxuXG5mdW5jdGlvbiBsZXZlbDEoKSB7XG5cbmNvbnN0IHN2Z0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNjb250YWluZXJcIik7XG5jb25zdCBzdmcgPSBzdmdDb250YWluZXIuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpO1xuXG5jb25zdCBtYXJnaW4gPSA4MDtcbmNvbnN0IHdpZHRoID0gMTAwMCAtIDIgKiBtYXJnaW47XG5jb25zdCBoZWlnaHQgPSA2MDAgLSAyICogbWFyZ2luO1xuXG5jb25zdCBjaGFydCA9IHN2Z1xuICAuYXBwZW5kKFwiZ1wiKVxuICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2lufSwgJHttYXJnaW59KWApO1xuXG5jb25zdCB4U2NhbGUgPSBkM1xuICAuc2NhbGVCYW5kKClcbiAgLnJhbmdlKFswLCB3aWR0aF0pXG4gIC5kb21haW4oc2FtcGxlLm1hcCgocykgPT4gcy5jb3VudHJ5KSlcbiAgLnBhZGRpbmcoMC40KTtcblxuY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKFswLCA3MF0pO1xuXG5jb25zdCBtYWtlWUxpbmVzID0gKCkgPT4gZDMuYXhpc0xlZnQoKS5zY2FsZSh5U2NhbGUpO1xuXG5jaGFydFxuICAuYXBwZW5kKFwiZ1wiKVxuICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7aGVpZ2h0fSlgKVxuICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpO1xuXG5jaGFydC5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKSk7XG5cbmNoYXJ0XG4gIC5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwiY2xhc3NcIiwgXCJncmlkXCIpXG4gIC5jYWxsKG1ha2VZTGluZXMoKS50aWNrU2l6ZSgtd2lkdGgsIDAsIDApLnRpY2tGb3JtYXQoXCJcIikpO1xuXG5jb25zdCBiYXJHcm91cHMgPSBjaGFydC5zZWxlY3RBbGwoKS5kYXRhKHNhbXBsZSkuZW50ZXIoKS5hcHBlbmQoXCJnXCIpO1xuXG5iYXJHcm91cHNcbiAgLmFwcGVuZChcInJlY3RcIilcbiAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAuYXR0cihcInhcIiwgIGQgPT4geyByZXR1cm4geFNjYWxlKGQuY291bnRyeSk7IH0pXG4gIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAuYXR0cihcImhlaWdodFwiLCAwKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKS5kZWxheShmdW5jdGlvbiAoZCwgaSkge3JldHVybiBpICogNTA7fSlcbiAgLmF0dHIoXCJ5XCIsICBkID0+IHsgcmV0dXJuIHlTY2FsZShkLnZhbHVlKTsgfSlcbiAgLmF0dHIoXCJoZWlnaHRcIiwgIGQgPT4geyByZXR1cm4gaGVpZ2h0IC0geVNjYWxlKGQudmFsdWUpOyB9KVxuXG5kMy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGFjdHVhbCwgaSkge1xuICAgIGQzLnNlbGVjdEFsbChcIi5jaGFydFwiKS5yZW1vdmUoKTtcbiAgICBsZXZlbDIoYWN0dWFsKTtcblxuICB9KVxuICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uIChhY3R1YWwsIGkpXG4gICAge1xuICAgXG5cbiAgICBkMy5zZWxlY3RBbGwoXCIudmFsdWVcIikuYXR0cihcIm9wYWNpdHlcIiwgMCk7XG5cbiAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMC42KVxuICAgICAgLmF0dHIoXCJ4XCIsIChhKSA9PiB4U2NhbGUoYS5jb3VudHJ5KSAtIDUpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHhTY2FsZS5iYW5kd2lkdGgoKSArIDEwKTtcblxuICAgIGNvbnN0IHkgPSB5U2NhbGUoYWN0dWFsLnZhbHVlKTtcblxuICAgIGNvbnN0IGxpbmUgPSBjaGFydFxuICAgICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAgIC5hdHRyKFwiaWRcIiwgXCJsaW1pdFwiKVxuICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgLmF0dHIoXCJ5MVwiLCB5KVxuICAgICAgLmF0dHIoXCJ4MlwiLCB3aWR0aClcbiAgICAgIC5hdHRyKFwieTJcIiwgeSk7XG5cbiAgICBiYXJHcm91cHNcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiZGl2ZXJnZW5jZVwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIChhKSA9PiB4U2NhbGUoYS5jb3VudHJ5KSArIHhTY2FsZS5iYW5kd2lkdGgoKSAvIDIpXG4gICAgICAuYXR0cihcInlcIiwgKGEpID0+IHlTY2FsZShhLnZhbHVlKSAtIDEwKVxuIFxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoKGEsIGlkeCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZlcmdlbmNlID0gKGEudmFsdWUgLSBhY3R1YWwudmFsdWUpLnRvRml4ZWQoMSk7XG5cbiAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xuICAgICAgICBpZiAoZGl2ZXJnZW5jZSA+IDApIHRleHQgKz0gXCIrXCI7XG4gICAgICAgIHRleHQgKz0gYCR7ZGl2ZXJnZW5jZX0lYDtcblxuICAgICAgICByZXR1cm4gaWR4ICE9PSBpXG4gICAgICAgICAgPyB0ZXh0XG4gICAgICAgICAgOiBgJHthY3R1YWwuY291bnRyeX0sICR7YWN0dWFsLnZhbHVlfSVgO1xuICAgICAgfSk7XG4gICAgXG4gIH0pXG4gIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGQzLnNlbGVjdEFsbChcIi52YWx1ZVwiKS5hdHRyKFwib3BhY2l0eVwiLCAxKTtcblxuICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAxKVxuICAgICAgLmF0dHIoXCJ4XCIsIChhKSA9PiB4U2NhbGUoYS5jb3VudHJ5KSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKTtcblxuICAgIGNoYXJ0LnNlbGVjdEFsbChcIiNsaW1pdFwiKS5yZW1vdmUoKTtcbiAgICBjaGFydC5zZWxlY3RBbGwoXCIuZGl2ZXJnZW5jZVwiKS5yZW1vdmUoKTtcbiAgfSk7XG5cblxuXG5sZXQgdGV4dCA9IGJhckdyb3Vwc1xuICAuYXBwZW5kKFwidGV4dFwiKVxuICAuYXR0cihcImNsYXNzXCIsIFwidmFsdWVcIilcbiAgLmF0dHIoXCJ4XCIsIChhKSA9PiB4U2NhbGUoYS5jb3VudHJ5KSArIHhTY2FsZS5iYW5kd2lkdGgoKSAvIDIpXG4gIC5hdHRyKFwieVwiLCAoYSkgPT4geVNjYWxlKGEudmFsdWUpIC0gNSlcbiAgLmF0dHIoXCJ5XCIsICBkID0+IHsgcmV0dXJuIGhlaWdodCA7IH0pXG4gIC5hdHRyKFwiaGVpZ2h0XCIsIDApXG4gIC50cmFuc2l0aW9uKClcbiAgLmR1cmF0aW9uKDUwMClcbiAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgcmV0dXJuIGkgKiA1MDtcbiAgfSlcbiAgLmF0dHIoXCJ5XCIsIChkKSA9PiB7XG4gICAgcmV0dXJuIHlTY2FsZShkLnZhbHVlKSAtIDIwO1xuICB9KVxuICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4ge1xuICAgIHJldHVybiBoZWlnaHQgLSB5U2NhbGUoZC52YWx1ZSk7XG4gIH0pXG4gIC5hdHRyKFwiaGVpZ2h0XCIsIChhKSA9PiBhLnZhbHVlKVxuICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gIC50ZXh0KDApO1xuXG5cbiAgdGV4dFxuICAgIC50cmFuc2l0aW9uKClcbiAgICAudHdlZW4oXCJ0ZXh0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSBkMy5zZWxlY3QodGhpcyk7IFxuICAgICAgdmFyIHN0YXJ0ID0gZDMuc2VsZWN0KHRoaXMpLnRleHQoKTsgXG4gICAgICB2YXIgZW5kID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIik7IFxuICAgICAgdmFyIGludGVycG9sYXRvciA9IGQzLmludGVycG9sYXRlTnVtYmVyKHN0YXJ0LCBlbmQpOyBcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICBzZWxlY3Rpb24udGV4dChNYXRoLnJvdW5kKGludGVycG9sYXRvcih0KSkpO1xuICAgICAgfTsgXG4gICAgfSlcbiAgICAuZHVyYXRpb24oMzAwMCk7IFxuXG5zdmdcbiAgLmFwcGVuZChcInRleHRcIilcbiAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsXCIpXG4gIC5hdHRyKFwieFwiLCAtKGhlaWdodCAvIDIpIC0gbWFyZ2luKVxuICAuYXR0cihcInlcIiwgbWFyZ2luIC8gMi40KVxuICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgLnRleHQoXCJPdXQgb2YgdG90YWwgZWxlY3RyaWNpdHkgZ2VucmF0aW9uICglKVwiKTtcblxuc3ZnXG4gIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZVwiKVxuICAuYXR0cihcInhcIiwgd2lkdGggLyAyICsgbWFyZ2luKVxuICAuYXR0cihcInlcIiwgNDApXG4gIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgLnRleHQoXCJFbGVjdHJpY2l0eSBnZW5lcmF0aW9uIGJ5IGh5ZHJvcG93ZXIgaW4gMjAxOVwiKTtcblxuc3ZnXG4gIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrMlwiKVxuICAuYXR0cihcInhcIiwgd2lkdGggLyAxMClcbiAgLmF0dHIoXCJ5XCIsIDQwKVxuICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gIC50ZXh0KFwiQ2xpY2sgdG8gZmluZCBvdXQgbW9yZVwiKVxuICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoYWN0dWFsLCBpKSB7XG4gICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0XCIpLnJlbW92ZSgpO1xuICAgIGxldmVsMygpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbGV2ZWwyKGFjdHVhbCkge1xuICAgIGNvbnN0IGxpbmVEYXRhID0gYWN0dWFsLmRhdGFzZXRcbiAgICBjb25zb2xlLmxvZyhsaW5lRGF0YSlcbiAgICBjb25zdCBtYXJnaW4gPSA4MDtcblxuXG4gICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzdmcgPSBzdmdDb250YWluZXIuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpXG5cbiAgICBjb25zdCBjaGFydCA9IHN2Z1xuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiaWRcIiwgXCJ2aXN1YWxpc2F0aW9uXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLzJ9LCAke21hcmdpbn0pYCk7XG5cbiAgICB2YXIgdmlzID0gZDMuc2VsZWN0KFwiI3Zpc3VhbGlzYXRpb25cIiksXG4gICAgICBNQVJHSU5TID0gODAsXG4gICAgICBXSURUSCA9IDEwMDAgLSAyICogTUFSR0lOUyxcbiAgICAgIEhFSUdIVCA9IDYwMCAtIDIgKiBNQVJHSU5TLFxuICAgICAgTUFSR0lOUyA9IHtcbiAgICAgICAgdG9wOiAyMCxcbiAgICAgICAgcmlnaHQ6IDIwLFxuICAgICAgICBib3R0b206IDIwLFxuICAgICAgICBsZWZ0OiA1MCxcbiAgICAgIH0sXG5cbiAgICAgIHhSYW5nZSA9IGQzXG4gICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFswLCBXSURUSF0pXG4gICAgICAuZG9tYWluKGQzLmV4dGVudChsaW5lRGF0YSwgZGF0YVBvaW50ID0+IGRhdGFQb2ludC5kYXRlKSksXG4gICAgICB5UmFuZ2UgPSBkM1xuICAgICAgICAuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoW0hFSUdIVCAtIE1BUkdJTlMudG9wLCBNQVJHSU5TLmJvdHRvbV0pXG4gICAgICAgIC5kb21haW4oW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgZDMubWF4KGxpbmVEYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQudmFsdWU7XG4gICAgICAgICAgfSksXG4gICAgICAgIF0pLFxuICAgICAgeEF4aXMgPSBkMy5heGlzQm90dG9tKCkuc2NhbGUoeFJhbmdlKSxcbiAgICAgIHlBeGlzID0gZDMuYXhpc0xlZnQoKS5zY2FsZSh5UmFuZ2UpO1xuXG4gICAgICBjb25zdCBtYWtlWUxpbmVzID0gKCkgPT4gZDMuYXhpc0xlZnQoKS5zY2FsZSh5UmFuZ2UpO1xuXG4gICAgICBjaGFydFxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JpZFwiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCAgKyBcIiwwKVwiKVxuICAgICAgICAuY2FsbChtYWtlWUxpbmVzKCkudGlja1NpemUoLVdJRFRILCAwLCAwKS50aWNrRm9ybWF0KFwiXCIpKTtcblxuXG4gICAgdmlzXG4gICAgICAuYXBwZW5kKFwic3ZnOmdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGF4aXNcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiK01BUkdJTlMubGVmdCArXCIsXCIgKyAoSEVJR0hUIC0gTUFSR0lOUy5ib3R0b20pICsgXCIpXCIpXG4gICAgICAuY2FsbCh4QXhpcyk7XG5cbiAgICB2aXNcbiAgICAgIC5hcHBlbmQoXCJzdmc6Z1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInkgYXhpc1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBNQVJHSU5TLmxlZnQgKyBcIiwwKVwiKVxuICAgICAgLmNhbGwoeUF4aXMpO1xuXG4gICAgdmFyIGxpbmVGdW5jID0gZDNcbiAgICAgIC5saW5lKClcbiAgICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiB4UmFuZ2UoZC5kYXRlKTtcbiAgICAgIH0pXG4gICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geVJhbmdlKGQudmFsdWUpO1xuICAgICAgfSlcbiAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKTtcbiAgICBcblxuICAgIGNvbnN0IHBhdGggPSB2aXNcbiAgICAgIC5hcHBlbmQoXCJzdmc6cGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInBhdGhcIilcbiAgICAgIC5hdHRyKFwiZFwiLCBsaW5lRnVuYyhsaW5lRGF0YSkpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsdWVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCArIFwiLDApXCIpO1xuXG4gICAgbGV0IHRvdGFsTGVuZ3RoID0gcGF0aC5ub2RlKCkuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHBhdGhcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIHRvdGFsTGVuZ3RoKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDQwMDApXG4gICAgICAuZWFzZShkMy5lYXNlTGluZWFyKVxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCAwKTsgXG5cblxuICAgICAgc3ZnXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpdGxlXCIpXG4gICAgICAuYXR0cihcInhcIiwgV0lEVEggLyAyICsgODApXG4gICAgICAuYXR0cihcInlcIiwgNDApXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChgSHlkcm8gcG93ZXIgdXNhZ2UgaW4gJHthY3R1YWwuY291bnRyeX0gdGhyb3VnaG91dCB0aGUgeWVhcnNgKTtcblxuICAgIHN2Z1xuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIC0oSEVJR0hUIC8gMikgLSA4MClcbiAgICAgIC5hdHRyKFwieVwiLCA4MC8gMi40KVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgLnRleHQoXCJPdXQgb2YgdG90YWwgZWxlY3RyaWNpdHkgZ2VucmF0aW9uICglKVwiKTtcblxuICAgIHN2Z1xuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrMlwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMTApXG4gICAgICAuYXR0cihcInlcIiwgNDApXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkJhY2tcIilcbiAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChhY3R1YWwsIGkpIHtcbiAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0XCIpLnJlbW92ZSgpO1xuICAgICAgICBsZXZlbDEoKTtcbiAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBsZXZlbDMoKSB7XG4gIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNjb250YWluZXJcIik7XG4gIGNvbnN0IHN2ZyA9IHN2Z0NvbnRhaW5lci5hcHBlbmQoXCJzdmdcIikuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIik7XG4gIChNQVJHSU5TID0gODApLFxuICAgIChXSURUSCA9IDEwMDAgLSAyICogTUFSR0lOUyksXG4gICAgKEhFSUdIVCA9IDYwMCAtIDIgKiBNQVJHSU5TKSxcbiAgICAoTUFSR0lOUyA9IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgbGVmdDogNTAsXG4gICAgfSksXG4gICAgc3ZnXG4gICAgICAuYXBwZW5kKFwiZm9yZWlnbk9iamVjdFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImdyYXBoLXRpdGxlXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgNjAwKVxuICAgICAgLmF0dHIoXCJ4XCIsIDUwKVxuICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAuYXBwZW5kKFwieGh0bWw6Ym9keVwiKVxuICAgICAgLnN0eWxlKFwiZm9udFwiLCBcIjE0cHggJ0hlbHZldGljYSBOZXVlJ1wiKVxuICAgICAgLmh0bWwoXG4gICAgICAgIFwiPGgxPkh5ZHJvZWxlY3RyaWNpdHk8L2gxPjxkaXY+PGRpdj48cD5IeWRyb2VuZXJneSBpcyBhIHJlbmV3YWJsZSB0eXBlIG9mIGVuZXJneSB0aGF0IHVzZXMgZmxvd2luZyB3YXRlciB0byBwb3dlciBhIHR1cmJpbmUgdG8gcHJvZHVjZSBlbGVjdHJpY2FsIGVuZXJneTwvcD48cD5UbyBnZW5lcmF0ZSBlbGVjdHJpY2l0eSwgd2F0ZXIgbXVzdCBiZSBpbiBtb3Rpb24uIFRoaXMgaXMga2luZXRpYyAobW92aW5nKSBlbmVyZ3kuIFdoZW4gZmxvd2luZyB3YXRlciB0dXJucyBibGFkZXMgaW4gYSB0dXJiaW5lLCB0aGUgZm9ybSBpcyBjaGFuZ2VkIHRvIG1lY2hhbmljYWwgKG1hY2hpbmUpIGVuZXJneS4gVGhlIHR1cmJpbmUgdHVybnMgdGhlIGdlbmVyYXRvciByb3RvciB3aGljaCB0aGVuIGNvbnZlcnRzIHRoaXMgbWVjaGFuaWNhbCBlbmVyZ3kgaW50byBhbm90aGVyIGVuZXJneSBmb3JtIC0tIGVsZWN0cmljaXR5LiBTaW5jZSB3YXRlciBpcyB0aGUgaW5pdGlhbCBzb3VyY2Ugb2YgZW5lcmd5LCB3ZSBjYWxsIHRoaXMgaHlkcm9lbGVjdHJpYyBwb3dlciBvciBoeWRyb3Bvd2VyIGZvciBzaG9ydC4gPC9wPjwvZGl2PjxkaXYgY2xhc3M9J2dyYXBoLWRpdic+PC9kaXY+PC9kaXY+XCIpO1xuICAgIFxuICAgIHN2Z1xuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrMlwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMTApXG4gICAgICAuYXR0cihcInlcIiwgNTApXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkJhY2tcIilcbiAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0XCIpLnJlbW92ZSgpO1xuICAgICAgICBsZXZlbDEoKTtcbiAgICAgIH0pO1xuXG5cblxuXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICBsZXQgaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2hhdDFcIik7XG4gIGgub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXZlbDEoKTtcbiAgfTtcbn0pO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9oeWRyby5qc1wiO1xuaW1wb3J0IFwiLi93aW5kLmpzXCI7XG5pbXBvcnQgXCIuL3NvbGFyLmpzXCI7XG5pbXBvcnQgXCIuL3RoZXJtby5qc1wiO1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XG4gICBsZXQgaHlkcm9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHlkcm9Nb2RhbFwiKTtcbiAgIGxldCB0aGVybW9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlcm1vTW9kYWxcIik7XG4gICBsZXQgc29sYXJNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29sYXJNb2RhbFwiKTtcbiAgIGxldCBzb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdWRpb1wiKTtcblxuICAgbGV0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlCdG5cIik7XG4gICBsZXQgaGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaEJ0blwiKTtcbiAgIGxldCB0YnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0QnRuXCIpO1xuICAgbGV0IHNidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNCdG5cIik7XG4gICBsZXQgd2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid0J0blwiKTtcblxuICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICBsZXQgc3BhblcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMV07XG4gICBsZXQgc3BhblMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMl07XG4gICBsZXQgc3BhblQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbM107XG4gICBsZXQgc3BhbkggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbNF07XG5cbiAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc291bmRbMF0uY3VycmVudFRpbWUgPSAwO1xuICAgICAgICBzb3VuZFswXS5wbGF5KCk7XG5cbiAgICB9XG5cbiAgICBoYnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh5ZHJvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICB0YnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoZXJtb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgc2J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzb2xhck1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgd2J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBzcGFuSC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBoeWRyb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgc3BhblQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhlcm1vTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxuICAgIHNwYW5TLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNvbGFyTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxuICAgIHNwYW5XLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCB8fCBldmVudC50YXJnZXQgPT0gaHlkcm9Nb2RhbCB8fCBldmVudC50YXJnZXQgPT09IHRoZXJtb01vZGFsIHx8IGV2ZW50LnRhcmdldCA9PT0gc29sYXJNb2RhbCB8fCBldmVudC50YXJnZXQgPT09IHdpbmRNb2RhbCkge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG4gIH0pO1xuXG5cbiIsImNvbnN0IHNhbXBsZSA9IFtcbiAge1xuICAgIGNvdW50cnk6IFwiUnVzc2lhXCIsXG4gICAgdmFsdWU6IDEsXG4gICAgY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgIHByb2RIOiBbMTIsIDE1LCAxOCwgOSwgMTYuMF0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMC4zIH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiAyIH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiAwLjA1IH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiAwLjQgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJDYW5hZGFcIixcbiAgICB2YWx1ZTogNS4yLFxuICAgIGNvbG9yOiBcIiMwMGEyZWVcIixcbiAgICBwcm9kSDogWzQ1LCAzMiwgNTgsIDY1LCA2MF0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMi44IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiA1IH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiAzIH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiA1LjIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJDaGluYVwiLFxuICAgIHZhbHVlOiAyLjUsXG4gICAgY29sb3I6IFwiI2ZiY2IzOVwiLFxuICAgIHByb2RIOiBbOCwgMTEsIDE1LCAxOCwgMjBdLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDAgfSxcbiAgICAgIHsgZGF0ZTogMTk5OCwgdmFsdWU6IDAuNSB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogMC44IH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiAxIH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiAzIH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiA0LjIgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDIuNSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3VudHJ5OiBcIlVuaXRlZCBTdGF0ZXNcIixcbiAgICB2YWx1ZTogMS44LFxuICAgIGNvbG9yOiBcIiMwMDdiYzhcIixcbiAgICBwcm9kSDogWzEsIDMsIDUsIDEwLCA3XSxcbiAgICBkYXRhc2V0OiBbXG4gICAgICB7IGRhdGU6IDE5OTMsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiAyIH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiAxIH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiA1IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiAyIH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiA0IH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiAxLjggfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJCcmF6aWxcIixcbiAgICB2YWx1ZTogNy4yLFxuICAgIGNvbG9yOiBcIiM2NWNlZGJcIixcbiAgICBwcm9kSDogWzQwLCA0OCwgMzIsIDU1LCA3MF0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMiB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogMyB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogNS41IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiA1LjggfSxcbiAgICAgIHsgZGF0ZTogMjAxNCwgdmFsdWU6IDcgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDcuMiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3VudHJ5OiBcIkF1c3RyYWxpYVwiLFxuICAgIHZhbHVlOiA3LFxuICAgIGNvbG9yOiBcIiNmZjZlNTJcIixcbiAgICBwcm9kSDogWzEsIDMsIDUsIDEwLCA3XSxcbiAgICBkYXRhc2V0OiBbXG4gICAgICB7IGRhdGU6IDE5OTMsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiAyIH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiAzIH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiA1LjUgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDUuOCB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogNyB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogNyB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3VudHJ5OiBcIkluZGlhXCIsXG4gICAgdmFsdWU6IDguMyxcbiAgICBjb2xvcjogXCIjZjlkZTNmXCIsXG4gICAgcHJvZEg6IFs4LCAxMSwgMTUsIDE4LCAyNl0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMi45IH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiAzLjggfSxcbiAgICAgIHsgZGF0ZTogMjAwNSwgdmFsdWU6IDYgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDUuOCB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogNyB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogOC4zIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiQXJnZW50aW5hXCIsXG4gICAgdmFsdWU6IDEsXG4gICAgY29sb3I6IFwiIzVkMmY4ZVwiLFxuICAgIHByb2RIOiBbMSwgMywgNSwgMTAsIDcuM10sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMC41IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiAwLjUgfSxcbiAgICAgIHsgZGF0ZTogMjAxNCwgdmFsdWU6IDAuOCB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3VudHJ5OiBcIkthemFraHN0YW5cIixcbiAgICB2YWx1ZTogMi41LFxuICAgIGNvbG9yOiBcIiMwMDhmYzlcIixcbiAgICBwcm9kSDogWzEyLCAxNSwgMTgsIDksIDE2LjBdLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDEgfSxcbiAgICAgIHsgZGF0ZTogMTk5OCwgdmFsdWU6IDEgfSxcbiAgICAgIHsgZGF0ZTogMjAwMywgdmFsdWU6IDEgfSxcbiAgICAgIHsgZGF0ZTogMjAwNSwgdmFsdWU6IDEuNSB9LFxuICAgICAgeyBkYXRlOiAyMDA5LCB2YWx1ZTogMi41IH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiAyIH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiAyLjUgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuY29uc3QgeWVhcnMgPSBbMjAwMCwgMjAwNSwgMjAxMCwgMjAxNSwgMjAyMF07XG5cbmZ1bmN0aW9uIGxldmVsMSgpIHtcbiAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjJcIik7XG4gIGNvbnN0IHN2ZyA9IHN2Z0NvbnRhaW5lci5hcHBlbmQoXCJzdmdcIikuYXR0cihcImNsYXNzXCIsIFwiY2hhcnQyXCIpO1xuXG4gIGNvbnN0IG1hcmdpbiA9IDgwO1xuICBjb25zdCB3aWR0aCA9IDEwMDAgLSAyICogbWFyZ2luO1xuICBjb25zdCBoZWlnaHQgPSA2MDAgLSAyICogbWFyZ2luO1xuXG4gIGNvbnN0IGNoYXJ0ID0gc3ZnXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2lufSwgJHttYXJnaW59KWApO1xuXG4gIGNvbnN0IHhTY2FsZSA9IGQzXG4gICAgLnNjYWxlQmFuZCgpXG4gICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgLmRvbWFpbihzYW1wbGUubWFwKChzKSA9PiBzLmNvdW50cnkpKVxuICAgIC5wYWRkaW5nKDAuNCk7XG5cbiAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKFswLCAxMF0pO1xuXG4gIGNvbnN0IG1ha2VZTGluZXMgPSAoKSA9PiBkMy5heGlzTGVmdCgpLnNjYWxlKHlTY2FsZSk7XG5cbiAgY2hhcnRcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHR9KWApXG4gICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4U2NhbGUpKTtcblxuICBjaGFydC5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKSk7XG5cbiAgY2hhcnRcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJncmlkXCIpXG4gICAgLmNhbGwobWFrZVlMaW5lcygpLnRpY2tTaXplKC13aWR0aCwgMCwgMCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgY29uc3QgYmFyR3JvdXBzID0gY2hhcnQuc2VsZWN0QWxsKCkuZGF0YShzYW1wbGUpLmVudGVyKCkuYXBwZW5kKFwiZ1wiKTtcblxuICBiYXJHcm91cHNcbiAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXIyXCIpXG4gICAgLmF0dHIoXCJ4XCIsIChkKSA9PiB7XG4gICAgICByZXR1cm4geFNjYWxlKGQuY291bnRyeSk7XG4gICAgfSlcbiAgICAuYXR0cihcIndpZHRoXCIsIHhTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICAuYXR0cihcInlcIiwgIGQgPT4geyByZXR1cm4gaGVpZ2h0OyB9KVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDApXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbig1MDApXG4gICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICByZXR1cm4gaSAqIDUwO1xuICAgIH0pXG4gICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB7XG4gICAgICByZXR1cm4geVNjYWxlKGQudmFsdWUpO1xuICAgIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiBoZWlnaHQgLSB5U2NhbGUoZC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgZDMuc2VsZWN0QWxsKFwiLmJhcjJcIilcbiAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoYWN0dWFsLCBpKSB7XG4gICAgICBkMy5zZWxlY3RBbGwoXCIuY2hhcnQyXCIpLnJlbW92ZSgpO1xuICAgICAgbGV2ZWwyKGFjdHVhbCk7XG4gICAgfSlcbiAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uIChhY3R1YWwsIGkpIHtcbiAgICAgIGQzLnNlbGVjdEFsbChcIi52YWx1ZVwiKS5hdHRyKFwib3BhY2l0eVwiLCAwKTtcblxuICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIDAuNilcbiAgICAgICAgLmF0dHIoXCJ4XCIsIChhKSA9PiB4U2NhbGUoYS5jb3VudHJ5KSAtIDUpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpICsgMTApO1xuXG4gICAgICBjb25zdCB5ID0geVNjYWxlKGFjdHVhbC52YWx1ZSk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSBjaGFydFxuICAgICAgICAuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImlkXCIsIFwibGltaXRcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAuYXR0cihcInkxXCIsIHkpXG4gICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwieTJcIiwgeSk7XG5cbiAgICAgIGJhckdyb3Vwc1xuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZGl2ZXJnZW5jZVwiKVxuICAgICAgICAuYXR0cihcInhcIiwgKGEpID0+IHhTY2FsZShhLmNvdW50cnkpICsgeFNjYWxlLmJhbmR3aWR0aCgpIC8gMilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIChhKSA9PiB5U2NhbGUoYS52YWx1ZSkgLSAxMClcblxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC50ZXh0KChhLCBpZHgpID0+IHtcbiAgICAgICAgICBjb25zdCBkaXZlcmdlbmNlID0gKGEudmFsdWUgLSBhY3R1YWwudmFsdWUpLnRvRml4ZWQoMSk7XG5cbiAgICAgICAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgICAgICAgaWYgKGRpdmVyZ2VuY2UgPiAwKSB0ZXh0ICs9IFwiK1wiO1xuICAgICAgICAgIHRleHQgKz0gYCR7ZGl2ZXJnZW5jZX0lYDtcblxuICAgICAgICAgIHJldHVybiBpZHggIT09IGkgPyB0ZXh0IDogYCR7YWN0dWFsLmNvdW50cnl9LCAke2FjdHVhbC52YWx1ZX0lYDtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGQzLnNlbGVjdEFsbChcIi52YWx1ZVwiKS5hdHRyKFwib3BhY2l0eVwiLCAxKTtcblxuICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgIC5hdHRyKFwieFwiLCAoYSkgPT4geFNjYWxlKGEuY291bnRyeSkpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKTtcblxuICAgICAgY2hhcnQuc2VsZWN0QWxsKFwiI2xpbWl0XCIpLnJlbW92ZSgpO1xuICAgICAgY2hhcnQuc2VsZWN0QWxsKFwiLmRpdmVyZ2VuY2VcIikucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgbGV0IHRleHQgPSBiYXJHcm91cHNcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2YWx1ZVwiKVxuICAgIC5hdHRyKFwieFwiLCAoYSkgPT4geFNjYWxlKGEuY291bnRyeSkgKyB4U2NhbGUuYmFuZHdpZHRoKCkgLyAyKVxuICAgIC5hdHRyKFwieVwiLCAoYSkgPT4geVNjYWxlKGEudmFsdWUpIC0gNSlcbiAgICAuYXR0cihcInlcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCAwKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMzAwKVxuICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgcmV0dXJuIGkgKiA1MDtcbiAgICB9KVxuICAgIC5hdHRyKFwieVwiLCAoZCkgPT4ge1xuICAgICAgcmV0dXJuIHlTY2FsZShkLnZhbHVlKSAtIDIwO1xuICAgIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiBoZWlnaHQgLSB5U2NhbGUoZC52YWx1ZSk7XG4gICAgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCAoYSkgPT4gYS52YWx1ZSlcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoMCk7XG5cblxuICB0ZXh0XG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC50d2VlbihcInRleHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgIHZhciBzdGFydCA9IGQzLnNlbGVjdCh0aGlzKS50ZXh0KCk7XG4gICAgICB2YXIgZW5kID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIik7IFxuICAgICAgdmFyIGludGVycG9sYXRvciA9IGQzLmludGVycG9sYXRlTnVtYmVyKGVuZCwgZW5kKTsgXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICBzZWxlY3Rpb24udGV4dChNYXRoLnJvdW5kKGludGVycG9sYXRvcih0KSkpO1xuICAgICAgfTsgXG4gICAgfSlcbiAgICAuZHVyYXRpb24oMzAwMCk7XG5cbiAgc3ZnXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGFiZWxcIilcbiAgICAuYXR0cihcInhcIiwgLShoZWlnaHQgLyAyKSAtIG1hcmdpbilcbiAgICAuYXR0cihcInlcIiwgbWFyZ2luIC8gMi40KVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJPdXQgb2YgdG90YWwgZWxlY3RyaWNpdHkgZ2VucmF0aW9uICglKVwiKTtcblxuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZVwiKVxuICAgIC5hdHRyKFwieFwiLCB3aWR0aCAvIDIgKyBtYXJnaW4pXG4gICAgLmF0dHIoXCJ5XCIsIDQwKVxuICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChcIkVsZWN0cmljaXR5IGdlbmVyYXRpb24gYnkgc29sYXIgcG93ZXIgaW4gMjAxOVwiKTtcblxuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrMlwiKVxuICAgIC5hdHRyKFwieFwiLCB3aWR0aCAvIDEwKVxuICAgIC5hdHRyKFwieVwiLCA0MClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJDbGljayB0byBmaW5kIG91dCBtb3JlXCIpXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGFjdHVhbCwgaSkge1xuICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0MlwiKS5yZW1vdmUoKTtcbiAgICAgIGxldmVsMygpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBsZXZlbDIoYWN0dWFsKSB7XG4gIGNvbnN0IGxpbmVEYXRhID0gYWN0dWFsLmRhdGFzZXQ7XG4gIGNvbnNvbGUubG9nKGxpbmVEYXRhKTtcbiAgY29uc3QgbWFyZ2luID0gODA7XG5cbiAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjJcIik7XG4gIGNvbnN0IHN2ZyA9IHN2Z0NvbnRhaW5lci5hcHBlbmQoXCJzdmdcIikuYXR0cihcImNsYXNzXCIsIFwiY2hhcnQyXCIpO1xuXG4gIGNvbnN0IGNoYXJ0ID0gc3ZnXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImlkXCIsIFwidmlzdWFsaXNhdGlvblwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4gLyAyfSwgJHttYXJnaW59KWApO1xuXG4gIHZhciB2aXMgPSBkMy5zZWxlY3QoXCIjdmlzdWFsaXNhdGlvblwiKSxcbiAgICBNQVJHSU5TID0gODAsXG4gICAgV0lEVEggPSAxMDAwIC0gMiAqIE1BUkdJTlMsXG4gICAgSEVJR0hUID0gNjAwIC0gMiAqIE1BUkdJTlMsXG4gICAgTUFSR0lOUyA9IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgbGVmdDogNTAsXG4gICAgfSxcbiAgICB4UmFuZ2UgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgLmRvbWFpbihkMy5leHRlbnQobGluZURhdGEsIChkYXRhUG9pbnQpID0+IGRhdGFQb2ludC5kYXRlKSksXG4gICAgeVJhbmdlID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW0hFSUdIVCAtIE1BUkdJTlMudG9wLCBNQVJHSU5TLmJvdHRvbV0pXG4gICAgICAuZG9tYWluKFtcbiAgICAgICAgMCxcbiAgICAgICAgZDMubWF4KGxpbmVEYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLnZhbHVlO1xuICAgICAgICB9KSxcbiAgICAgIF0pLFxuICAgIHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpLnNjYWxlKHhSYW5nZSksXG4gICAgeUF4aXMgPSBkMy5heGlzTGVmdCgpLnNjYWxlKHlSYW5nZSk7XG5cbiAgY29uc3QgbWFrZVlMaW5lcyA9ICgpID0+IGQzLmF4aXNMZWZ0KCkuc2NhbGUoeVJhbmdlKTtcblxuICBjaGFydFxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImdyaWRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCArIFwiLDApXCIpXG4gICAgLmNhbGwobWFrZVlMaW5lcygpLnRpY2tTaXplKC1XSURUSCwgMCwgMCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgdmlzXG4gICAgLmFwcGVuZChcInN2ZzpnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgIC5hdHRyKFxuICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwidHJhbnNsYXRlKFwiICsgTUFSR0lOUy5sZWZ0ICsgXCIsXCIgKyAoSEVJR0hUIC0gTUFSR0lOUy5ib3R0b20pICsgXCIpXCJcbiAgICApXG4gICAgLmNhbGwoeEF4aXMpO1xuXG4gIHZpc1xuICAgIC5hcHBlbmQoXCJzdmc6Z1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCArIFwiLDApXCIpXG4gICAgLmNhbGwoeUF4aXMpO1xuXG4gIHZhciBsaW5lRnVuYyA9IGQzXG4gICAgLmxpbmUoKVxuICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4geFJhbmdlKGQuZGF0ZSk7XG4gICAgfSlcbiAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIHlSYW5nZShkLnZhbHVlKTtcbiAgICB9KVxuICAgIC5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKTtcblxuICBjb25zdCBwYXRoID0gdmlzXG4gICAgLmFwcGVuZChcInN2ZzpwYXRoXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInBhdGgyXCIpXG4gICAgLmF0dHIoXCJkXCIsIGxpbmVGdW5jKGxpbmVEYXRhKSlcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsdWVcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCArIFwiLDApXCIpO1xuXG4gIGxldCB0b3RhbExlbmd0aCA9IHBhdGgubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgcGF0aFxuICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCB0b3RhbExlbmd0aClcbiAgICAudHJhbnNpdGlvbigpIFxuICAgIC5kdXJhdGlvbig0MDAwKSBcbiAgICAuZWFzZShkMy5lYXNlTGluZWFyKSBcbiAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIDApOyBcblxuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZVwiKVxuICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDIgKyA4MClcbiAgICAuYXR0cihcInlcIiwgNDApXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KGBTb2xhciBwb3dlciB1c2FnZSBpbiAke2FjdHVhbC5jb3VudHJ5fSB0aHJvdWdob3V0IHRoZSB5ZWFyc2ApO1xuXG4gIHN2Z1xuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsXCIpXG4gICAgLmF0dHIoXCJ4XCIsIC0oSEVJR0hUIC8gMikgLSA4MClcbiAgICAuYXR0cihcInlcIiwgODAgLyAyLjQpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChcIk91dCBvZiB0b3RhbCBlbGVjdHJpY2l0eSBnZW5yYXRpb24gKCUpXCIpO1xuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrM1wiKVxuICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDEwKVxuICAgIC5hdHRyKFwieVwiLCA0MClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJCYWNrXCIpXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGFjdHVhbCwgaSkge1xuICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0MlwiKS5yZW1vdmUoKTtcbiAgICAgIGxldmVsMSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBsZXZlbDMoKSB7XG4gIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNjb250YWluZXIyXCIpO1xuICBjb25zdCBzdmcgPSBzdmdDb250YWluZXIuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0MlwiKTtcbiAgKE1BUkdJTlMgPSA4MCksXG4gICAgKFdJRFRIID0gMTAwMCAtIDIgKiBNQVJHSU5TKSxcbiAgICAoSEVJR0hUID0gNjAwIC0gMiAqIE1BUkdJTlMpLFxuICAgIChNQVJHSU5TID0ge1xuICAgICAgdG9wOiAyMCxcbiAgICAgIHJpZ2h0OiAyMCxcbiAgICAgIGJvdHRvbTogMjAsXG4gICAgICBsZWZ0OiA1MCxcbiAgICB9KSxcbiAgICBzdmdcbiAgICAgIC5hcHBlbmQoXCJmb3JlaWduT2JqZWN0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JhcGgtdGl0bGUyXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgNjAwKVxuICAgICAgLmF0dHIoXCJ4XCIsIDUwKVxuICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAuYXBwZW5kKFwieGh0bWw6Ym9keVwiKVxuICAgICAgLnN0eWxlKFwiZm9udFwiLCBcIjE0cHggJ0hlbHZldGljYSBOZXVlJ1wiKVxuICAgICAgLmh0bWwoXG4gICAgICAgIFwiPGgxPlNvbGFyIFBvd2VyPC9oMT48ZGl2PjxkaXY+PHA+U29sYXIgcG93ZXIgaXMgdGhlIGNvbnZlcnNpb24gb2YgZW5lcmd5IGZyb20gc3VubGlnaHQgaW50byBlbGVjdHJpY2l0eSwgZWl0aGVyIGRpcmVjdGx5IHVzaW5nIHBob3Rvdm9sdGFpY3MgKFBWKSwgaW5kaXJlY3RseSB1c2luZyBjb25jZW50cmF0ZWQgc29sYXIgcG93ZXIsIG9yIGEgY29tYmluYXRpb24uPC9wPjxwPlNvbGFyLXBvd2VyZWQgcGhvdG92b2x0YWljIChQVikgcGFuZWxzIGNvbnZlcnQgdGhlIHN1bidzIHJheXMgaW50byBlbGVjdHJpY2l0eSBieSBleGNpdGluZyBlbGVjdHJvbnMgaW4gc2lsaWNvbiBjZWxscyB1c2luZyB0aGUgcGhvdG9ucyBvZiBsaWdodCBmcm9tIHRoZSBzdW4uIFRoaXMgZWxlY3RyaWNpdHkgY2FuIHRoZW4gYmUgdXNlZCB0byBzdXBwbHkgcmVuZXdhYmxlIGVuZXJneSB0byB5b3VyIGhvbWUgb3IgYnVzaW5lc3MuSW4gbW9zdCBzb2xhciBzeXN0ZW1zLCBzb2xhciBwYW5lbHMgYXJlIHBsYWNlZCBvbiB0aGUgcm9vZi4gQW4gaWRlYWwgc2l0ZSB3aWxsIGhhdmUgbm8gc2hhZGUgb24gdGhlIHBhbmVscywgZXNwZWNpYWxseSBkdXJpbmcgdGhlIHByaW1lIHN1bmxpZ2h0IGhvdXJzIG9mIDkgYS5tLiB0byAzIHAubS47IGEgc291dGgtZmFjaW5nIGluc3RhbGxhdGlvbiB3aWxsIHVzdWFsbHkgcHJvdmlkZSB0aGUgb3B0aW11bSBwb3RlbnRpYWwgZm9yIHlvdXIgc3lzdGVtLCBidXQgb3RoZXIgb3JpZW50YXRpb25zIG1heSBwcm92aWRlIHN1ZmZpY2llbnQgcHJvZHVjdGlvbi4gPC9wPjwvZGl2PjxkaXYgY2xhc3M9J2dyYXBoLWRpdjInPjwvZGl2PjwvZGl2PlwiXG4gICAgICApO1xuICAgIFxuICAgIHN2Z1xuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrNFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMTApXG4gICAgICAuYXR0cihcInlcIiwgNTApXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dChcIkJhY2tcIilcbiAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0MlwiKS5yZW1vdmUoKTtcbiAgICAgICAgbGV2ZWwxKCk7XG4gICAgICB9KTtcbn1cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2hhdDJcIik7XG4gIGgub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXZlbDEoKTtcbiAgfTtcbn0pO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBzYW1wbGUgPSBbXG4gIHtcbiAgICBjb3VudHJ5OiBcIlJ1c3NpYVwiLFxuICAgIHZhbHVlOiA3My40LFxuICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICBwcm9kSDogWzEyLCAxNSwgMTgsIDksIDE2LjBdLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDkwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiA4OCB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogODAgfSxcbiAgICAgIHsgZGF0ZTogMjAwNSwgdmFsdWU6IDgwIH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiA3NSB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogNjggfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDczLjQgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJDYW5hZGFcIixcbiAgICB2YWx1ZTogMzQuMixcbiAgICBjb2xvcjogXCIjMDBhMmVlXCIsXG4gICAgcHJvZEg6IFs0NSwgMzIsIDU4LCA2NSwgNjBdLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDgwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiA3NSB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogNzAgfSxcbiAgICAgIHsgZGF0ZTogMjAwNSwgdmFsdWU6IDY0IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiA1MiB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogNDEgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDM0IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiQ2hpbmFcIixcbiAgICB2YWx1ZTogNzIuMSxcbiAgICBjb2xvcjogXCIjZmJjYjM5XCIsXG4gICAgcHJvZEg6IFs4LCAxMSwgMTUsIDE4LCAyMF0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogOTggfSxcbiAgICAgIHsgZGF0ZTogMTk5OCwgdmFsdWU6IDg0IH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiA5MyB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogODAgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDcwIH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiA2MCB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogNzIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJVbml0ZWQgU3RhdGVzXCIsXG4gICAgdmFsdWU6IDYyLjcsXG4gICAgY29sb3I6IFwiIzAwN2JjOFwiLFxuICAgIHByb2RIOiBbMSwgMywgNSwgMTAsIDddLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDkwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiA4OCB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogNzUgfSxcbiAgICAgIHsgZGF0ZTogMjAwNSwgdmFsdWU6IDg4IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiA3MyB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogNzAgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDYyIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiQnJhemlsXCIsXG4gICAgdmFsdWU6IDI1LFxuICAgIGNvbG9yOiBcIiM2NWNlZGJcIixcbiAgICBwcm9kSDogWzQwLCA0OCwgMzIsIDU1LCA3MF0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogNjAgfSxcbiAgICAgIHsgZGF0ZTogMTk5OCwgdmFsdWU6IDUwIH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiA0MCB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMzkgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDM1IH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiAyMCB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogMjUgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJBdXN0cmFsaWFcIixcbiAgICB2YWx1ZTogNzUsXG4gICAgY29sb3I6IFwiI2ZmNmU1MlwiLFxuICAgIHByb2RIOiBbMSwgMywgNSwgMTAsIDddLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDkwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiA4OCB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogNzUgfSxcbiAgICAgIHsgZGF0ZTogMjAwNSwgdmFsdWU6IDg4IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiA3MyB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogNzAgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDc1IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiSW5kaWFcIixcbiAgICB2YWx1ZTogNzIsXG4gICAgY29sb3I6IFwiI2Y5ZGUzZlwiLFxuICAgIHByb2RIOiBbOCwgMTEsIDE1LCAxOCwgMjZdLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDkwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiA4OCB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogNzUgfSxcbiAgICAgIHsgZGF0ZTogMjAwNSwgdmFsdWU6IDg4IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiA3MyB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogNzAgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDcyIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiQXJnZW50aW5hXCIsXG4gICAgdmFsdWU6IDYwLFxuICAgIGNvbG9yOiBcIiM1ZDJmOGVcIixcbiAgICBwcm9kSDogWzEsIDMsIDUsIDEwLCA3LjNdLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDkwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiA4OCB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogNzUgfSxcbiAgICAgIHsgZGF0ZTogMjAwNSwgdmFsdWU6IDg4IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiA3MyB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogNzAgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDYwIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiS2F6YWtoc3RhblwiLFxuICAgIHZhbHVlOiA4Ni4yLFxuICAgIGNvbG9yOiBcIiMwMDhmYzlcIixcbiAgICBwcm9kSDogWzEyLCAxNSwgMTgsIDksIDE2LjBdLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDEwMCB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogOTggfSxcbiAgICAgIHsgZGF0ZTogMjAwMywgdmFsdWU6IDkzIH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiA4NSB9LFxuICAgICAgeyBkYXRlOiAyMDA5LCB2YWx1ZTogOTAgfSxcbiAgICAgIHsgZGF0ZTogMjAxNCwgdmFsdWU6IDg0IH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiA4Ni4yIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmNvbnN0IHllYXJzID0gWzIwMDAsIDIwMDUsIDIwMTAsIDIwMTUsIDIwMjBdO1xuXG5mdW5jdGlvbiBsZXZlbDEoKSB7XG4gIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNjb250YWluZXIzXCIpO1xuICBjb25zdCBzdmcgPSBzdmdDb250YWluZXIuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0M1wiKTtcblxuICBjb25zdCBtYXJnaW4gPSA4MDtcbiAgY29uc3Qgd2lkdGggPSAxMDAwIC0gMiAqIG1hcmdpbjtcbiAgY29uc3QgaGVpZ2h0ID0gNjAwIC0gMiAqIG1hcmdpbjtcblxuICBjb25zdCBjaGFydCA9IHN2Z1xuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbn0sICR7bWFyZ2lufSlgKTtcblxuICBjb25zdCB4U2NhbGUgPSBkM1xuICAgIC5zY2FsZUJhbmQoKVxuICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgIC5kb21haW4oc2FtcGxlLm1hcCgocykgPT4gcy5jb3VudHJ5KSlcbiAgICAucGFkZGluZygwLjQpO1xuXG4gIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLmRvbWFpbihbMCwgMTAwXSk7XG5cbiAgY29uc3QgbWFrZVlMaW5lcyA9ICgpID0+IGQzLmF4aXNMZWZ0KCkuc2NhbGUoeVNjYWxlKTtcblxuICBjaGFydFxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpO1xuXG4gIGNoYXJ0LmFwcGVuZChcImdcIikuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpKTtcblxuICBjaGFydFxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImdyaWRcIilcbiAgICAuY2FsbChtYWtlWUxpbmVzKCkudGlja1NpemUoLXdpZHRoLCAwLCAwKS50aWNrRm9ybWF0KFwiXCIpKTtcblxuICBjb25zdCBiYXJHcm91cHMgPSBjaGFydC5zZWxlY3RBbGwoKS5kYXRhKHNhbXBsZSkuZW50ZXIoKS5hcHBlbmQoXCJnXCIpO1xuXG4gIGJhckdyb3Vwc1xuICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhcjNcIilcbiAgICAuYXR0cihcInhcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiB4U2NhbGUoZC5jb3VudHJ5KTtcbiAgICB9KVxuICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDApXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbig1MDApXG4gICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICByZXR1cm4gaSAqIDUwO1xuICAgIH0pXG4gICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB7XG4gICAgICByZXR1cm4geVNjYWxlKGQudmFsdWUpO1xuICAgIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiBoZWlnaHQgLSB5U2NhbGUoZC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgZDMuc2VsZWN0QWxsKFwiLmJhcjNcIilcbiAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoYWN0dWFsLCBpKSB7XG4gICAgICBkMy5zZWxlY3RBbGwoXCIuY2hhcnQzXCIpLnJlbW92ZSgpO1xuICAgICAgbGV2ZWwyKGFjdHVhbCk7XG4gICAgfSlcbiAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uIChhY3R1YWwsIGkpIHtcbiAgICAgIGQzLnNlbGVjdEFsbChcIi52YWx1ZTNcIikuYXR0cihcIm9wYWNpdHlcIiwgMCk7XG5cbiAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAwLjYpXG4gICAgICAgIC5hdHRyKFwieFwiLCAoYSkgPT4geFNjYWxlKGEuY291bnRyeSkgLSA1KVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHhTY2FsZS5iYW5kd2lkdGgoKSArIDEwKTtcblxuICAgICAgY29uc3QgeSA9IHlTY2FsZShhY3R1YWwudmFsdWUpO1xuXG4gICAgICBjb25zdCBsaW5lID0gY2hhcnRcbiAgICAgICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJpZFwiLCBcImxpbWl0XCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCB5KVxuICAgICAgICAuYXR0cihcIngyXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcInkyXCIsIHkpO1xuXG4gICAgICBiYXJHcm91cHNcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRpdmVyZ2VuY2VcIilcbiAgICAgICAgLmF0dHIoXCJ4XCIsIChhKSA9PiB4U2NhbGUoYS5jb3VudHJ5KSArIHhTY2FsZS5iYW5kd2lkdGgoKSAvIDIpXG4gICAgICAgIC5hdHRyKFwieVwiLCAoYSkgPT4geVNjYWxlKGEudmFsdWUpIC0gMTApXG5cbiAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgICAgICAudGV4dCgoYSwgaWR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGl2ZXJnZW5jZSA9IChhLnZhbHVlIC0gYWN0dWFsLnZhbHVlKS50b0ZpeGVkKDEpO1xuXG4gICAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xuICAgICAgICAgIGlmIChkaXZlcmdlbmNlID4gMCkgdGV4dCArPSBcIitcIjtcbiAgICAgICAgICB0ZXh0ICs9IGAke2RpdmVyZ2VuY2V9JWA7XG5cbiAgICAgICAgICByZXR1cm4gaWR4ICE9PSBpID8gdGV4dCA6IGAke2FjdHVhbC5jb3VudHJ5fSwgJHthY3R1YWwudmFsdWV9JWA7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkMy5zZWxlY3RBbGwoXCIudmFsdWUzXCIpLmF0dHIoXCJvcGFjaXR5XCIsIDEpO1xuXG4gICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIChhKSA9PiB4U2NhbGUoYS5jb3VudHJ5KSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4U2NhbGUuYmFuZHdpZHRoKCkpO1xuXG4gICAgICBjaGFydC5zZWxlY3RBbGwoXCIjbGltaXRcIikucmVtb3ZlKCk7XG4gICAgICBjaGFydC5zZWxlY3RBbGwoXCIuZGl2ZXJnZW5jZVwiKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICBsZXQgdGV4dCA9IGJhckdyb3Vwc1xuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInZhbHVlM1wiKVxuICAgIC5hdHRyKFwieFwiLCAoYSkgPT4geFNjYWxlKGEuY291bnRyeSkgKyB4U2NhbGUuYmFuZHdpZHRoKCkgLyAyKVxuICAgIC5hdHRyKFwieVwiLCAoYSkgPT4geVNjYWxlKGEudmFsdWUpIC0gNSlcbiAgICAuYXR0cihcInlcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCAwKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oNTAwKVxuICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgcmV0dXJuIGkgKiA1MDtcbiAgICB9KVxuICAgIC5hdHRyKFwieVwiLCAoZCkgPT4ge1xuICAgICAgcmV0dXJuIHlTY2FsZShkLnZhbHVlKSAtIDIwO1xuICAgIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiBoZWlnaHQgLSB5U2NhbGUoZC52YWx1ZSk7XG4gICAgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCAoYSkgPT4gYS52YWx1ZSlcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoMCk7XG5cbiAgdGV4dFxuICAgIC50cmFuc2l0aW9uKClcbiAgICAudHdlZW4oXCJ0ZXh0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSBkMy5zZWxlY3QodGhpcyk7IFxuICAgICAgdmFyIHN0YXJ0ID0gZDMuc2VsZWN0KHRoaXMpLnRleHQoKTsgXG4gICAgICB2YXIgZW5kID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIik7IFxuICAgICAgdmFyIGludGVycG9sYXRvciA9IGQzLmludGVycG9sYXRlTnVtYmVyKHN0YXJ0LCBlbmQpOyBcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHNlbGVjdGlvbi50ZXh0KE1hdGgucm91bmQoaW50ZXJwb2xhdG9yKHQpKSk7XG4gICAgICB9OyBcbiAgICB9KVxuICAgIC5kdXJhdGlvbigzMDAwKTsgXG5cbiAgc3ZnXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGFiZWwzXCIpXG4gICAgLmF0dHIoXCJ4XCIsIC0oaGVpZ2h0IC8gMikgLSBtYXJnaW4pXG4gICAgLmF0dHIoXCJ5XCIsIG1hcmdpbiAvIDIuNClcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KFwiT3V0IG9mIHRvdGFsIGVsZWN0cmljaXR5IGdlbnJhdGlvbiAoJSlcIik7XG5cbiAgc3ZnXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGUzXCIpXG4gICAgLmF0dHIoXCJ4XCIsIHdpZHRoIC8gMiArIG1hcmdpbilcbiAgICAuYXR0cihcInlcIiwgNDApXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KFwiRWxlY3RyaWNpdHkgZ2VuZXJhdGlvbiBieSB0aGVybW8gcG93ZXIgaW4gMjAxOVwiKTtcblxuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrMlwiKVxuICAgIC5hdHRyKFwieFwiLCB3aWR0aCAvIDEwKVxuICAgIC5hdHRyKFwieVwiLCA0MClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJDbGljayB0byBmaW5kIG91dCBtb3JlXCIpXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGFjdHVhbCwgaSkge1xuICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0M1wiKS5yZW1vdmUoKTtcbiAgICAgIGxldmVsMygpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBsZXZlbDIoYWN0dWFsKSB7XG4gIGNvbnN0IGxpbmVEYXRhID0gYWN0dWFsLmRhdGFzZXQ7XG4gIGNvbnNvbGUubG9nKGxpbmVEYXRhKTtcbiAgY29uc3QgbWFyZ2luID0gODA7XG5cbiAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjNcIik7XG4gIGNvbnN0IHN2ZyA9IHN2Z0NvbnRhaW5lci5hcHBlbmQoXCJzdmdcIikuYXR0cihcImNsYXNzXCIsIFwiY2hhcnQzXCIpO1xuXG4gIGNvbnN0IGNoYXJ0ID0gc3ZnXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImlkXCIsIFwidmlzdWFsaXNhdGlvblwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4gLyAyfSwgJHttYXJnaW59KWApO1xuXG4gIHZhciB2aXMgPSBkMy5zZWxlY3QoXCIjdmlzdWFsaXNhdGlvblwiKSxcbiAgICBNQVJHSU5TID0gODAsXG4gICAgV0lEVEggPSAxMDAwIC0gMiAqIE1BUkdJTlMsXG4gICAgSEVJR0hUID0gNjAwIC0gMiAqIE1BUkdJTlMsXG4gICAgTUFSR0lOUyA9IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgbGVmdDogNTAsXG4gICAgfSxcbiAgICB4UmFuZ2UgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgLmRvbWFpbihkMy5leHRlbnQobGluZURhdGEsIChkYXRhUG9pbnQpID0+IGRhdGFQb2ludC5kYXRlKSksXG4gICAgeVJhbmdlID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW0hFSUdIVCAtIE1BUkdJTlMudG9wLCBNQVJHSU5TLmJvdHRvbV0pXG4gICAgICAuZG9tYWluKFtcbiAgICAgICAgMCxcbiAgICAgICAgZDMubWF4KGxpbmVEYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLnZhbHVlO1xuICAgICAgICB9KSxcbiAgICAgIF0pLFxuICAgIHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpLnNjYWxlKHhSYW5nZSksXG4gICAgeUF4aXMgPSBkMy5heGlzTGVmdCgpLnNjYWxlKHlSYW5nZSk7XG5cbiAgY29uc3QgbWFrZVlMaW5lcyA9ICgpID0+IGQzLmF4aXNMZWZ0KCkuc2NhbGUoeVJhbmdlKTtcblxuICBjaGFydFxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImdyaWRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCArIFwiLDApXCIpXG4gICAgLmNhbGwobWFrZVlMaW5lcygpLnRpY2tTaXplKC1XSURUSCwgMCwgMCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgdmlzXG4gICAgLmFwcGVuZChcInN2ZzpnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgIC5hdHRyKFxuICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwidHJhbnNsYXRlKFwiICsgTUFSR0lOUy5sZWZ0ICsgXCIsXCIgKyAoSEVJR0hUIC0gTUFSR0lOUy5ib3R0b20pICsgXCIpXCJcbiAgICApXG4gICAgLmNhbGwoeEF4aXMpO1xuXG4gIHZpc1xuICAgIC5hcHBlbmQoXCJzdmc6Z1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCArIFwiLDApXCIpXG4gICAgLmNhbGwoeUF4aXMpO1xuXG4gIHZhciBsaW5lRnVuYyA9IGQzXG4gICAgLmxpbmUoKVxuICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4geFJhbmdlKGQuZGF0ZSk7XG4gICAgfSlcbiAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIHlSYW5nZShkLnZhbHVlKTtcbiAgICB9KVxuICAgIC5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKTtcblxuICBjb25zdCBwYXRoID0gdmlzXG4gICAgLmFwcGVuZChcInN2ZzpwYXRoXCIpXG4gICAgLmF0dHIoXCJkXCIsIGxpbmVGdW5jKGxpbmVEYXRhKSlcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsdWVcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCArIFwiLDApXCIpO1xuXG4gIGxldCB0b3RhbExlbmd0aCA9IHBhdGgubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgcGF0aFxuICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCB0b3RhbExlbmd0aClcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDQwMDApXG4gICAgLmVhc2UoZDMuZWFzZUxpbmVhcilcbiAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIDApOyBcblxuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXRsZTNcIilcbiAgICAuYXR0cihcInhcIiwgV0lEVEggLyAyICsgODApXG4gICAgLmF0dHIoXCJ5XCIsIDQwKVxuICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChgVGhlcm1vIHBvd2VyIHVzYWdlIGluICR7YWN0dWFsLmNvdW50cnl9IHRocm91Z2hvdXQgdGhlIHllYXJzYCk7XG5cbiAgc3ZnXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGFiZWwzXCIpXG4gICAgLmF0dHIoXCJ4XCIsIC0oSEVJR0hUIC8gMikgLSA4MClcbiAgICAuYXR0cihcInlcIiwgODAgLyAyLjQpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAudGV4dChcIk91dCBvZiB0b3RhbCBlbGVjdHJpY2l0eSBnZW5yYXRpb24gKCUpXCIpO1xuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrM1wiKVxuICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDEwKVxuICAgIC5hdHRyKFwieVwiLCA0MClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJCYWNrXCIpXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGFjdHVhbCwgaSkge1xuICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0M1wiKS5yZW1vdmUoKTtcbiAgICAgIGxldmVsMSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBsZXZlbDMoKSB7XG4gIGNvbnN0IHN2Z0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNjb250YWluZXIzXCIpO1xuICBjb25zdCBzdmcgPSBzdmdDb250YWluZXIuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0M1wiKTtcbiAgKE1BUkdJTlMgPSA4MCksXG4gICAgKFdJRFRIID0gMTAwMCAtIDIgKiBNQVJHSU5TKSxcbiAgICAoSEVJR0hUID0gNjAwIC0gMiAqIE1BUkdJTlMpLFxuICAgIChNQVJHSU5TID0ge1xuICAgICAgdG9wOiAyMCxcbiAgICAgIHJpZ2h0OiAyMCxcbiAgICAgIGJvdHRvbTogMjAsXG4gICAgICBsZWZ0OiA1MCxcbiAgICB9KSxcbiAgICBzdmdcbiAgICAgIC5hcHBlbmQoXCJmb3JlaWduT2JqZWN0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JhcGgtdGl0bGUzXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIFdJRFRIKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgNjAwKVxuICAgICAgLmF0dHIoXCJ4XCIsIDUwKVxuICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAuYXBwZW5kKFwieGh0bWw6Ym9keVwiKVxuICAgICAgLnN0eWxlKFwiZm9udFwiLCBcIjE0cHggJ0hlbHZldGljYSBOZXVlJ1wiKVxuICAgICAgLmh0bWwoXG4gICAgICAgIFwiPGgxPlRoZXJtb2VsZWN0cmljaXR5PC9oMT48ZGl2PjxkaXY+PHA+VGhlcm1vZWxlY3RyaWNpdHksIGFsc28gY2FsbGVkIFBlbHRpZXItU2VlYmVjayBlZmZlY3QsIGRpcmVjdCBjb252ZXJzaW9uIG9mIGhlYXQgaW50byBlbGVjdHJpY2l0eSBvciBlbGVjdHJpY2l0eSBpbnRvIGhlYXQgdGhyb3VnaCB0d28gcmVsYXRlZCBtZWNoYW5pc21zLCB0aGUgU2VlYmVjayBlZmZlY3QgYW5kIHRoZSBQZWx0aWVyIGVmZmVjdC48L3A+IDxwPkEgdGhlcm1vZWxlY3RyaWMgZGV2aWNlIGNyZWF0ZXMgYSB2b2x0YWdlIHdoZW4gdGhlcmUgaXMgYSBkaWZmZXJlbnQgdGVtcGVyYXR1cmUgb24gZWFjaCBzaWRlLiBDb252ZXJzZWx5LCB3aGVuIGEgdm9sdGFnZSBpcyBhcHBsaWVkIHRvIGl0LCBoZWF0IGlzIHRyYW5zZmVycmVkIGZyb20gb25lIHNpZGUgdG8gdGhlIG90aGVyLCBjcmVhdGluZyBhIHRlbXBlcmF0dXJlIGRpZmZlcmVuY2UuIEF0IHRoZSBhdG9taWMgc2NhbGUsIGFuIGFwcGxpZWQgdGVtcGVyYXR1cmUgZ3JhZGllbnQgY2F1c2VzIGNoYXJnZSBjYXJyaWVycyBpbiB0aGUgbWF0ZXJpYWwgdG8gZGlmZnVzZSBmcm9tIHRoZSBob3Qgc2lkZSB0byB0aGUgY29sZCBzaWRlLlRoaXMgZWZmZWN0IGNhbiBiZSB1c2VkIHRvIGdlbmVyYXRlIGVsZWN0cmljaXR5LCBtZWFzdXJlIHRlbXBlcmF0dXJlIG9yIGNoYW5nZSB0aGUgdGVtcGVyYXR1cmUgb2Ygb2JqZWN0cy4gPHA+IDwvcD48L2Rpdj48ZGl2IGNsYXNzPSdncmFwaC1kaXYzJz48L2Rpdj48L2Rpdj5cIlxuICAgICAgKTtcblxuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrNFwiKVxuICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDEwKVxuICAgIC5hdHRyKFwieVwiLCA1MClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJCYWNrXCIpXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0M1wiKS5yZW1vdmUoKTtcbiAgICAgIGxldmVsMSgpO1xuICAgIH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2hhdDRcIik7XG4gIGgub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXZlbDEoKTtcbiAgfTtcbn0pO1xuIiwiY29uc3Qgc2FtcGxlID0gW1xuICB7XG4gICAgY291bnRyeTogXCJSdXNzaWFcIixcbiAgICB2YWx1ZTogMSxcbiAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgcHJvZEg6IFsxMiwgMTUsIDE4LCA5LCAxNi4wXSxcbiAgICBkYXRhc2V0OiBbXG4gICAgICB7IGRhdGU6IDE5OTMsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiAwLjMgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDIgfSxcbiAgICAgIHsgZGF0ZTogMjAxNCwgdmFsdWU6IDAuMDUgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDAuMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3VudHJ5OiBcIkNhbmFkYVwiLFxuICAgIHZhbHVlOiAyLjksXG4gICAgY29sb3I6IFwiIzAwYTJlZVwiLFxuICAgIHByb2RIOiBbNDUsIDMyLCA1OCwgNjUsIDYwXSxcbiAgICBkYXRhc2V0OiBbXG4gICAgICB7IGRhdGU6IDE5OTMsIHZhbHVlOiAxIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiAxIH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiAxIH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiAxLjUgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDIuNSB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogMiB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogMi45IH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiQ2hpbmFcIixcbiAgICB2YWx1ZTogNi4zLFxuICAgIGNvbG9yOiBcIiNmYmNiMzlcIixcbiAgICBwcm9kSDogWzgsIDExLCAxNSwgMTgsIDIwXSxcbiAgICBkYXRhc2V0OiBbXG4gICAgICB7IGRhdGU6IDE5OTMsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiAwLjUgfSxcbiAgICAgIHsgZGF0ZTogMjAwMywgdmFsdWU6IDAuOCB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAyMDA5LCB2YWx1ZTogMyB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogNC4yIH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiA2LjMzIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiVW5pdGVkIFN0YXRlc1wiLFxuICAgIHZhbHVlOiA3LjMsXG4gICAgY29sb3I6IFwiIzAwN2JjOFwiLFxuICAgIHByb2RIOiBbMSwgMywgNSwgMTAsIDddLFxuICAgIGRhdGFzZXQ6IFtcbiAgICAgIHsgZGF0ZTogMTk5MywgdmFsdWU6IDAgfSxcbiAgICAgIHsgZGF0ZTogMTk5OCwgdmFsdWU6IDIgfSxcbiAgICAgIHsgZGF0ZTogMjAwMywgdmFsdWU6IDMgfSxcbiAgICAgIHsgZGF0ZTogMjAwNSwgdmFsdWU6IDUuNSB9LFxuICAgICAgeyBkYXRlOiAyMDA5LCB2YWx1ZTogNS44IH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiA3IH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiA3LjMgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJCcmF6aWxcIixcbiAgICB2YWx1ZTogMi44LFxuICAgIGNvbG9yOiBcIiM2NWNlZGJcIixcbiAgICBwcm9kSDogWzQwLCA0OCwgMzIsIDU1LCA3MF0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMCB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMiB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogMyB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogNS41IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiA1LjggfSxcbiAgICAgIHsgZGF0ZTogMjAxNCwgdmFsdWU6IDQgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDIuOCB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3VudHJ5OiBcIkF1c3RyYWxpYVwiLFxuICAgIHZhbHVlOiA3LFxuICAgIGNvbG9yOiBcIiNmZjZlNTJcIixcbiAgICBwcm9kSDogWzEsIDMsIDUsIDEwLCA3XSxcbiAgICBkYXRhc2V0OiBbXG4gICAgICB7IGRhdGU6IDE5OTMsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiAyIH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiAzIH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiA1LjUgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDUuOCB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogNyB9LFxuICAgICAgeyBkYXRlOiAyMDE5LCB2YWx1ZTogNyB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjb3VudHJ5OiBcIkluZGlhXCIsXG4gICAgdmFsdWU6IDQuNixcbiAgICBjb2xvcjogXCIjZjlkZTNmXCIsXG4gICAgcHJvZEg6IFs4LCAxMSwgMTUsIDE4LCAyNl0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMi44IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiA1IH0sXG4gICAgICB7IGRhdGU6IDIwMTQsIHZhbHVlOiAzIH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiA0LjYgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY291bnRyeTogXCJBcmdlbnRpbmFcIixcbiAgICB2YWx1ZTogMSxcbiAgICBjb2xvcjogXCIjNWQyZjhlXCIsXG4gICAgcHJvZEg6IFsxLCAzLCA1LCAxMCwgNy4zXSxcbiAgICBkYXRhc2V0OiBbXG4gICAgICB7IGRhdGU6IDE5OTMsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDE5OTgsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDIwMDMsIHZhbHVlOiAwIH0sXG4gICAgICB7IGRhdGU6IDIwMDUsIHZhbHVlOiAwLjUgfSxcbiAgICAgIHsgZGF0ZTogMjAwOSwgdmFsdWU6IDAuNSB9LFxuICAgICAgeyBkYXRlOiAyMDE0LCB2YWx1ZTogMC44IH0sXG4gICAgICB7IGRhdGU6IDIwMTksIHZhbHVlOiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNvdW50cnk6IFwiS2F6YWtoc3RhblwiLFxuICAgIHZhbHVlOiAzLjIsXG4gICAgY29sb3I6IFwiIzAwOGZjOVwiLFxuICAgIHByb2RIOiBbMTIsIDE1LCAxOCwgOSwgMTYuMF0sXG4gICAgZGF0YXNldDogW1xuICAgICAgeyBkYXRlOiAxOTkzLCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAxOTk4LCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAyMDAzLCB2YWx1ZTogMSB9LFxuICAgICAgeyBkYXRlOiAyMDA1LCB2YWx1ZTogMS41IH0sXG4gICAgICB7IGRhdGU6IDIwMDksIHZhbHVlOiAyLjUgfSxcbiAgICAgIHsgZGF0ZTogMjAxNCwgdmFsdWU6IDIgfSxcbiAgICAgIHsgZGF0ZTogMjAxOSwgdmFsdWU6IDMuMiB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5jb25zdCB5ZWFycyA9IFsyMDAwLCAyMDA1LCAyMDEwLCAyMDE1LCAyMDIwXTtcblxuZnVuY3Rpb24gbGV2ZWwxKCkge1xuICBjb25zdCBzdmdDb250YWluZXIgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyMVwiKTtcbiAgY29uc3Qgc3ZnID0gc3ZnQ29udGFpbmVyLmFwcGVuZChcInN2Z1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydDFcIik7XG5cbiAgY29uc3QgbWFyZ2luID0gODA7XG4gIGNvbnN0IHdpZHRoID0gMTAwMCAtIDIgKiBtYXJnaW47XG4gIGNvbnN0IGhlaWdodCA9IDYwMCAtIDIgKiBtYXJnaW47XG5cbiAgY29uc3QgY2hhcnQgPSBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW59LCAke21hcmdpbn0pYCk7XG5cbiAgY29uc3QgeFNjYWxlID0gZDNcbiAgICAuc2NhbGVCYW5kKClcbiAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAuZG9tYWluKHNhbXBsZS5tYXAoKHMpID0+IHMuY291bnRyeSkpXG4gICAgLnBhZGRpbmcoMC40KTtcblxuICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oWzAsIDEwXSk7XG5cbiAgY29uc3QgbWFrZVlMaW5lcyA9ICgpID0+IGQzLmF4aXNMZWZ0KCkuc2NhbGUoeVNjYWxlKTtcblxuICBjaGFydFxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpO1xuXG4gIGNoYXJ0LmFwcGVuZChcImdcIikuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpKTtcblxuICBjaGFydFxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImdyaWRcIilcbiAgICAuY2FsbChtYWtlWUxpbmVzKCkudGlja1NpemUoLXdpZHRoLCAwLCAwKS50aWNrRm9ybWF0KFwiXCIpKTtcblxuICBjb25zdCBiYXJHcm91cHMgPSBjaGFydC5zZWxlY3RBbGwoKS5kYXRhKHNhbXBsZSkuZW50ZXIoKS5hcHBlbmQoXCJnXCIpO1xuXG4gIGJhckdyb3Vwc1xuICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhcjFcIilcbiAgICAuYXR0cihcInhcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiB4U2NhbGUoZC5jb3VudHJ5KTtcbiAgICB9KVxuICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDApXG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC5kdXJhdGlvbig1MDApXG4gICAgLmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICByZXR1cm4gaSAqIDUwO1xuICAgIH0pXG4gICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB7XG4gICAgICByZXR1cm4geVNjYWxlKGQudmFsdWUpO1xuICAgIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiBoZWlnaHQgLSB5U2NhbGUoZC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgZDMuc2VsZWN0QWxsKFwiLmJhcjFcIilcbiAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoYWN0dWFsLCBpKSB7XG4gICAgICBkMy5zZWxlY3RBbGwoXCIuY2hhcnQxXCIpLnJlbW92ZSgpO1xuICAgICAgbGV2ZWwyKGFjdHVhbCk7XG4gICAgfSlcbiAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uIChhY3R1YWwsIGkpIHtcbiAgICAgIGQzLnNlbGVjdEFsbChcIi52YWx1ZVwiKS5hdHRyKFwib3BhY2l0eVwiLCAwKTtcblxuICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIDAuNilcbiAgICAgICAgLmF0dHIoXCJ4XCIsIChhKSA9PiB4U2NhbGUoYS5jb3VudHJ5KSAtIDUpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpICsgMTApO1xuXG4gICAgICBjb25zdCB5ID0geVNjYWxlKGFjdHVhbC52YWx1ZSk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSBjaGFydFxuICAgICAgICAuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcImlkXCIsIFwibGltaXRcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAwKVxuICAgICAgICAuYXR0cihcInkxXCIsIHkpXG4gICAgICAgIC5hdHRyKFwieDJcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwieTJcIiwgeSk7XG5cbiAgICAgIGJhckdyb3Vwc1xuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZGl2ZXJnZW5jZVwiKVxuICAgICAgICAuYXR0cihcInhcIiwgKGEpID0+IHhTY2FsZShhLmNvdW50cnkpICsgeFNjYWxlLmJhbmR3aWR0aCgpIC8gMilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIChhKSA9PiB5U2NhbGUoYS52YWx1ZSkgLSAxMClcblxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC50ZXh0KChhLCBpZHgpID0+IHtcbiAgICAgICAgICBjb25zdCBkaXZlcmdlbmNlID0gKGEudmFsdWUgLSBhY3R1YWwudmFsdWUpLnRvRml4ZWQoMSk7XG5cbiAgICAgICAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgICAgICAgaWYgKGRpdmVyZ2VuY2UgPiAwKSB0ZXh0ICs9IFwiK1wiO1xuICAgICAgICAgIHRleHQgKz0gYCR7ZGl2ZXJnZW5jZX0lYDtcblxuICAgICAgICAgIHJldHVybiBpZHggIT09IGkgPyB0ZXh0IDogYCR7YWN0dWFsLmNvdW50cnl9LCAke2FjdHVhbC52YWx1ZX0lYDtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGQzLnNlbGVjdEFsbChcIi52YWx1ZVwiKS5hdHRyKFwib3BhY2l0eVwiLCAxKTtcblxuICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgIC5hdHRyKFwieFwiLCAoYSkgPT4geFNjYWxlKGEuY291bnRyeSkpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgeFNjYWxlLmJhbmR3aWR0aCgpKTtcblxuICAgICAgY2hhcnQuc2VsZWN0QWxsKFwiI2xpbWl0XCIpLnJlbW92ZSgpO1xuICAgICAgY2hhcnQuc2VsZWN0QWxsKFwiLmRpdmVyZ2VuY2VcIikucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgbGV0IHRleHQgPSBiYXJHcm91cHNcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2YWx1ZVwiKVxuICAgIC5hdHRyKFwieFwiLCAoYSkgPT4geFNjYWxlKGEuY291bnRyeSkgKyB4U2NhbGUuYmFuZHdpZHRoKCkgLyAyKVxuICAgIC5hdHRyKFwieVwiLCAoYSkgPT4geVNjYWxlKGEudmFsdWUpIC0gNSlcbiAgICAuYXR0cihcInlcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCAwKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oMzAwKVxuICAgIC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgcmV0dXJuIGkgKiA1MDtcbiAgICB9KVxuICAgIC5hdHRyKFwieVwiLCAoZCkgPT4ge1xuICAgICAgcmV0dXJuIHlTY2FsZShkLnZhbHVlKSAtIDIwO1xuICAgIH0pXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IHtcbiAgICAgIHJldHVybiBoZWlnaHQgLSB5U2NhbGUoZC52YWx1ZSk7XG4gICAgfSlcbiAgICAuYXR0cihcImhlaWdodFwiLCAoYSkgPT4gYS52YWx1ZSlcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoMCk7XG5cblxuICB0ZXh0XG4gICAgLnRyYW5zaXRpb24oKVxuICAgIC50d2VlbihcInRleHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgIHZhciBzdGFydCA9IGQzLnNlbGVjdCh0aGlzKS50ZXh0KCk7XG4gICAgICB2YXIgZW5kID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIik7XG4gICAgICB2YXIgaW50ZXJwb2xhdG9yID0gZDMuaW50ZXJwb2xhdGVOdW1iZXIoZW5kLCBlbmQpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgc2VsZWN0aW9uLnRleHQoTWF0aC5yb3VuZChpbnRlcnBvbGF0b3IodCkpKTtcbiAgICAgIH07IFxuICAgIH0pXG4gICAgLmR1cmF0aW9uKDMwMDApO1xuXG4gIHN2Z1xuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImxhYmVsXCIpXG4gICAgLmF0dHIoXCJ4XCIsIC0oaGVpZ2h0IC8gMikgLSBtYXJnaW4pXG4gICAgLmF0dHIoXCJ5XCIsIG1hcmdpbiAvIDIuNClcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KFwiT3V0IG9mIHRvdGFsIGVsZWN0cmljaXR5IGdlbnJhdGlvbiAoJSlcIik7XG5cbiAgc3ZnXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwidGl0bGVcIilcbiAgICAuYXR0cihcInhcIiwgd2lkdGggLyAyICsgbWFyZ2luKVxuICAgIC5hdHRyKFwieVwiLCA0MClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJFbGVjdHJpY2l0eSBnZW5lcmF0aW9uIGJ5IHdpbmQgcG93ZXIgaW4gMjAxOVwiKTtcblxuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYWNrMlwiKVxuICAgIC5hdHRyKFwieFwiLCB3aWR0aCAvIDEwKVxuICAgIC5hdHRyKFwieVwiLCA0MClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJDbGljayB0byBmaW5kIG91dCBtb3JlXCIpXG4gICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGFjdHVhbCwgaSkge1xuICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0MVwiKS5yZW1vdmUoKTtcbiAgICAgIGxldmVsMygpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBsZXZlbDIoYWN0dWFsKSB7XG4gIGNvbnN0IGxpbmVEYXRhID0gYWN0dWFsLmRhdGFzZXQ7XG4gIGNvbnNvbGUubG9nKGxpbmVEYXRhKTtcbiAgY29uc3QgbWFyZ2luID0gODA7XG5cbiAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjFcIik7XG4gIGNvbnN0IHN2ZyA9IHN2Z0NvbnRhaW5lci5hcHBlbmQoXCJzdmdcIikuYXR0cihcImNsYXNzXCIsIFwiY2hhcnQxXCIpO1xuXG4gIGNvbnN0IGNoYXJ0ID0gc3ZnXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImlkXCIsIFwidmlzdWFsaXNhdGlvblwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4gLyAyfSwgJHttYXJnaW59KWApO1xuXG4gIHZhciB2aXMgPSBkMy5zZWxlY3QoXCIjdmlzdWFsaXNhdGlvblwiKSxcbiAgICBNQVJHSU5TID0gODAsXG4gICAgV0lEVEggPSAxMDAwIC0gMiAqIE1BUkdJTlMsXG4gICAgSEVJR0hUID0gNjAwIC0gMiAqIE1BUkdJTlMsXG4gICAgTUFSR0lOUyA9IHtcbiAgICAgIHRvcDogMjAsXG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgbGVmdDogNTAsXG4gICAgfSxcbiAgICB4UmFuZ2UgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbMCwgV0lEVEhdKVxuICAgICAgLmRvbWFpbihkMy5leHRlbnQobGluZURhdGEsIChkYXRhUG9pbnQpID0+IGRhdGFQb2ludC5kYXRlKSksXG4gICAgeVJhbmdlID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW0hFSUdIVCAtIE1BUkdJTlMudG9wLCBNQVJHSU5TLmJvdHRvbV0pXG4gICAgICAuZG9tYWluKFtcbiAgICAgICAgMCxcbiAgICAgICAgZDMubWF4KGxpbmVEYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLnZhbHVlO1xuICAgICAgICB9KSxcbiAgICAgIF0pLFxuICAgIHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpLnNjYWxlKHhSYW5nZSksXG4gICAgeUF4aXMgPSBkMy5heGlzTGVmdCgpLnNjYWxlKHlSYW5nZSk7XG5cbiAgY29uc3QgbWFrZVlMaW5lcyA9ICgpID0+IGQzLmF4aXNMZWZ0KCkuc2NhbGUoeVJhbmdlKTtcblxuICBjaGFydFxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImdyaWRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCArIFwiLDApXCIpXG4gICAgLmNhbGwobWFrZVlMaW5lcygpLnRpY2tTaXplKC1XSURUSCwgMCwgMCkudGlja0Zvcm1hdChcIlwiKSk7XG5cbiAgdmlzXG4gICAgLmFwcGVuZChcInN2ZzpnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInggYXhpc1wiKVxuICAgIC5hdHRyKFxuICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwidHJhbnNsYXRlKFwiICsgTUFSR0lOUy5sZWZ0ICsgXCIsXCIgKyAoSEVJR0hUIC0gTUFSR0lOUy5ib3R0b20pICsgXCIpXCJcbiAgICApXG4gICAgLmNhbGwoeEF4aXMpO1xuXG4gIHZpc1xuICAgIC5hcHBlbmQoXCJzdmc6Z1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGF4aXNcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCArIFwiLDApXCIpXG4gICAgLmNhbGwoeUF4aXMpO1xuXG4gIHZhciBsaW5lRnVuYyA9IGQzXG4gICAgLmxpbmUoKVxuICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4geFJhbmdlKGQuZGF0ZSk7XG4gICAgfSlcbiAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIHlSYW5nZShkLnZhbHVlKTtcbiAgICB9KVxuICAgIC5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKTtcblxuICBjb25zdCBwYXRoID0gdmlzXG4gICAgLmFwcGVuZChcInN2ZzpwYXRoXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInBhdGgxXCIpXG4gICAgLmF0dHIoXCJkXCIsIGxpbmVGdW5jKGxpbmVEYXRhKSlcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsdWVcIilcbiAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIE1BUkdJTlMubGVmdCArIFwiLDApXCIpO1xuXG4gIGxldCB0b3RhbExlbmd0aCA9IHBhdGgubm9kZSgpLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgcGF0aFxuICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCB0b3RhbExlbmd0aCArIFwiIFwiICsgdG90YWxMZW5ndGgpXG4gICAgLmF0dHIoXCJzdHJva2UtZGFzaG9mZnNldFwiLCB0b3RhbExlbmd0aClcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKDQwMDApXG4gICAgLmVhc2UoZDMuZWFzZUxpbmVhcilcbiAgICAuYXR0cihcInN0cm9rZS1kYXNob2Zmc2V0XCIsIDApO1xuXG4gIHN2Z1xuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpdGxlXCIpXG4gICAgLmF0dHIoXCJ4XCIsIFdJRFRIIC8gMiArIDgwKVxuICAgIC5hdHRyKFwieVwiLCA0MClcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoYFdpbmQgcG93ZXIgdXNhZ2UgaW4gJHthY3R1YWwuY291bnRyeX0gdGhyb3VnaG91dCB0aGUgeWVhcnNgKTtcblxuICBzdmdcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYWJlbFwiKVxuICAgIC5hdHRyKFwieFwiLCAtKEhFSUdIVCAvIDIpIC0gODApXG4gICAgLmF0dHIoXCJ5XCIsIDgwIC8gMi40KVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgLnRleHQoXCJPdXQgb2YgdG90YWwgZWxlY3RyaWNpdHkgZ2VucmF0aW9uICglKVwiKTtcbiAgc3ZnXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFjazNcIilcbiAgICAuYXR0cihcInhcIiwgV0lEVEggLyAxMClcbiAgICAuYXR0cihcInlcIiwgNDApXG4gICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC50ZXh0KFwiQmFja1wiKVxuICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChhY3R1YWwsIGkpIHtcbiAgICAgIGQzLnNlbGVjdEFsbChcIi5jaGFydDFcIikucmVtb3ZlKCk7XG4gICAgICBsZXZlbDEoKTtcbiAgICB9KTtcbn1cblxuICBmdW5jdGlvbiBsZXZlbDMoKSB7XG4gICAgY29uc3Qgc3ZnQ29udGFpbmVyID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjFcIik7XG4gICAgY29uc3Qgc3ZnID0gc3ZnQ29udGFpbmVyLmFwcGVuZChcInN2Z1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydDFcIik7XG4gICAgKE1BUkdJTlMgPSA4MCksXG4gICAgICAoV0lEVEggPSAxMDAwIC0gMiAqIE1BUkdJTlMpLFxuICAgICAgKEhFSUdIVCA9IDYwMCAtIDIgKiBNQVJHSU5TKSxcbiAgICAgIChNQVJHSU5TID0ge1xuICAgICAgICB0b3A6IDIwLFxuICAgICAgICByaWdodDogMjAsXG4gICAgICAgIGJvdHRvbTogMjAsXG4gICAgICAgIGxlZnQ6IDUwLFxuICAgICAgfSksXG4gICAgICBzdmdcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhY2s0XCIpXG4gICAgICAgIC5hdHRyKFwieFwiLCBXSURUSCAvIDEwKVxuICAgICAgICAuYXR0cihcInlcIiwgNjUwKVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgIC50ZXh0KFwiQmFja1wiKVxuICAgICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmNoYXJ0MVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICBsZXZlbDEoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHN2Z1xuICAgICAgICAuYXBwZW5kKFwiZm9yZWlnbk9iamVjdFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZ3JhcGgtdGl0bGUxXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgV0lEVEgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDYwMClcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDUwKVxuICAgICAgICAuYXR0cihcInlcIiwgMClcbiAgICAgICAgLmFwcGVuZChcInhodG1sOmJvZHlcIilcbiAgICAgICAgLnN0eWxlKFwiZm9udFwiLCBcIjE0cHggJ0hlbHZldGljYSBOZXVlJ1wiKVxuICAgICAgICAuaHRtbChcbiAgICAgICAgICBcIjxoMT5XaW5kIFBvd2VyPC9oMT48ZGl2PjxkaXY+PHA+V2luZCBwb3dlciBvciB3aW5kIGVuZXJneSBpcyB0aGUgdXNlIG9mIHdpbmQgdG8gcHJvdmlkZSB0aGUgbWVjaGFuaWNhbCBwb3dlciB0aHJvdWdoIHdpbmQgdHVyYmluZXMgdG8gdHVybiBlbGVjdHJpYyBnZW5lcmF0b3JzIGFuZCB0cmFkaXRpb25hbGx5IHRvIGRvIG90aGVyIHdvcmssIGxpa2UgbWlsbGluZyBvciBwdW1waW5nLjwvcD48cD5XaGVuIHRoZSB3aW5kIGJsb3dzIHBhc3QgYSB3aW5kIHR1cmJpbmUsIGl0cyBibGFkZXMgY2FwdHVyZSB0aGUgd2luZCdzIGtpbmV0aWMgZW5lcmd5IGFuZCByb3RhdGUsIHR1cm5pbmcgaXQgaW50byBtZWNoYW5pY2FsIGVuZXJneS4gVGhpcyByb3RhdGlvbiB0dXJucyBhbiBpbnRlcm5hbCBzaGFmdCBjb25uZWN0ZWQgdG8gYSBnZWFyYm94LCB3aGljaCBpbmNyZWFzZXMgdGhlIHNwZWVkIG9mIHJvdGF0aW9uIGJ5IGEgZmFjdG9yIG9mIDEwMC4gVGhhdCBzcGlucyBhIGdlbmVyYXRvciB0aGF0IHByb2R1Y2VzIGVsZWN0cmljaXR5LjxwPiA8L3A+PC9kaXY+PGRpdiBjbGFzcz0nZ3JhcGgtZGl2MSc+PC9kaXY+PC9kaXY+XCJcbiAgICAgICAgKTtcblxuICAgXG4gIH1cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2hhdDNcIik7XG4gIGgub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXZlbDEoKTtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==