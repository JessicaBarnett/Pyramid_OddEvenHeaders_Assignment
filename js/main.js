

function pyramid(char, lines){
	document.write("<pre>");
	for (h=0; h<lines; h++){

		for (i = 0; i<h; i++){
			document.write(char);
			console.log(char);
		}
		document.write("\n");//so, html ignores whitespace characters and uses them as spaces...
	}
	document.write("</pre>");

}


/**********  START  **************/
pyramid("*", 8);


