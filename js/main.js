
/********  PYRAMID **********/

function pyramid(char, lines){
	document.write("<pre>");
	for (h=0; h<lines; h++){

		for (i = 0; i<h; i++){
			document.write(char);
		}
		document.write("\n");
	}
	document.write("</pre>");

}

/********  HEADERS **********/

function oddEvenHeaders(highestHeader){
	var html= "";
	for (h = 1; h < highestHeader; h++){
		html += "<h" + h + ">" + evenOrOdd(h) +"</h" + h+ ">\n";
	}
	return html;
}

function evenOrOdd(val){
	if (val %2 === 1)
		return "ODD";
	else return "EVEN";
}

/**********  START  **************/

pyramid("*", 8);
document.write(oddEvenHeaders(6));


