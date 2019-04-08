const canvas = d3.select('.canvas');

const data = [
  { width: 200, height: 100, fill: 'pink' },
  { width: 100, height: 60, fill: 'purple' },
  { width: 50, height: 30, fill: 'red' }

]

const svg = canvas.select('svg');

// Adicionando os dados  aos retângulos
const rects = svg.selectAll('rect')
  .data(data);

// Definindo atributos para o rect já existente no html
rects.attr('width', (d, i, n) => { return d.width })
  .attr('height', d => { return d.height })
  .attr('fill', d => { return d.fill });

// Adicionando novos rects e definindo seus atributos de acordo com os dados
rects.enter()
  .append('rect')
  .attr('width', (d, i, n) => { return d.width })
  .attr('height', d => { return d.height })
  .attr('fill', d => { return d.fill });