// Data from data.js
var tableData = data;

// Select the tbody tag from index.html
var tbody = d3.select("tbody");

// forEach loop that populates table
tableData.forEach((item) =>
{
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
    var dateInput = dateText.property("value").toLowerCase();
    var cityInput = cityText.property("value").toLowerCase();
    var stateInput = stateText.property("value").toLowerCase();
    var countryInput = countryText.property("value").toLowerCase();
    var shapeInput = shapeText.property("value").toLowerCase();

    // Checks if dateInput is blank or not
    if (dateInput === undefined || dateInput === "") {
        filteredData = filteredData;
    }

    // If dateInput is not blank, do this:
    else {
        // If it is in the data set, then do this:
        filteredData = filteredData.filter(item => item.datetime === dateInput);

        // Check if dateInput is actually in the data set
        // If it is not, should tell us UFO sighting not find
        if (filteredData.length === 0) {
            tbody.text("")

            // Row is created for table
            var row = tbody.append('tr')
            // Input words into cells that say sighting unavailable
            row.append('td').text('UFO');
            row.append('td').text('Sighting');
            row.append('td').text('Not');
            row.append('td').text('Found');
            row.append('td').text('Please')
            row.append('td').text('Try')
            row.append('td').text('Again')
            
            // Exits function
            return
        }

    }

    // Checks if cityInput is blank or not
    if (cityInput === undefined || cityInput === "") {
        filteredData = filteredData;
    }

    // If cityInput is not blank, do this:
    else {
        // If it is in the data set, then do this:
        filteredData = filteredData.filter(item => item.city === cityInput);

        // Check if cityInput is actually in the data set
        // If it is not, should tell us UFO sighting not find
        if (filteredData.length === 0) {
            tbody.text("")

            // Row is created for table
            var row = tbody.append('tr')
            // Input words into cells that say sighting unavailable
            row.append('td').text('UFO');
            row.append('td').text('Sighting');
            row.append('td').text('Not');
            row.append('td').text('Found');
            row.append('td').text('Please')
            row.append('td').text('Try')
            row.append('td').text('Again')
            
            // Exits function
            return
        }
    }

    // Checks if stateInput is blank or not
    if (stateInput === undefined || stateInput === "") {
        filteredData = filteredData;
    }

    // If stateInput is not blank, do this:
    else {
        // If it is in the data set, then do this:
        filteredData = filteredData.filter(item => item.state === stateInput);

        // Check if stateInput is actually in the data set
        // If it is not, should tell us UFO sighting not find
        if (filteredData.length === 0) {
            tbody.text("")

            // Row is created for table
            var row = tbody.append('tr')
            // Input words into cells that say sighting unavailable
            row.append('td').text('UFO');
            row.append('td').text('Sighting');
            row.append('td').text('Not');
            row.append('td').text('Found');
            row.append('td').text('Please')
            row.append('td').text('Try')
            row.append('td').text('Again')

            // Exits function
            return
        }
    }

    // Checks if countryInput is blank or not
    if (countryInput === undefined || countryInput === "") {
        filteredData = filteredData;
    }

    // If countryInput is not blank, do this:
    else {
        // If it is in the data set, then do this:
        filteredData = filteredData.filter(item => item.country === countryInput);

        // Check if countryInput is actually in the data set
        // If it is not, should tell us UFO sighting not find
        if (filteredData.length === 0) {
            tbody.text("")

            // Row is created for table
            var row = tbody.append('tr')
            // Input words into cells that say sighting unavailable
            row.append('td').text('UFO');
            row.append('td').text('Sighting');
            row.append('td').text('Not');
            row.append('td').text('Found');
            row.append('td').text('Please')
            row.append('td').text('Try')
            row.append('td').text('Again')
            
            // Exits function
            return
        }
    }
    // Checks if shapeInput is blank or not
    if (shapeInput === undefined || shapeInput === "") {
        filteredData = filteredData;
    }

    // If shapeInput is not blank, do this:
    else {
        // If it is in the data set, then do this:
        filteredData = filteredData.filter(item => item.shape === shapeInput);

        // Check if shapeInput is actually in the data set
        // If it is not, should tell us UFO sighting not find
        if (filteredData.length === 0) {
            tbody.text("")

            // Row is created for table
            var row = tbody.append('tr')
            // Input words into cells that say sighting unavailable
            row.append('td').text('UFO');
            row.append('td').text('Sighting');
            row.append('td').text('Not');
            row.append('td').text('Found');
            row.append('td').text('Please')
            row.append('td').text('Try')
            row.append('td').text('Again')

            // Exits function
            return
        }
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


// Activate filter table button
filterButton.on("click", mainFilter);

 // Activate reset table button
resetButton.on("click", handlePress);