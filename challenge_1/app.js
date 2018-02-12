app = {
    init: () => {
        app.model.cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                console.log(cell.id)
                app.controller.toggle(cell)
        })});
        
        document.getElementById('restart').addEventListener('click', () => {
            app.controller.restartBoard();
        })
    },

    model: {
        current: true,
        types: ['X', 'O'],
        cells: document.querySelectorAll("td")
    },

    view: {

    },

    controller: {
        toggle: function(cell) {
            if (app.model.current) {
                //when toggling, use X first and toggle
                //model.current to false
                cell.innerHTML = app.model.types[0];
                app.model.current = false;
            } else {
                //enteres if model.types = false, add O
                //toggles model.current back to true
                cell.innerHTML = 'O';
                app.model.current = true;
            }
        },
        //will grab all cells and reset their innerHTML to ''
        restartBoard: () => {
            app.model.cells.forEach((cell) => {
                cell.innerHTML = '';
            })
        }
    }
}



// console.log(element.length)