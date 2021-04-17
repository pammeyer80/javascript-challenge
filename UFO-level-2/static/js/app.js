// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Get d3 elements
var button = d3.select("#filter-btn");
var form = d3.select("#ufo-form");
var clrButton = d3.select("#clearfilter-btn");

// Console.log the ufo data from data.js
console.log(tableData);

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);
clrButton.on("click", clearFilters);

//Clear Filters
function clearFilters() {
    
    console.log("clear filters");
    d3.select("#datetime").property("value", "");
    d3.select("#city").property("value", "");
    d3.select("#state").property("value", "");
    d3.select("#country").property("value", "");
    d3.select("#shape").property("value", "");

    tbody.html("");
    loadUfoData();

};


//Initialize ufo data table
function loadUfoData() {
    data.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};


// Event handler for form
function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get input value
    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select("#city").property("value");
    var stateInput = d3.select("#state").property("value");
    var countryInput = d3.select("#country").property("value");
    var shapeInput = d3.select("#shape").property("value");

    // clear html body
    tbody.html("");

    if (dateInput === "" & cityInput === "" & stateInput === "" & countryInput === "" & shapeInput === ""){
        console.log("All filters are empty. Reload data.");
        loadUfoData();
    }
    else {
        var filteredUfoData = data;

        if (dateInput != ""){
            console.log("date filter is not blank");
            filteredUfoData = filteredUfoData.filter(ufo => (ufo.datetime === dateInput) );
        };
        if (cityInput != ""){
            console.log("city filter is not blank");
            filteredUfoData = filteredUfoData.filter(ufo => (ufo.city === cityInput) );
        };
        if (stateInput != ""){
            console.log("state filter is not blank");
            filteredUfoData = filteredUfoData.filter(ufo => (ufo.state === stateInput) );
        };
        if (countryInput != ""){
            console.log("country filter is not blank");
            filteredUfoData = filteredUfoData.filter(ufo => (ufo.country === countryInput) );
        };
        if (shapeInput != ""){
            console.log("shape filter is not blank");
            filteredUfoData = filteredUfoData.filter(ufo => (ufo.shape === shapeInput) );

        };


        // check filtered data
        console.log(filteredUfoData);

        // repopulate table based on filter
        filteredUfoData.forEach((data) => {
            var row = tbody.append("tr");
            Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });

    };

};


//Initialize table
loadUfoData();