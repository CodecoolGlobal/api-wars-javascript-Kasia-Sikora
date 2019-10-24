fetch('https://swapi.co/api/planets')  // set the path; the method is GET by default, but can be modified with a second parameter
.then((response) => response.json())  // parse JSON format into JS object
.then((data) => {

    const data_results = data.results;
    const table = document.getElementById('main_table');
    const table_headers = ["Name", "Diameter", "Climate", "Terrain", "Surface Water Percentage", "Population", "Residents", ""];
    const row = document.createElement('tr');
    table.appendChild(row);


    for (let i=0; i<table_headers.length; i++) {
        const header = document.createElement('th');
        header.innerText = table_headers[i];
        row.appendChild(header)
    }


    for (let data of data_results){
        const row = document.createElement('tr');
        table.appendChild(row);

        const table_headers = [data.name, data.diameter, data.climate, data.terrain, data.surface_water, data.population, data.residents];
        for (let i = 0; i < table_headers.length; i++) {
            const col = document.createElement('td');
            row.appendChild(col);
            if (table_headers[i] === data.residents) {
                if (data.residents.length === 0) {
                    col.innerText = "No known residents"
                } else {
                    col.innerText = table_headers[i];
                }
            } else {
                col.innerText = table_headers[i]
            }
        }
    }

        console.log(data.results)
});


