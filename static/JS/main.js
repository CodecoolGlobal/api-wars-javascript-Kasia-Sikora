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


function createRowsAndColumns(datas) {
    let data_array = datas.results;
    console.log(data_array);
    const table = document.getElementById('main_table');

    data_array.forEach((data) => {
        data_handler.createColumn(data, table);
    });
}


function main_function(data) {
    console.log(data);
    data_handler.next = data.next;
    data_handler.prev = data.previous;
    data_handler.callbackfn = main_function;
    createNextButton();
    createPrevButton();
    createTableWithHeaders();
    createRowsAndColumns(data);
}
