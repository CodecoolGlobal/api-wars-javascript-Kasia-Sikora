import { data_handler } from "./api_data_handler.js";
import { fetchData } from "./api_connection.js";

const page = 'https://swapi.co/api/planets';

fetchData(page, main_function);

function createNextButton() {
    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', data_handler.pageUp);
}


function createPrevButton() {
    const previousButton = document.getElementById('previousButton');
    previousButton.addEventListener('click', data_handler.pageDown);
}


function createTableWithHeaders() {
    const table = document.getElementById('main_table');
    const row = document.createElement('tr');

    const table_headers = ["Name", "Diameter", "Climate", "Terrain", "Surface Water Percentage", "Population", "Residents", ""];
    for (let i = 0; i < table_headers.length; i++) {
        const header = document.createElement('th');
        header.innerText = table_headers[i];
        row.appendChild(header)
    }
    table.appendChild(row);
}


function createRows(datas) {
    let data_array = datas.results;
    console.log(data_array);
    const table = document.getElementById('main_table');

    data_array.forEach((data) => {
        const row = document.createElement('tr');
        table.appendChild(row);

        const table_headers = [data.name, data.diameter, data.climate, data.terrain, data.surface_water, data.population, data.residents, ""];
        for (let i = 0; i < table_headers.length; i++) {
            let col = document.createElement('td');
            row.appendChild(col);

            if (table_headers[i] === data.residents) {
                if (data.residents.length === 0) {
                    col.innerText = "No known residents"
                } else {
                    const button = document.createElement('button');
                    button.dataset.type = "button";
                    button.setAttribute("class", 'button');
                    button.innerText = table_headers[i].length + ' resident(s)';
                    col.appendChild(button);
                }
            } else {
                col.innerText = table_headers[i]
            }
            if (table_headers[i] === "") {
                const button = document.createElement('button');
                button.setAttribute("class", 'button');
                button.dataset.type = "button";
                button.innerText = "Vote";
                col.appendChild(button);
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
    });
}


function main_function(data) {
    console.log(data);
    createNextButton();
    createPrevButton();
    createTableWithHeaders();
    createRows(data);
}
