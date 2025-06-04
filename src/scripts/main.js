'use strict';

const thead = document.querySelector('thead tr');
const tfoot = document.querySelector('tfoot tr');
const table = document.querySelector('table');
const rows = table.querySelectorAll('tbody tr');

const newTh = document.createElement('th');

newTh.textContent = 'Position';
thead.insertBefore(newTh.cloneNode(true), thead.lastElementChild);
tfoot.insertBefore(newTh.cloneNode(true), tfoot.lastElementChild);

rows.forEach((row) => {
  const cells = row.querySelectorAll('td');
  const secondCell = cells[1];
  const newCell = document.createElement('td');

  newCell.textContent = secondCell.textContent;

  row.insertBefore(newCell, row.lastElementChild);
});
