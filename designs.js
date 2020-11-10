
// When size is submitted by the user, call makeGrid()
document.querySelector('#sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    var gridHeight = document.querySelector('#inputHeight').value; // height input
    var gridWidth = document.querySelector('#inputWidth').value;  // width input
    makeGrid(gridHeight, gridWidth);
});


function makeGrid(l, h) {
    const table = document.querySelector('#pixelCanvas');
    table.innerHTML = "";  // sets the html content of the table
    for (let r = 0; r < l; r++) {
        var newRow = table.insertRow(r);
        for (let c = 0; c < h; c++) {
            var newCell = newRow.insertCell(c);  // attach cells to the rows

            // listens for a click event on the cells:
            newCell.addEventListener('click', function (event) {

                // applies selected color input to the cells:
                var color = document.querySelector('#colorPicker').value;
                event.target.style.backgroundColor = color;  // changes cell color
            });
        }
    }
}


//  Credits: function makeGrid() partially inspired by @susanschen on GitHub
