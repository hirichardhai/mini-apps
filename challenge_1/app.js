app = {
    init: () => {
        app.controller.toggle()
    },

    model: {
        types: ['X', 'O']
    },

    view: {

    },

    controller: {
        toggle: function(cell) {
            if (cell.innerHTML)
            cell.innerHTML = 'x';
        }
    
    }
}

var element = document.querySelectorAll("td")

element.forEach((cell) => {
    cell.addEventListener('click', () => {
        console.log(cell.id)
        app.controller.toggle(cell)
})})


// console.log(element.length)