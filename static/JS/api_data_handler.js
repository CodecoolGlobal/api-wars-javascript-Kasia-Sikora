export const data_handler = {

    pageUp: () => {
        console.log('wchodzi');
        // page = planets_datas.next;
        // startScript = 0;
        // while (table.hasChildNodes()) {
        //     table.removeChild(table.firstChild)
        // };
        // load()
},

    pageDown: () => {
            console.log("wchodzi prev");
            // page = planets_datas.previous;
            // startScript = 0;
            // while (table.hasChildNodes()) {
            //     table.removeChild(table.firstChild)
            // };
            // load()
}
};

import { fetchData } from "./api_connection.js";






// function variable(){
//     const page_details = fetchData()
// }
//
// const planets_datas = fetchData(page, variable());


//
//
//
//
// let page = 'https://swapi.co/api/planets';
// console.log(page + " głowna strona");
//
// const delay = 3000;
//
//
//
//
//             const data_results = planets_datas.results;
//             const table = document.getElementById('main_table');
//             const table_headers = ["Name", "Diameter", "Climate", "Terrain", "Surface Water Percentage", "Population", "Residents", ""];
//             const row = document.createElement('tr');
//             table.appendChild(row);
//
//
//             for (let i = 0; i < table_headers.length; i++) {
//                 const header = document.createElement('th');
//                 header.innerText = table_headers[i];
//                 row.appendChild(header)
//             }
//
//
//             for (let data of data_results) {
//                 const row = document.createElement('tr');
//                 table.appendChild(row);
//
//                 const table_headers = [data.name, data.diameter, data.climate, data.terrain, data.surface_water, data.population, data.residents, ""];
//                 for (let i = 0; i < table_headers.length; i++) {
//                     const col = document.createElement('td');
//                     row.appendChild(col);
//                     if (table_headers[i] === data.residents) {
//                         if (data.residents.length === 0) {
//                             col.innerText = "No known residents"
//                         } else {
//                             const button = document.createElement('button');
//                             button.dataset.type = "button";
//                             button.innerText = table_headers[i].length + ' resident(s)';
//                             col.appendChild(button);
//                         }
//                     } else {
//                         col.innerText = table_headers[i]
//                     }
//                     if (table_headers[i] === "") {
//                         const button = document.createElement('button');
//                         button.dataset.type = "button";
//                         button.innerText = "Vote";
//                         col.appendChild(button);
//                     }
//                     if (table_headers[i] === data.population) {
//                         col.innerText = table_headers[i] + " people"
//                     }
//                     if (table_headers[i] === data.diameter) {
//                         col.innerText = table_headers[i] + " km"
//                     }
//                     if (table_headers[i] === data.surface_water) {
//                         col.innerText = table_headers[i] + "%"
//                     }
//                 }
//             }
//
//             console.log(planets_datas.results)
//         });
//
// }
