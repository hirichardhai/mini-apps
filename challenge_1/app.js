app = {
    init: () => {
        app.model.cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                app.controller.storeLocation(cell.id);
                app.controller.toggle(cell);
        })});
        
        document.getElementById('restart').addEventListener('click', () => {
            app.controller.restartBoard();
        })
    },

    model: {
        current: 'X',
        cells: document.querySelectorAll("td"),
        currentMapping: [
            [], [], []
        ]
    },
    view: {

    },
    controller: {
        toggle: function(cell) {
            if (app.model.current == 'X') {
                cell.innerHTML = app.model.current;
                app.model.current = 'O';
            } else {
                cell.innerHTML = app.model.current;
                app.model.current = 'X';
            }
        },
        //will grab all cells and reset their innerHTML to ''
        restartBoard: () => {
            app.model.cells.forEach((cell) => {
                cell.innerHTML = '';
            })
        },
        //takes cell.id and stores them into model.currentMapping
        storeLocation: (cellLocation) => {
            var row = cellLocation[0];
            var column = cellLocation[1];
            var cell = Number(cellLocation);
            app.model.currentMapping[row][column] = app.model.current;
            app.controller.checkWinner(app.model.currentMapping);
            console.log(cellLocation);
        },
        //checks for winner
        checkWinner: (board) => {
            checkRows(board);
            checkColumns(board);
            checkDiagonals(board);
        },
        checkRows: (board) => {
            // if (app.model.currentMapping)

        },
        checkColumns: (board) => {

        },
        checkDiagonals: (board) => {

        }
    }
}



// console.log(element.length)