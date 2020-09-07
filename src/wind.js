const sample = [
  {
    country: "Russia",
    value: 0.08,
    color: "#000000",
  },
  {
    country: "Canada",
    value: 5.0,
    color: "#00a2ee",
  },
  {
    country: "China",
    value: 4.0,
    color: "#fbcb39",
  },
  {
    country: "United States",
    value: 7.3,
    color: "#007bc8",
  },
  {
    country: "Brazil",
    value: 9.2,
    color: "#65cedb",
  },
  {
    country: "Australia",
    value: 8.5,
    color: "#ff6e52",
  },
  {
    country: "India",
    value: 10.0,
    color: "#f9de3f",
  },
  {
    country: "Argentina",
    value: 2.4,
    color: "#5d2f8e",
  },
  {
    country: "Kazakhstan",
    value: 0.1,
    color: "#008fc9",
  },
  {
    country: "Sudan",
    value: 6.0,
    color: "#507dca",
  },
];

const svg = d3.select(".wind-chart");
const svgContainer = d3.select("#wind-container");

const margin = 80;
const width = 1000 - 2 * margin;
const height = 600 - 2 * margin;

const chart = svg
  .append("g")
  .attr("transform", `translate(${margin}, ${margin})`);

const xScale = d3
.scaleLinear()
.range([0, width])
.domain([0, 12]);

const yScale = d3
  .scaleBand()
  .range([height, -80])
  .domain(sample.map((s) => s.country))
  
  chart
  .append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));
  
  chart.append("g").call(d3.axisLeft(yScale));

  const barGroups = chart.selectAll().data(sample).enter().append("g");

 barGroups
    .append("rect")
    .attr("class", "wind-bar")
    .attr("x", (s) => 0)
    .attr("y", (s) => yScale(s.country) + 10)
    .attr("height", yScale.bandwidth()- 20)
    .attr("width", (s) => xScale(s.value))
    .on('mouseenter', function(actual, i) {
        d3.select(this)
          .attr("opacity", 0.5)
          .attr("class", "new");

        const x = xScale(actual.value);

        const line = chart
          .append("line")
          .attr("class", "wind-line")
          .attr("id", "limit")
          .attr("x1", x)
          .attr("y1", -80)
          .attr("x2", x)
          .attr("y2", height);
    })
    .on('mouseleave', function (actual, i) {
        d3.select(this)
        .attr("opacity", 1)
        .attr("class", "wind-bar")
        d3.selectAll(".wind-line").remove()



    })

barGroups
  .append("text")
  .attr("class", "value")
  .attr("x", (a) => xScale(a.value) + 40)
  .attr("y", (a) => yScale(a.country) + yScale.bandwidth() / 2)
  .attr("text-anchor", "middle")
  .text((a) => `${a.value}%`);

chart
  .append("g")
  .attr("class", "wind-grid")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom().scale(xScale).tickSize(-height -80, 0, 0).tickFormat(""));

svg
  .append("text")
  .attr("x", width / 2 + margin)
  .attr("y", height + 120)
  .attr("text-anchor", "middle")
  .text("Out of total electricity genration (%)");



