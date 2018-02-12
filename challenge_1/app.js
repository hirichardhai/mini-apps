app = {
    init: () => {
        app.model.cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                app.controller.toggle(cell);
                app.controller.storeLocation(cell.id);
        })});
        
        document.getElementById('restart').addEventListener('click', () => {
            app.controller.restartBoard();
        })
    },

    model: {
        current: 'X',
        types: ['X', 'O'],
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
                //when toggling, use X first and toggle
                //model.current to false
                cell.innerHTML = app.model.current;
                app.model.current = 'O';
            } else {
                //enteres if model.types = false, add O
                //toggles model.current back to true
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
            var cell = Number(cellLocation);
            // if (cell == 1) {
            //     app.model.currentMapping[0][0] = 
            // }
            app.controller.checkWinner();
            console.log(cellLocation);
            console.log(typeof cellLocation)
        },
        //checks for winner
        checkWinner: () => {

        }
    }
}



// console.log(element.length)