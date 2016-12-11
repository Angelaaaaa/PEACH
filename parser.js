var outputfile = ""

function parser(){
	var inputdata = document.getElementById("fileinput").value;
	var result = '5';
	document.getElementById("fileoutput").innerHTML = generatemarkupfile();
}



// function pa(var inputdata){
// 	inputdata = "";
// 	var outputdata = "";
// }

function arraygenerator()
{
	var a = ["id","name","homeaddress","whatever"]["text","text","text","integer"];
	return a;
}

function generatemarkupfile(inputdata){
	// head = inputdata;
	var head = generatetap("html,");
	outputfile = head + generatehead()+generatebody(arraygenerator())+ closetab(head);	
	

}

function  generatehead () {
	var head = generatetag("head","");
	return head + closetab(head);
}

function generatebody (a) {
	var formtag = generatetag("form","");
	return formtag + generatelist + closetab(formtag);

}



function generatelist (argument) {
	var ul = generatetag("ul","")
	var listtag = generatetag("li","");
}



function generatetag(inputdata,value)
{
	if (classname=="")
		{var head = "<"+inputdata">";}
	else
	{
		var head = "< + "inputdata+ "value=" + value + ">";
	}
	return head;
	
}

function closetab(string)
{
	var secondpart = string.split("<")[1];
	var firstpart = "</";
	var result = firstpart + secondpart;
	return result;
}

function paragraphitem(item)
{
	var firstpart = "<p>";
	var data = item;
	var secondpart = closetab("<p>");
	return firstpart+ data + secondpart;
}




