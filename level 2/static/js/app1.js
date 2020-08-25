// from data.js
var tableData = data;

// get  filter button
var filterBtn=d3.select("#filter-btn");

//search by date, city,state,country or shape
filterBtn.on("click",function(){
	var inputDate=document.getElementById("datetime").value;
	var inputCity=document.getElementById("city").value;
	var inputState=document.getElementById("state").value;
	var inputCountry=document.getElementById("country").value;
	var inputShape=document.getElementById("shape").value;

	//match inputs
	var matchedInfo=tableData.filter(info => (info.datetime==inputDate|| inputDate=="") && (info.city==inputCity || inputCity=="")
	&& (info.state==inputState || inputState=="")&& (info.country==inputCountry || inputCountry=="")&& (info.shape==inputShape || inputShape==""));

	//render table
	var tbody=d3.select("tbody");
	//clear previous table ino
	tbody.html("");
	matchedInfo.forEach(element=>{
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