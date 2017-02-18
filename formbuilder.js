var outputfile = ""
var csslink = "<link rel=\"stylesheet\" type=\"text/css\" href=\"stylesheet.css\">";
var content;//store the part dynamically generated from templates



function uploadXML(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parser(this);
        }
    };
    request.open("GET", "sample_template.xml", true);
    request.send();
}

function markup(markupfile,arch,element){
   this.markupfile = markupfile;//string text
   this.arch = arch;//array
}

function arch(name,element){
	this.name = name;//string
	this.element = element;//array
}

markup.prototype.getarch = function(){
	return this.arch;
}

markup.prototype.getelement = function(){
	return this.element;
}

markup.prototype.getmarkupfile = function(){
	return this.markupfile;
}


function parser(xml) {
    var doc, arch, i, j, elements, name_arch, name_elem, type;
    doc = xml.responseXML;
    var arch_string = "";
    var name_string = "";
    content = "";
    arch = doc.getElementsByTagName("archetype"); //get archetypes
    for (i = 0; i < arch.length; i++) { //number of archetypes in the teamplate
        //name of an archetype
        name_arch = arch[i].getElementsByTagName("name")[0].textContent;
        // console.log(name_arch)
        //collection of elements contained in one archetype
        elements = arch[i].getElementsByTagName("element");
        content = content + generatearchtypetag(name_arch);
        for (j = 0; j < elements.length; j++) { //for every element
	    //name and type of each element within an archetype
          name_elem = elements[j].getElementsByTagName("name")[0].textContent;
          type = elements[j].getElementsByTagName("type")[0].textContent;     
          content = content + generatefieldtag(name_elem);
            }
        }
                generate();
        }  

//generate archetypes in paragraph tag
function generatearchtypetag(a){
	return generateparagraphtag(a);
}

//generate fields in input tag
function generatefieldtag(f)
{
	listtag = generatetag("li","","field5","");
	return listtag + generatetag("input",f,"","required") + closetab(listtag);    
}

//generate a list containing archtypes and fields
function generatelist () {
	var ul = generatetag("ul","","","");
	result = ul + content + generatebutton() +closetab(ul);
	return result;
}



//connect to the index.html
function generate(){
	var inputdata = document.getElementById("fileinput").value;
	// var result = '5';
	document.getElementById("fileoutput").innerHTML = generatemarkupfile();
}

//generate the html file
function generatemarkupfile(inputdata){
	// head = inputdata;
	console.log(1);
	var head = generatetag("html","","","");
	outputfile = head+ generatehead()+generatebody()+ closetab(head);	
	return outputfile;
}

//generate <head>
function generatehead () {
	var head = generatetag("head","","","");
	return head + csslink + closetab(head);
}

//generate <body>
function generatebody () {
	var csstag = generatetag("div","" ,"form-style-9", "");
	var formtag = generatetag("form","","","");
	return csstag + formtag + generatelist() + closetab(formtag)+closetab(csstag);

}

//generate <button> 
function generatebutton()
{
	button1 = generatetag("button","submit",""," type = \"submit\" onclick=\"myFunction()\" ")
	value = "submit";
	button2 = closetab(button1);
	return button1+value+button2;
}


//generate general tags
function generatetag(inputdata,value,classname,extra)
{	var head = "<" + inputdata;
	if (value != "")
		{
			head = head + " value = \""+ value + "\"";
		}
	if (classname!="")
		{
			head = head + " class = \""+ classname + "\"";
		}
	if(extra!="")
	{
		head = head + " " + extra;
	}
	head = head + ">\n";
	return head;
	
}


//close tags for every tag
function closetab(string)
{
	var secondpart = string.split("<")[1];
	var secondpart = secondpart.split(" ")[0];
	var secondpart = secondpart.split(">")[0];
	var firstpart = "</";
	var thridpart = ">\n";
	// console.log(secondpart);
	var result = firstpart + secondpart+thridpart;
	return result;
}


//generate paragraphtag
function generateparagraphtag(item)
{
	var firstpart = "<p>";
	var data = item;
	var secondpart = closetab("<p><br>");
	return firstpart+ data + secondpart;
}

