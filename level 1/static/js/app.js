
// from data.js
var tableData = data;

// get input date and filter button
var dateTime=d3.select("#datetime");
var filterBtn=d3.select("#filter-btn")

//search by date
dateTime.on("change",function(){
	var inputDate=d3.event.target.value;
	//match date
	var matchedDate=tableData.filter(info => info.datetime==inputDate);

	//render table
	var tbody=d3.select("tbody");
	//clear previous table ino
	tbody.html("");
	matchedDate.forEach(element=>{
		//add to table
		var row=tbody.append("tr");
		row.append("td").text(element.datetime);
		row.append("td").text(element.city);
		row.append("td").text(element.country);
		row.append("td").text(element.state);
		row.append("td").text(element.shape);
		row.append("td").text(element.durationMinutes);
		row.append("td").text(element.comments);

	})
})