import { fetchData } from "./api_connection.js";

export const data_handler = {

    table: document.getElementById('main_table'),
    prev: '',
    next: '',
    callbackfn: () => {},

    pageUp: () => {
        console.log('wchodzi');
        data_handler.table.innerHTML = '';
        fetchData(data_handler.next, data_handler.callbackfn);
},

    pageDown: () => {
        console.log("wchodzi prev");
        data_handler.table.innerHTML = '';
        fetchData(data_handler.prev, data_handler.callbackfn);
},
    createColumn(data, table) {

        const row = document.createElement('tr');
        table.appendChild(row);

        const table_headers = [data.name, data.diameter, data.climate, data.terrain,
                                data.surface_water, data.population, data.residents, ""];

        for (let i = 0; i < table_headers.length; i++) {
            let col = document.createElement('td');
            row.appendChild(col);

            if (table_headers[i] === data.residents) {
                if (data.residents.length === 0) {
                    col.innerText = "No known residents"
                } else {
                    createResidentsButton(col, table_headers, i);
                }
            } else {
                col.innerText = table_headers[i]
            }
            if (table_headers[i] === "") {
                createVoteButton(col);
            }
            if (table_headers[i] === data.population) {
                col.innerText = table_headers[i] + " people"
            }
            if (table_headers[i] === data.diameter) {
                col.innerText = table_headers[i] + " km"
            }
            if (table_headers[i] === data.surface_water) {
                col.innerText = table_headers[i] + "%"
            }
        }

    },
};

function createResidentsButton (col, table_headers, i){
    const button = document.createElement('button');
    button.dataset.type = "button";
    button.dataset.target = '#exampleModalCenter';
    button.dataset.toggle = 'modal';
    button.setAttribute("class", 'button');
    button.innerText = table_headers[i].length + ' resident(s)';
    col.appendChild(button);
}

function createVoteButton(col){
    const button = document.createElement('button');
    button.setAttribute("class", 'button');
    button.dataset.type = "button";
    button.innerText = "Vote";
    col.appendChild(button);
}
