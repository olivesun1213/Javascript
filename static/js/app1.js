// YOUR CODE HERE!

// $ denotes main jQuery object
//get reference to all input fields
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// event listener to search button when button is clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

//same rendering table as levle one
var tableData = data;

//render table 
function renderTable() {
	// clear the previous table
	$tbody.innerHTML = "";

	// loop through  tabledata
	for (var i = 0; i < tableData.length; i++) {
        //create variable get tableData object and its filed
		var currentSighting = tableData[i];
		var fields = Object.keys(currentSighting);
		// create a new row in tbody and set index=i
		var $row = $tbody.insertRow(i);

		// loop through fields and loads data into table
		for (var j = 0; j < fields.length; j++) {
            // create a new cell and set text to be the current value in currentSighting for every field
            var field = fields[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = currentSighting[field];
		}
	}
}

// Build search table for filtered data
function handleSearchButtonClick() {
	//// Format the user's search by removing leading and trailing whitespace, lowercase the string
	var inputDate = $dateInput.value.trim().toLowerCase();
	var inputState = $stateInput.value.trim().toLowerCase();
	var inputCity = $cityInput.value.trim().toLowerCase();
	var inputCountry = $countryInput.value.trim().toLowerCase();
	var inputShape = $shapeInput.value.trim().toLowerCase();
  
	// Filter on date
	if (inputDate.length != 0) {
		tableData = data.filter(function(currentSighting){
			var matchedDate = currentSighting.datetime;
			return matchedDate === inputValue;
		});
	}
	// no input, do nothing
			else {
				tableData = data;
	}
  
	// Filter on state
	if (inputState.length != 0) {
		tableData = data.filter(function(currentSighting){
			var matchedState = currentSighting.state;
			return matchedState === inputState;
		});
	}
	// no input, do nothing
			else {
				tableData = data;
	}
	// Filter on city
	if (inputCity.length != 0) {
		tableData = data.filter(function(currentSighting){
			var matchedCity = currentSighting.city;
			return matchedCity === inputCity;
		});
	}
	// no input, do nothing
			else {
				tableData = data;
	}
  
	// Filter on country
	if (inputCountry.length != 0) {
		tableData = data.filter(function(currentSighting){
			var matchedCountry = currentSighting.country;
			return matchedCountry === inputCountry;
		});
	}
	// no input, do nothing
			else {
				tableData = data;
	}
	// Filter on shape
	if (inputShape.length != 0) {
		tableData = data.filter(function(currentSighting){
			var matchedShape = currentSighting.shape;
			return matchedShape === inputShape;
		});
	}
	// no input, do nothing
			else {
				tableData = data;
	}
  
	renderTable();
  }
  
  
  // Render the table for the first time on page load
  renderTable();