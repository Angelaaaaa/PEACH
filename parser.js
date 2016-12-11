function uploadXML() {

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this);
    }
  };

  xmlhttp.open("GET", "sample_template.xml", true);
  xmlhttp.send();
}

function callback(xml) {
  var doc;
  doc = xml.responseXML;
  
  x = doc.getElementsByTagName("rand")[0].childNodes[0].nodeValue;
  console.log(x);
   
}

uploadXML();