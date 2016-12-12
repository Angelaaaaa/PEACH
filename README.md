# PEACH



Form generator description
----------------------
The project is a form generator which takes a sample XML openEHR opertional template as input and generates an HTML form as an output, following our client's demand. The system will be used by UCLH, allowing users to store data in openEHR-complying backend systems. In this particular prototype we used HTML5, CSS3 and JavaScript. No external libraries were used so far. 
Bear in mind that the current file provided is only a prototype and does not provide any real backend connectivity


Running the system
-------------------------

In order to sussesfully run the application, an npm http-server needs to be installed and launched. After this, the application can be accessed on http://localhost:8080
A detailed guide to this process is provided on our team website, Prototype page, Parsing prototype.

To generate markup, simply press the "Generate" button on the screen. An XMLc file will be uploaded, parsed and on this basis markup will be output.


Design Decisions & Issues
-------------------------
Initially, we decided to develop system components individually and then integrated them.
The only issue so far is that EHRScape backend system, on which we relied, showed unstable behaviour. Our team has already contacted technical support of the system and is waiting for their response.


Input examples
-----------------------
A sample representation of an openEHR operational template is provdied in sample_template.xml file. It has a simplified structure for the purpose of this prototype. Actual archetypes and template are provided in corresponding directories of this repository. They were generated on prior stages of experiments and will be used later on.


Output examples
-----------------------
The output html is in the repository called test.html.be
Below is a simple example.
<!-- <html>
<head>
<link rel="stylesheet" type="text/css" href="stylesheet.css"></head>
<div class = "form-style-9">
<form>
<ul>
<p>Blood pressure</p>
<li class = "field5">
<input value = "Systolic" required>
</li>
<li class = "field5">
<input value = "Diastolic" required>
</li>
<p>Body temperature</p>
<li class = "field5">
<input value = "Temperature" required>
</li>
<button value = "submit"  type = "submit" onclick="myFunction()" >
submit</button>
</ul>
</form>
</div>
</html>
 -->
