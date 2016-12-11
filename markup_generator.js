var outputfile = ""
var a;
var b;
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
	a = ["id","name","homeaddress","whatever"];
	b =["text","text","text","integer"];
	return a;
}

function generatemarkupfile(inputdata){
	// head = inputdata;
	var head = generatetag("html","");
	outputfile = head + generatehead()+generatebody()+ closetab(head);	
	return outputfile;
}

function  generatehead () {
	var head = generatetag("head","");
	return head + closetab(head);
}

function generatebody () {
	var formtag = generatetag("form","");
	return formtag + generatelist() + closetab(formtag);

}



function generatelist () {
	a  = arraygenerator();
	var ul = generatetag("ul","");
	var result = ul;
	var length = a.length;
	
	listtag = generatetag("li","");
	for (var i = 0; i < length; i++) {
    result = result + listtag + generatetag("input",a[i]) + closetab(listtag);    
    // console.log(generatetag"textarea");
}
	result = result + generatebutton() +closetab(ul);
	return result;
}

function generatebutton()
{
	return "<button type = \"submit\" >confirm</button> ";
}

function generatetag(inputdata,value)
{
	if (value == "")
		{
			var head = "<"+inputdata+">\n ";
		}
	else
		{
		var head = "<" + inputdata + " value= \"" + value + "\" > \n ";
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




