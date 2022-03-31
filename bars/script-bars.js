const chartData = [50, 25, 66, 73, 100, 10];
const width = 300,
    height = 300,
    barMargin = 5;
const barWidth = (width - barMargin) / chartData.length;


d3.select('#svg-title').text("Stolpdiagram")

const scaleY = d3.scaleLinear()
    .domain([0, d3.max(chartData)])
    .range([0, height - 20])

const chart = d3.select('#bars')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .style('background', 'silver')

chart.selectAll('rect')
    .data(chartData).enter()
    .append('rect')
    .attr('x', (d, i) => i * barWidth + barMargin) // D3 används "=>" istället för "function" | Man gör så för klammarar behövs ej, kortare kod
    .attr('y', (d) => height - scaleY(d))
    .attr('width', barWidth - barMargin)
    .attr('height', (d) => scaleY(d))
    .style('fill', ' orangeRed')