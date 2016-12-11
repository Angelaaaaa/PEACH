function uploadXML() {

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
    var doc, arch;
    doc = xml.responseXML;

    arch = doc.getElementsByTagName("archetype"); //get archetypes


    for (i = 0; i < arch.length; i++) { //number of archetypes in the teamplate

        //name of an archetype
        console.log(arch[i].getElementsByTagName("name")[0].textContent);

        //collection of elements contained in one archetype
        var elements = arch[i].getElementsByTagName("element");

        

        for (i = 0; i < elements.length; i++) { //for every element

          console.log(elements[i].getElementsByTagName("name")[0].textContent);

          console.log(elements[i].getElementsByTagName("type")[0].textContent);
        }

      
    }

}

uploadXML();
