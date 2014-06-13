
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
	var html= "", currentHeader, EvenOdd;

	while (highestHeader > 0){ //checks for zero or negative input

		if (highestHeader > 6)	currentHeader = 6;
		else 	currentHeader = highestHeader;
		
		for (h = 1; h < currentHeader; h++){
			evenOdd = evenOrOdd(h);
			html += "<h" + h + " class = \'" + evenOdd + "\'>" + evenOdd + " </h" + h + ">\n";
		} 

		highestHeader -= 6;	//repeats for-loop if highestHeader > highest possible header in html
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
document.write(oddEvenHeaders(50));


