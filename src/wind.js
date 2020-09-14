const sample = [
  {
    country: "Russia",
    value: 16.0,
    color: "#000000",
    prodH: [12, 15, 18, 9, 16.0],
    dataset: [
      { date: 2000, value: 12 },
      { date: 2005, value: 15 },
      { date: 2010, value: 18 },
      { date: 2015, value: 11 },
      { date: 2020, value: 16 },
    ],
  },
  {
    country: "Canada",
    value: 60.0,
    color: "#00a2ee",
    prodH: [45, 32, 58, 65, 60],
    dataset: [
      { date: 2000, value: 45 },
      { date: 2005, value: 32 },
      { date: 2010, value: 58 },
      { date: 2015, value: 65 },
      { date: 2020, value: 60 },
    ],
  },
  {
    country: "China",
    value: 20.0,
    color: "#fbcb39",
    prodH: [8, 11, 15, 18, 20],
    dataset: [
      { date: 2000, value: 8 },
      { date: 2005, value: 11 },
      { date: 2010, value: 15 },
      { date: 2015, value: 18 },
      { date: 2020, value: 20 },
    ],
  },
  {
    country: "United States",
    value: 7.0,
    color: "#007bc8",
    prodH: [1, 3, 5, 10, 7],
    dataset: [
      { date: 2000, value: 1 },
      { date: 2005, value: 3 },
      { date: 2010, value: 5 },
      { date: 2015, value: 10 },
      { date: 2020, value: 7 },
    ],
  },
  {
    country: "Brazil",
    value: 70.0,
    color: "#65cedb",
    prodH: [40, 48, 32, 55, 70],
    dataset: [
      { date: 2000, value: 40 },
      { date: 2005, value: 48 },
      { date: 2010, value: 32 },
      { date: 2015, value: 55 },
      { date: 2020, value: 70 },
    ],
  },
  {
    country: "Australia",
    value: 7,
    color: "#ff6e52",
    prodH: [1, 3, 5, 10, 7],
    dataset: [
      { date: 2000, value: 1 },
      { date: 2005, value: 3 },
      { date: 2010, value: 5 },
      { date: 2015, value: 10 },
      { date: 2020, value: 7 },
    ],
  },
  {
    country: "India",
    value: 26.0,
    color: "#f9de3f",
    prodH: [8, 11, 15, 18, 26],
    dataset: [
      { date: 2000, value: 8 },
      { date: 2005, value: 11 },
      { date: 2010, value: 15 },
      { date: 2015, value: 18 },
      { date: 2020, value: 26 },
    ],
  },
  {
    country: "Argentina",
    value: 7.3,
    color: "#5d2f8e",
    prodH: [1, 3, 5, 10, 7.3],
    dataset: [
      { date: 2000, value: 1 },
      { date: 2005, value: 3 },
      { date: 2010, value: 5 },
      { date: 2015, value: 10 },
      { date: 2020, value: 7.3 },
    ],
  },
  {
    country: "Kazakhstan",
    value: 13.0,
    color: "#008fc9",
    prodH: [12, 15, 18, 9, 16.0],
    dataset: [
      { date: 2000, value: 12 },
      { date: 2005, value: 15 },
      { date: 2010, value: 18 },
      { date: 2015, value: 9 },
      { date: 2020, value: 16 },
    ],
  },
  {
    country: "Sudan",
    value: 65.0,
    color: "#507dca",
    prodH: [45, 32, 58, 65, 60],
    dataset: [
      { date: 2000, value: 45 },
      { date: 2005, value: 32 },
      { date: 2010, value: 58 },
      { date: 2015, value: 65 },
      { date: 2020, value: 60 },
    ],
  },
];

const years = [2000, 2005, 2010, 2015, 2020];

function level1() {
  const svgContainer = d3.select("#container1");
  const svg = svgContainer.append("svg").attr("class", "chart1");

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

  const yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);

  const makeYLines = () => d3.axisLeft().scale(yScale);

  chart
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  chart.append("g").call(d3.axisLeft(yScale));

  chart
    .append("g")
    .attr("class", "grid1")
    .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

  const barGroups = chart.selectAll().data(sample).enter().append("g");

  barGroups
    .append("rect")
    .attr("class", "bar1")
    .attr("x", (g) => xScale(g.country))
    .attr("y", (g) => yScale(g.value))
    .attr("height", (g) => height - yScale(g.value))
    .attr("width", xScale.bandwidth())
    .on("click", function (actual, i) {
      d3.selectAll(".chart1").remove();
      level2(actual);
    })
    .on("mouseenter", function (actual, i) {
      d3.selectAll(".value1").attr("opacity", 0);

      d3.select(this)
        .transition()
        .duration(300)
        .attr("opacity", 0.6)
        .attr("x", (a) => xScale(a.country) - 5)
        .attr("width", xScale.bandwidth() + 10);

      const y = yScale(actual.value);

      const line = chart
        .append("line1")
        .attr("id", "limit1")
        .attr("x1", 0)
        .attr("y1", y)
        .attr("x2", width)
        .attr("y2", y);

      barGroups
        .append("text")
        .attr("class", "divergence1")
        .attr("x", (a) => xScale(a.country) + xScale.bandwidth() / 2)
        .attr("y", (a) => yScale(a.value) + 20)
        .attr("fill", "rgb(165, 40, 40)")
        .attr("text-anchor", "middle")
        .text((a, idx) => {
          const divergence = (a.value - actual.value).toFixed(1);

          let text = "";
          if (divergence > 0) text += "+";
          text += `${divergence}%`;

          return idx !== i ? text : "";
        });
    })
    .on("mouseleave", function () {
      d3.selectAll(".value1").attr("opacity", 1);

      d3.select(this)
        .transition()
        .duration(300)
        .attr("opacity", 1)
        .attr("x", (a) => xScale(a.country))
        .attr("width", xScale.bandwidth());

      chart.selectAll("#limit1").remove();
      chart.selectAll(".divergence1").remove();
    });

  barGroups
    .append("text")
    .attr("class", "value1")
    .attr("x", (a) => xScale(a.country) + xScale.bandwidth() / 2)
    .attr("y", (a) => yScale(a.value) - 5)
    .attr("text-anchor", "middle")
    .text((a) => `${a.value}%`);

  svg
    .append("text")
    .attr("class", "label1")
    .attr("x", -(height / 2) - margin)
    .attr("y", margin / 2.4)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Out of total electricity genration (%)");

  svg
    .append("text")
    .attr("class", "title1")
    .attr("x", width / 2 + margin)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .text("Electricity generation by hydropower in 2019");
}

function level2(actual) {
  const lineData = actual.dataset;
  console.log(lineData);
  const margin = 80;

  const svgContainer = d3.select("#container1");
  const svg = svgContainer.append("svg").attr("class", "chart1");

  const chart = svg
    .append("g")
    .attr("id", "visualisation1")
    .attr("transform", `translate(${margin / 2}, ${margin})`);

  var vis = d3.select("#visualisation1"),
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
      .scaleBand()
      .range([MARGINS.left, WIDTH - MARGINS.right])
      .domain(years.map((s) => s))
      .padding(0.4),
    yRange = d3
      .scaleLinear()
      .range([HEIGHT - MARGINS.top, MARGINS.bottom])
      .domain([
        d3.min(lineData, function (d) {
          return d.value;
        }),
        d3.max(lineData, function (d) {
          return d.value;
        }),
      ]),
    xAxis = d3.axisBottom().scale(xRange),
    yAxis = d3.axisLeft().scale(yRange);

  const makeYLines = () => d3.axisLeft().scale(yRange);

  chart
    .append("g")
    .attr("class", "grid1")
    .attr("transform", "translate(" + MARGINS.left + ",0)")
    .call(makeYLines().tickSize(-WIDTH, 0, 0).tickFormat(""));

  vis
    .append("svg:g")
    .attr("class", "x axis1")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    .call(xAxis);

  vis
    .append("svg:g")
    .attr("class", "y axis1")
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

  vis
    .append("svg:path")
    .attr("d", lineFunc(lineData))
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("fill", "none")
    .on("click", function (actual, i) {
      d3.selectAll(".chart1").remove();
      level1();
    });

  svg
    .append("text")
    .attr("class", "title1")
    .attr("x", WIDTH / 2 + 80)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .text(`Hydro power usage in ${actual.country} throughout the years`);

  svg
    .append("text")
    .attr("class", "label1")
    .attr("x", -(HEIGHT / 2) - 80)
    .attr("y", 80 / 2.4)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Out of total electricity genration (%)");
  svg
    .append("text")
    .attr("class", "title1")
    .attr("x", WIDTH / 2 + 80)
    .attr("y", 60)
    .attr("text-anchor", "middle")
    .text("Electricity generation by hydropower in 2019")
    .on("click", function (actual, i) {
      d3.selectAll(".chart1").remove();
      level1();
    });
}

$(document).ready(function () {
  level1();
});


