const sample = [
  {
    country: "Russia",
    value: 19.95,
    color: "#000000",
    prodH: [12, 15, 18, 9, 16.0],
    dataset: [
      { date: 1993, value: 2 },
      { date: 1998, value: 3 },
      { date: 2003, value: 8 },
      { date: 2005, value: 17 },
      { date: 2009, value: 12 },
      { date: 2014, value: 17 },
      { date: 2019, value: 19.95 },
    ],
  },
  {
    country: "Canada",
    value: 61.3,
    color: "#00a2ee",
    prodH: [45, 32, 58, 65, 60],
    dataset: [
      { date: 1993, value: 0 },
      { date: 1998, value: 0 },
      { date: 2003, value: 8 },
      { date: 2005, value: 30 },
      { date: 2009, value: 45 },
      { date: 2014, value: 42 },
      { date: 2019, value: 61.3 },
    ],
  },
  {
    country: "China",
    value: 20.0,
    color: "#fbcb39",
    prodH: [8, 11, 15, 18, 20],
    dataset: [
      { date: 1993, value: 3 },
      { date: 1998, value: 4 },
      { date: 2003, value: 7 },
      { date: 2005, value: 26 },
      { date: 2009, value: 11 },
      { date: 2014, value: 16 },
      { date: 2019, value: 20 },
    ],
  },
  {
    country: "United States",
    value: 6.6,
    color: "#007bc8",
    prodH: [1, 3, 5, 10, 7],
    dataset: [
      { date: 1993, value: 2 },
      { date: 1998, value: 3 },
      { date: 2003, value: 5 },
      { date: 2005, value: 10 },
      { date: 2009, value: 15 },
      { date: 2014, value: 12 },
      { date: 2019, value: 6.6 },
    ],
  },
  {
    country: "Brazil",
    value: 65.0,
    color: "#65cedb",
    prodH: [40, 48, 32, 55, 70],
    dataset: [
      { date: 1993, value: 16 },
      { date: 1998, value: 20 },
      { date: 2003, value: 36 },
      { date: 2005, value: 50 },
      { date: 2009, value: 29 },
      { date: 2014, value: 46 },
      { date: 2019, value: 65 },
    ],
  },
  {
    country: "Australia",
    value: 5,
    color: "#ff6e52",
    prodH: [1, 3, 5, 10, 7],
    dataset: [
      { date: 1993, value: 6 },
      { date: 1998, value: 5 },
      { date: 2003, value: 6 },
      { date: 2005, value: 9 },
      { date: 2009, value: 2 },
      { date: 2014, value: 3 },
      { date: 2019, value: 5 },
    ],
  },
  {
    country: "India",
    value: 26.0,
    color: "#f9de3f",
    prodH: [8, 11, 15, 18, 26],
    dataset: [
      { date: 1993, value: 1 },
      { date: 1998, value: 2 },
      { date: 2003, value: 9 },
      { date: 2005, value: 15 },
      { date: 2009, value: 11 },
      { date: 2014, value: 19 },
      { date: 2019, value: 26 },
    ],
  },
  {
    country: "Argentina",
    value: 36,
    color: "#5d2f8e",
    prodH: [1, 3, 5, 10, 7.3],
    dataset: [
      { date: 1993, value: 5 },
      { date: 1998, value: 3 },
      { date: 2003, value: 8 },
      { date: 2005, value: 20 },
      { date: 2009, value: 27 },
      { date: 2014, value: 23 },
      { date: 2019, value: 36 },
    ],
  },
  {
    country: "Kazakhstan",
    value: 13.0,
    color: "#008fc9",
    prodH: [12, 15, 18, 9, 16.0],
    dataset: [
      { date: 1993, value: 0 },
      { date: 1998, value: 0 },
      { date: 2003, value: 0 },
      { date: 2005, value: 5 },
      { date: 2009, value: 9 },
      { date: 2014, value: 18 },
      { date: 2019, value: 13 },
    ],
  },
];

const years = [2000,2005, 2010, 2015, 2020]


function level1() {

const svgContainer = d3.select("#container");
const svg = svgContainer.append("svg").attr("class", "chart");

const margin = 80;
const width = 1000 - 2 * margin;
const height = 600 - 2 * margin;

const chart = svg
  .append("g")
  .attr("transform", `translate(${margin}, ${margin})`);

const xScale = d3
  .scaleBand()
  .range([0, width])
  .domain(sample.map((s) => s.country))
  .padding(0.4);

const yScale = d3.scaleLinear().range([height, 0]).domain([0, 70]);

const makeYLines = () => d3.axisLeft().scale(yScale);

chart
  .append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

chart.append("g").call(d3.axisLeft(yScale));

chart
  .append("g")
  .attr("class", "grid")
  .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

const barGroups = chart.selectAll().data(sample).enter().append("g");

barGroups
  .append("rect")
  .attr("class", "bar")
  .attr("x",  d => { return xScale(d.country); })
  .attr("width", xScale.bandwidth())
  .attr("height", 0).transition().duration(500).delay(function (d, i) {return i * 50;})
  .attr("y",  d => { return yScale(d.value); })
  .attr("height",  d => { return height - yScale(d.value); })

d3.selectAll(".bar")
  .on("click", function(actual, i) {
    d3.selectAll(".chart").remove();
    level2(actual);

  })
  .on("mouseenter", function (actual, i)
    {
   

    d3.selectAll(".value").attr("opacity", 0);

    d3.select(this)
      .transition()
      .duration(300)
      .attr("opacity", 0.6)
      .attr("x", (a) => xScale(a.country) - 5)
      .attr("width", xScale.bandwidth() + 10);

    const y = yScale(actual.value);

    const line = chart
      .append("line")
      .attr("id", "limit")
      .attr("x1", 0)
      .attr("y1", y)
      .attr("x2", width)
      .attr("y2", y);

    barGroups
      .append("text")
      .attr("class", "divergence")
      .attr("x", (a) => xScale(a.country) + xScale.bandwidth() / 2)
      .attr("y", (a) => yScale(a.value) - 10)
 
      .attr("text-anchor", "middle")
      .text((a, idx) => {
        const divergence = (a.value - actual.value).toFixed(1);

        let text = "";
        if (divergence > 0) text += "+";
        text += `${divergence}%`;

        return idx !== i
          ? text
          : `${actual.country}, ${actual.value}%`;
      });
    
  })
  .on("mouseleave", function () {
    d3.selectAll(".value").attr("opacity", 1);

    d3.select(this)
      .transition()
      .duration(300)
      .attr("opacity", 1)
      .attr("x", (a) => xScale(a.country))
      .attr("width", xScale.bandwidth());

    chart.selectAll("#limit").remove();
    chart.selectAll(".divergence").remove();
  });



let text = barGroups
  .append("text")
  .attr("class", "value")
  .attr("x", (a) => xScale(a.country) + xScale.bandwidth() / 2)
  .attr("y", (a) => yScale(a.value) - 5)
  .attr("y",  d => { return height ; })
  .attr("height", 0)
  .transition()
  .duration(500)
  .delay(function (d, i) {
    return i * 50;
  })
  .attr("y", (d) => {
    return yScale(d.value) - 20;
  })
  .attr("height", (d) => {
    return height - yScale(d.value);
  })
  .attr("height", (a) => a.value)
  .attr("text-anchor", "middle")
  .text(0);


  text
    .transition()
    .tween("text", function () {
      var selection = d3.select(this); 
      var start = d3.select(this).text(); 
      var end = this.getAttribute("height"); 
      var interpolator = d3.interpolateNumber(start, end); 
      return function (t) {
        selection.text(Math.round(interpolator(t)));
      }; 
    })
    .duration(3000); 

svg
  .append("text")
  .attr("class", "label")
  .attr("x", -(height / 2) - margin)
  .attr("y", margin / 2.4)
  .attr("transform", "rotate(-90)")
  .attr("text-anchor", "middle")
  .text("Out of total electricity genration (%)");

svg
  .append("text")
  .attr("class", "title")
  .attr("x", width / 2 + margin)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .text("Electricity generation by hydropower in 2019");

svg
  .append("text")
  .attr("class", "back2")
  .attr("x", width / 10)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .text("Click to find out more")
  .on("click", function (actual, i) {
    d3.selectAll(".chart").remove();
    level3();
  });
}

function level2(actual) {
    const lineData = actual.dataset
    console.log(lineData)
    const margin = 80;


    const svgContainer = d3.select("#container");
    const svg = svgContainer.append("svg").attr("class", "chart")

    const chart = svg
      .append("g")
      .attr("id", "visualisation")
      .attr("transform", `translate(${margin/2}, ${margin})`);

    var vis = d3.select("#visualisation"),
      MARGINS = 80,
      WIDTH = 1000 - 2 * MARGINS,
      HEIGHT = 600 - 2 * MARGINS,
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50,
      },
      xRange = d3
        .scaleLinear()
        .range([0, WIDTH])
        .domain(d3.extent(lineData, (dataPoint) => dataPoint.date)),
      yRange = d3
        .scaleLinear()
        .range([HEIGHT - MARGINS.top, MARGINS.bottom])
        .domain([
          0,
          d3.max(lineData, function (d) {
            return d.value;
          }),
        ]),
      xAxis = d3.axisBottom().scale(xRange).tickFormat(d3.format("d")),
      yAxis = d3.axisLeft().scale(yRange);

      const makeYLines = () => d3.axisLeft().scale(yRange);

      chart
        .append("g")
        .attr("class", "grid")
        .attr("transform", "translate(" + MARGINS.left  + ",0)")
        .call(makeYLines().tickSize(-WIDTH, 0, 0).tickFormat(""));


    vis
      .append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate("+MARGINS.left +"," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);

    vis
      .append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + MARGINS.left + ",0)")
      .call(yAxis);

    var lineFunc = d3
      .line()
      .x(function (d) {
        return xRange(d.date);
      })
      .y(function (d) {
        return yRange(d.value);
      })
      .curve(d3.curveBasis);
    

    const path = vis
      .append("svg:path")
      .attr("class", "path")
      .attr("d", lineFunc(lineData))
      .attr("stroke", "blue")
      .attr("stroke-width", 2)
      .attr("fill", "none")
      .attr("transform", "translate(" + MARGINS.left + ",0)");

    let totalLength = path.node().getTotalLength();

    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(4000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0); 


      svg
      .append("text")
      .attr("class", "title")
      .attr("x", WIDTH / 2 + 80)
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .text(`Hydro power usage in ${actual.country} throughout the years`);

    svg
      .append("text")
      .attr("class", "label")
      .attr("x", -(HEIGHT / 2) - 80)
      .attr("y", 80/ 2.4)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text("Out of total electricity genration (%)");

    svg
      .append("text")
      .attr("class", "back2")
      .attr("x", WIDTH / 10)
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .text("Back")
      .on("click", function (actual, i) {
        d3.selectAll(".chart").remove();
        level1();
      });
}

function level3() {
  const svgContainer = d3.select("#container");
  const svg = svgContainer.append("svg").attr("class", "chart");
  (MARGINS = 80),
    (WIDTH = 1000 - 2 * MARGINS),
    (HEIGHT = 600 - 2 * MARGINS),
    (MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50,
    }),
    svg
      .append("foreignObject")
      .attr("class", "graph-title")
      .attr("width", WIDTH)
      .attr("height", 600)
      .attr("x", 50)
      .attr("y", 0)
      .append("xhtml:body")
      .style("font", "14px 'Helvetica Neue'")
      .html(
        "<h1>Hydroelectricity</h1><div><div><p>Hydroenergy is a renewable type of energy that uses flowing water to power a turbine to produce electrical energy</p><p>To generate electricity, water must be in motion. This is kinetic (moving) energy. When flowing water turns blades in a turbine, the form is changed to mechanical (machine) energy. The turbine turns the generator rotor which then converts this mechanical energy into another energy form -- electricity. Since water is the initial source of energy, we call this hydroelectric power or hydropower for short. </p></div><div class='graph-div'></div></div>");
    
    svg
      .append("text")
      .attr("class", "back2")
      .attr("x", WIDTH / 10)
      .attr("y", 50)
      .attr("text-anchor", "middle")
      .text("Back")
      .on("click", function () {
        d3.selectAll(".chart").remove();
        level1();
      });




}

window.addEventListener("DOMContentLoaded", () => {
   let h = document.getElementById("what1");
  h.onclick = function () {
    level1();
  };
});
