// from data.js
var tableData = data;

populateTable();
// Code to display the data into the table
function populateTable() {
    tableData.forEach(item => {
        tablerow = d3.select("tbody").append("tr")
        tablerow.append("td").text(item.datetime)
        tablerow.append("td").text(item.city)
        tablerow.append("td").text(item.state)
        tablerow.append("td").text(item.country)
        tablerow.append("td").text(item.shape)
        tablerow.append("td").text(item.durationMinutes)
        tablerow.append("td").text(item.comments)
    });
}

// Code to filter by the search


var button = d3.select("#filter-btn")
var resetbutton = d3.select("#reset-btn")

button.on("click", () => {
    var datetimeValue = d3.select("#datetime").property("value");
    var cityValue = d3.select("#city").property("value");
    var stateValue = d3.select("#state").property("value");
    var countryValue = d3.select("#country").property("value");
    var shapeValue = d3.select("#shape").property("value");

    var filteredData = JSON.parse(JSON.stringify(tableData));
    filteredData = datetimeValue !== "" ? filteredData.filter(f => f.datetime === datetimeValue) : filteredData;
    filteredData = cityValue !== "" ? filteredData.filter(f => f.city === cityValue) : filteredData;
    filteredData = stateValue !== "" ? filteredData.filter(f => f.state === stateValue) : filteredData;
    filteredData = countryValue !== "" ? filteredData.filter(f => f.country === countryValue) : filteredData;
    filteredData = shapeValue !== "" ? filteredData.filter(f => f.shape === shapeValue) : filteredData;


    d3.select("tbody").html('')
    filteredData.forEach(item => {
        tablerow = d3.select("tbody").append("tr")
        tablerow.append("td").text(item.datetime)
        tablerow.append("td").text(item.city)
        tablerow.append("td").text(item.state)
        tablerow.append("td").text(item.country)
        tablerow.append("td").text(item.shape)
        tablerow.append("td").text(item.durationMinutes)
        tablerow.append("td").text(item.comments)
    })
});

resetbutton.on("click", populateTable);
