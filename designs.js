// Select color input
const color = document.querySelector('#colorPicker');
// Select size input

const form = document.querySelector('#sizePicker')

const table = document.getElementById('pixelCanvas');
const nmbrOfRows = document.querySelector('#inputHeight');
const nmbrOfColmns = document.querySelector('#inputWidth');


// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
    
    e.preventDefault();
    
    table.innerHTML = '';
    
    for(let x = 0; x < nmbrOfRows.value; x++) {
        const rows = document.createElement('tr');
        table.appendChild(rows);
        for(let y = 0; y < nmbrOfColmns.value; y++) {
            const columns = document.createElement('td')
            rows.appendChild(columns);
        };
    };

};

table.addEventListener('click', function(e) {
    if (e.target.nodeName === 'TD') {
        e.target.style.backgroundColor = color.value;
    };
});

form.addEventListener('submit', makeGrid);



