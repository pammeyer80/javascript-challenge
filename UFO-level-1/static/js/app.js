// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Get d3 elements
var button = d3.select("#filter-btn");
var form = d3.select("#ufo-form");

// Console.log the ufo data from data.js
console.log(tableData);

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//Initialize ufo data table
//function loadUfoData
data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Event handler for form
function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get input value
    var dateInput = d3.select("#datetime").property("value");

    // check value
    console.log(dateInput);

    // filter data based on input value
    var filteredUfoData = data.filter(ufo => (ufo.datetime === dateInput) );

    // check filtered data
    console.log(filteredUfoData);

    // clear html body
    tbody.html("");

    // repopulate table based on filter
    filteredUfoData.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};
