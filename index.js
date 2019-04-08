const svg = d3.select('svg');

d3.json('planets.json')
  .then(data => {
    const circs = svg.selectAll('circle')
    .data(data);

    circs.attr('r', d => { return d.radius })
    .attr('cy', 200)
    .attr('cx', d => { return d.distance })
    .attr('fill', d => { return d.fill });

    circs.enter()
    .append('circle')
    .attr('r', d => { return d.radius })
    .attr('cy', 200)
    .attr('cx', d => { return d.distance })
    .attr('fill', d => { return d.fill });
  });