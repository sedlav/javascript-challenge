// Reference to the table body
var tbody = d3.select("tbody");

// Function to populate html table
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Filtering
// Selecting the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Selecting the input element and getting the raw HTML
  var inputElement = d3.select("#datetime");

  // Getting the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(data => data.datetime === inputValue);

  console.log(filteredData);

  // Removing table body content
  var table = d3.select("tbody");

  table.html("");
  
  // Funtion to append table body with filtered data
  filteredData.forEach((ufoFilter) => {
    var row = tbody.append("tr");
    Object.entries(ufoFilter).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })
})