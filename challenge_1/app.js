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
        //O for false, X for true
        boolean: 1,
        cells: document.querySelectorAll("td"),
        currentMapping: [
            [], [], []
        ]
    },
    view: {

    },
    controller: {
        toggle: function(cell) {
            if (app.model.boolean) {
                cell.innerHTML = app.model.current;
                app.model.current = 'O';
                app.model.boolean = 0;
            } else {
                cell.innerHTML = app.model.current;
                app.model.current = 'X';
                app.model.boolean = 1;
            }
        },
        //will grab all cells and reset their innerHTML to ''
        restartBoard: () => {
            app.model.cells.forEach((cell) => {
                cell.innerHTML = '';
            })
            app.model.currentMapping = [[], [], []]
        },
        //takes cell.id and stores them into model.currentMapping
        storeLocation: (cellLocation) => {
            var row = cellLocation[0];
            var column = cellLocation[1];
            var cell = Number(cellLocation);
            app.model.currentMapping[row][column] = app.model.boolean;
            app.controller.checkWinner(app.model.currentMapping);
            console.log(cellLocation);
        },
        //checks for winner
        checkWinner: (board) => {
            // checkRows(board);
            // checkColumns(board);
            // checkDiagonals(board);
        },
        checkRows: (board) => {
            board.reduce((accu, row) => {
                
            })
        },
        checkColumns: (board) => {

        },
        checkDiagonals: (board) => {

        }
    }
}



// console.log(element.length)