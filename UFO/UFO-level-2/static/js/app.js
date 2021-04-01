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

// Grab reference to text input 
var text = d3.select('#date');

// Grab reference to output ()
var output = d3.select('tbody');

// Function to handle text input for specific date
function handleChange(event) {
    // grab the value of the iput field
    var input = event.target.value;
    // // Note: Still not sure what to use here, need ideas
    // if (input === null) {
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
    // }
    // else {
    // Clears table
    output.text("")
    // forEach loop that loops through data
    tableData.forEach((item) => {
        // Checks if data is included in the data
        if (input === item.datetime) {
            // Row is created for table
            var row = output.append('tr');
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
    }
    )   
    // }
}
// Grab reference to button input
var button = d3.select('#reset');

// Grab reference to table output
var output = d3.select('tbody');

// Activate text input
text.on("change", handleChange);

// Activate reset table button
button.on("click", handlePress);

// Function that activates reset table button
function handlePress(event) {
    // Establishes input press
    var input = event.target;

    // Clears table
    output.text("")

    // forEach loop that loops through data
    tableData.forEach((item) => {

        // Row is created for table
        var row = output.append('tr')

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

// Grab reference to city filter input
var cityInput = d3.select('#city');
// Grab reference to table output
var output = d3.select('tbody');


// Game plan for multi filter function

// Master function 
