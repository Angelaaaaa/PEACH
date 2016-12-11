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
    var doc, arch, i, j, elements, name_arch, name_elem, type;
    doc = xml.responseXML;

    arch = doc.getElementsByTagName("archetype"); //get archetypes

    for (i = 0; i < arch.length; i++) { //number of archetypes in the teamplate

        //name of an archetype
        name_arch = arch[i].getElementsByTagName("name")[0].textContent;
        console.log(name_arch);

        //collection of elements contained in one archetype
        elements = arch[i].getElementsByTagName("element");

        

        for (j = 0; j < elements.length; j++) { //for every element

          //name and type of each element within an archetype
          name_elem = elements[j].getElementsByTagName("name")[0].textContent;
          type = elements[j].getElementsByTagName("type")[0].textContent;

          console.log('***');
          console.log(name_elem);
          console.log(type);
          console.log('***');
        }


      console.log('---');
    }

}

uploadXML();
