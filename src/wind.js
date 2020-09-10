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

const svg = d3.select(".chart1");
const svgContainer = d3.select("#container1");

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
  .attr("class", "grid")
  .call(makeYLines().tickSize(-width, 0, 0).tickFormat(""));

const barGroups = chart.selectAll().data(sample).enter().append("g");

barGroups
  .append("rect")
  .attr("class", "bar")
  .attr("x", (g) => xScale(g.country))
  .attr("y", (g) => yScale(g.value))
  .attr("height", (g) => height - yScale(g.value))
  .attr("width", xScale.bandwidth())
  .on("mouseenter", function (actual, i) {
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

barGroups
  .append("text")
  .attr("class", "value")
  .attr("x", (a) => xScale(a.country) + xScale.bandwidth() / 2)
  .attr("y", (a) => yScale(a.value) - 5)
  .attr("text-anchor", "middle")
  .text((a) => `${a.value}%`);

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



