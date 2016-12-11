function uploadXML() {

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  };

  request.open("GET", "sample_template.xml", true);
  request.send();
}

function callback(xml) {
  var doc, arch, arch_no;
  doc = xml.responseXML;
  
  arch = doc.getElementsByTagName("archetype");  //get archetypes

  arch_no = arch.length;
  

}

uploadXML();