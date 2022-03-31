d3.select('#svg-title').text("Paint!")

const paint = d3.select('#paint-area')
    .append('svg')
    .attr('height', 400)
    .attr('width', 400)
    .style('background', 'white')
    .on('mousemove mousedown', (event) => {
        if (event.buttons == 1) {
            dot(d3.pointer(event));
        }

    });

const dot = (xy) => {
    paint.append('circle')
        .attr('cx', xy[0])
        .attr('cy', xy[1])
        .attr('r', 5)
        .style('fill', document.querySelector('#color').value)
}