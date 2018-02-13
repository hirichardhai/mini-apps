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

        document.getElementById('oScore').innerHTML = app.model.oScore;
        document.getElementById('xScore').innerHTML = app.model.xScore;
    },

    model: {
        current: 'X',
        //0 for Ooo and 1 for X
        boolean: 1,
        cells: document.querySelectorAll("td"),
        currentMapping: [
            [], [], []
        ],
        xScore: 0,
        oScore: 0
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

        checkRows: (board) => {
            for (var i = 0; i < board.length; i++) {
                var total = 0;
                for (var j = 0; j < board[i].length; j++) {
                    total += board[i][j];
                }
                if (total == 0 && board[i].length == 3) {
                    app.controller.alertWinner(false)
                } else if (total == 3) {
                    app.controller.alertWinner(true);
                }
            }
        },
        checkColumns: (board) => {
            app.controller.checkColumn(board, 0);
            app.controller.checkColumn(board, 1);
            app.controller.checkColumn(board, 2);
        },
        checkColumn: (board, column) => {
            if ((board[0][column] == 0) && (board[1][column] == 0) && (board[2][column] == 0)) {
                app.controller.alertWinner(false)
            }
            if ((board[0][column] == 1) && (board[1][column] == 1) && (board[2][column] == 1)) {
                app.controller.alertWinner(true)
            }
        },
        checkDiagonals: (board) => {
            if ((board[0][0] == 0) && (board[1][1] == 0) && (board[2][2] == 0)) {
                app.controller.alertWinner(false)
            }
            if ((board[0][2] == 0) && (board[1][1] == 0) && (board[2][0] == 0)) {
                app.controller.alertWinner(false)
            }
            if ((board[0][0] == 1) && (board[1][1] == 1) && (board[2][2] == 1)) {
                app.controller.alertWinner(true)
            }
            if ((board[0][2] == 1) && (board[1][1] == 1) && (board[2][0] == 1)) {
                app.controller.alertWinner(true)
            }
        },
        alertWinner: (winner) => {
            if (winner) {
                for (var i = 0; i < 2; i++) {
                    document.getElementsByClassName('winner')[i].innerHTML = 'CONGRATS X PLAYER, YOU WON!'
                }
            app.model.xScore++;
            document.getElementById('xScore').innerHTML = app.model.xScore;
            
            } else {
                for (var i = 0; i < 2; i++) {
                    document.getElementsByClassName('winner')[i].innerHTML = 'CONGRATS O PLAYER, YOU WON!'
                }
            app.model.oScore++;
            document.getElementById('oScore').innerHTML = app.model.oScore;

            }
        },
        checkWinner: (board) => {
            app.controller.checkRows(board);
            app.controller.checkColumns(board);
            app.controller.checkDiagonals(board);
        }
    }
}



// console.log(element.length)