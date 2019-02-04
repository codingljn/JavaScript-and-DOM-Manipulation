// from data.js
var tableData = data;

// YOUR CODE HERE!

// Reference the div in the html where we will place our data - "tbody"
var tableBody = d3.select("tbody");

// Create a function to populate the data
function showData(data) {
    // Clear the table
    tableBody.html("");

    // Loop through each object in the data and append a row and cells for each value in the row
    data.forEach(function (sighting) {
        // Append to body of the table
        var row = tableBody.append("tr");
        row.append("td").text(sighting.datetime);
        row.append("td").text(sighting.city);
        row.append("td").text(sighting.state);
        row.append("td").text(sighting.country);
        row.append("td").text(sighting.shape);
        row.append("td").text(sighting.durationMinutes);
        row.append("td").text(sighting.comments);

    });
};

// This part was done with help from tutor

function filterTable() {

    // Prevent page refresh when filter table button is pressed
    d3.event.preventDefault();

    // Get the date entered in the datetime class in the html
    var inputDate = d3.select("#datetime").property("value");
    var tableFilter = tableData;

    // If a date (or any value for that matter) is entered...
    // Future work - data validation to ensure only valid dates are entered.
    if (inputDate.length > 0) {
        tableFilter = tableFilter.filter(
            function (row) {
                return row.datetime === inputDate
            }
        );
    }

    // Show the new filtered data in the html
    showData(tableFilter);
}


// Event listener for the Filter Table button
d3.selectAll("#filter-btn").on("click", filterTable);

// Show the original table (all data) when the page loads
showData(tableData);
