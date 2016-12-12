
<<<<<<< Updated upstream
function uploadXML() {

=======

function uploadXML() {
>>>>>>> Stashed changes

    var request = new XMLHttpRequest();


    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parser(this);
            
        }
    };

    request.open("GET", "sample_template.xml", true);
    request.send();
}

function parser(xml) {
    var doc, arch, i, j, elements, name_arch, name_elem, type;
    doc = xml.responseXML;
<<<<<<< Updated upstream

    arch = doc.getElementsByTagName("archetype"); //get archetypes


=======
    var arch_string = "";
    var name_string = "";
    arch = doc.getElementsByTagName("archetype"); //get archetypes
   
>>>>>>> Stashed changes
    for (i = 0; i < arch.length; i++) { //number of archetypes in the teamplate

        //name of an archetype
        name_arch = arch[i].getElementsByTagName("name")[0].textContent;
<<<<<<< Updated upstream
        console.log(name_arch);

=======
        // console.log(name_arch);
        arch_string = arch_string +" "+ name_arch;
>>>>>>> Stashed changes

        //collection of elements contained in one archetype
        elements = arch[i].getElementsByTagName("element");

<<<<<<< Updated upstream
        

=======
>>>>>>> Stashed changes
        for (j = 0; j < elements.length; j++) { //for every element

          //name and type of each element within an archetype
          name_elem = elements[j].getElementsByTagName("name")[0].textContent;
          type = elements[j].getElementsByTagName("type")[0].textContent;
<<<<<<< Updated upstream


          console.log('***');
          console.log(name_elem);
          console.log(type);
          console.log('***');
        }
=======
          name_string = name_string+" "+ name_elem;
            }
          // console.log('---');
          // console.log(name_elem);
      
        }
    // console.log(arch_string);
    a = name_string.split(" ");
    b = arch_string.split(" ");
    a_length = a.length;
    console.log(a);
    console.log(b);
    generate();
}



function generatelist () {
	// a  = arraygenerator();
	var ul = generatetag("ul","","","");
	var result = ul;
  // console.log("textarea");
	
	listtag = generatetag("li","","field5","");
	for (var i = 0; i < a_length; i++) {
    console.log("i m in generate");
    result = result + listtag + generatetag("input",a[i],"","required") + closetab(listtag);    
    // console.log("textarea");
	
}
	result = result + generatebutton() +closetab(ul);
	return result;
}
>>>>>>> Stashed changes


      console.log('---');
    }
<<<<<<< Updated upstream
=======
}

// parser
function generate(){

	var inputdata = document.getElementById("fileinput").value;
	var result = '5';
	document.getElementById("fileoutput").innerHTML = generatemarkupfile();
}



function arraygenerator()
{
	a = ["id","name","homeaddress","whatever"];
	b =["text","text","text","integer"];
	return a;
}

function generatemarkupfile(inputdata){
	// head = inputdata;
	var head = generatetag("html","","","");
	outputfile = head+ generatehead()+generatebody()+ closetab(head);	
	return outputfile;
}

function  generatehead () {
	var head = generatetag("head","","","");
	return head + csslink + closetab(head);
}

function generatebody () {
	var csstag = generatetag("div","" ,"form-style-9", "");
	var formtag = generatetag("form","","","");
		// var formtag = "<form onsubmit=\"return validateForm()\" method=\"post\">\n"
	return csstag + formtag + generatelist() + closetab(formtag)+closetab(csstag);

}
>>>>>>> Stashed changes

}

uploadXML();
