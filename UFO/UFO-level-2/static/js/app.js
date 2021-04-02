// from data.js
var tableData = data;

// Select the tbody tag from index.html
var tbody = d3.select("tbody");

// forEach loop that populates table
tableData.forEach((item) =>
{
    // row is created for table
    var row = tbody.append('tr');

    // Date/Time appended to row
    row.append('td').text(item.datetime);
    // City appended to row
    row.append('td').text(item.city);
    // State appended to row
    row.append('td').text(item.state);
    // Country appended to row
    row.append('td').text(item.country);
    // Shape appended to row
    row.append('td').text(item.shape);
    // Duration appended to row
    row.append('td').text(item.durationMinutes);
    // Comments appended to row
    row.append('td').text(item.comments);
}
)

// Filter and Reset Buttons

// Grab reference to filter reference button
var filterButton = d3.select('#filter');

// Grab reference to button input
var resetButton = d3.select('#reset');

// Grab reference to date and city text input 
var dateText = d3.select('#date');
var cityText = d3.select('#city');
var stateText = d3.select('#state');
var countryText = d3.select('#country');
var shapeText = d3.select('#shape');
// Filter Button Function
// For testing purposes, starting with data and city filters
// First test if the date in question shows up in the list, and
// if it does, filter for all sightings on that date
// Next, take filtered list and check for sightings in particular city.
// If sightings found in particular city among filtered data,
// filter again based on particular city

function mainFilter() {

    // Establishes filtered table variable for further use in function
    // Initialized to original data set for starters
    var filteredData = tableData;

    // Date/City Filter Steps

    // Grab input values for data and city filters
    var dateInput = dateText.property("value");
    var cityInput = cityText.property("value");
    var stateInput = stateText.property("value");
    var countryInput = countryText.property("value");
    var shapeInput = shapeText.property("value");

    // Checks if dateInput is blank or not
    if (dateInput === undefined || dateInput === "") {
        filteredData = tableData;
    }

    // If dateInput is not blank, do this:
    else {
        // Check if dateInput is actually in the data set
        // If it is not, should tell us UFO sighting not find

        // If it is in the data set, then do this:
        filteredData = filteredData.filter(item => item.datetime === dateInput);
    }

    // Checks if dateInput is blank or not
    if (cityInput === undefined || cityInput === "") {
        filteredData = filteredData;
    }

    // If dateInput is not blank, do this:
    else {
        // Check if dateInput is actually in the data set
        // If it is not, should tell us UFO sighting not find

        // If it is in the data set, then do this:
        filteredData = filteredData.filter(item => item.city === cityInput);
    }

    if (stateInput === undefined || stateInput === "") {
        filteredData = filteredData;
    }

    // If dateInput is not blank, do this:
    else {
        // Check if dateInput is actually in the data set
        // If it is not, should tell us UFO sighting not find

        // If it is in the data set, then do this:
        filteredData = filteredData.filter(item => item.state === stateInput);
    }

    if (countryInput === undefined || countryInput === "") {
        filteredData = tableData;
    }

    // If dateInput is not blank, do this:
    else {
        // Check if dateInput is actually in the data set
        // If it is not, should tell us UFO sighting not find

        // If it is in the data set, then do this:
        filteredData = filteredData.filter(item => item.country === countryInput);
    }

    if (shapeInput === undefined || shapeInput === "") {
        filteredData = tableData;
    }

    // If dateInput is not blank, do this:
    else {
        // Check if dateInput is actually in the data set
        // If it is not, should tell us UFO sighting not find

        // If it is in the data set, then do this:
        filteredData = filteredData.filter(item => item.shape === shapeInput);
    }

    // Filling the table based on filters
    // Clear all text in tbody
    tbody.text("")

    filteredData.forEach((item) => {
        // Row is created for table
        var row = tbody.append('tr');
        
        // Date/Time appended to row
        row.append('td').text(item.datetime);
        
        // City appended to row
        row.append('td').text(item.city);
        
        // State appended to row
        row.append('td').text(item.state);
        
        // Country appended to row
        row.append('td').text(item.country);
        
        // Shape appended to row
        row.append('td').text(item.shape);
        
        // Duration appended to row
        row.append('td').text(item.durationMinutes);
        
        // Comments appended to row
        row.append('td').text(item.comments);

    }
    ) 

}

// Function that activates reset table button
function handlePress(event) {
    // Establishes input press
    var input = event.target;

    // Clears table
    tbody.text("")

    // forEach loop that loops through data
    tableData.forEach((item) => {

        // Row is created for table
        var row = tbody.append('tr')

        // Date/Time appended to row
        row.append('td').text(item.datetime);
        // City appended to row
        row.append('td').text(item.city);
        // State appended to row
        row.append('td').text(item.state);
        // Country appended to row
        row.append('td').text(item.country);
        // Shape appended to row
        row.append('td').text(item.shape);
        // Duration appended to row
        row.append('td').text(item.durationMinutes);
        // Comments appended to row
        row.append('td').text(item.comments);
    }
    )
}


// random idea I had
//     // Clears table
//     output.text("")
//     // Row is created for table
//     var row = output.append('tr')
//     // Input words into cells that say sighting unavailable
//     row.append('td').text('UFO');
//     row.append('td').text('Sighting');
//     row.append('td').text('Not');
//     row.append('td').text('Found');
//     row.append('td').text('Please')
//     row.append('td').text('Try')
//     row.append('td').text('Again')


// Activate filter table button
filterButton.on("click", mainFilter);

 // Activate reset table button
resetButton.on("click", handlePress);