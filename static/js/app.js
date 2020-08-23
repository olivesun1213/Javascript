
//create variables to find references to tbody, input field and serach button.
var $tbody = document.querySelector("tbody");
// from index.html id=datetime, id = "filter-btn"
var $dateInput=document.querySelector("#datetime");
var $searchButton=document.queryCommandValue("#filter-btn");

// add event listener to search button when button is clicked
$searchButton.addEventListener("click", handleSearchButtonClick);

// from data.js
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

function handleSearchButtonClick() {
	// trim the date to remove begining and ending spaces
	var inputDate = $dateInput.value.trim();

	// user input must match date/type of data in table data

	// when user input data
	if (inputDate.length != 0) {
		tableData = data.filter(function(currentSighting){
			var matchedDate = sighting.date;
			return matchedDate === inputDate;
		});
	}
	// no input, do nothing
	else {
		tableData = data;
	}
    renderTable();
}

// render
renderTable();