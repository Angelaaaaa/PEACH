# PEACH
peach 
----------------------
form generator description
----------------------
The project is a form generator which take xml as input and generate form as an output as to our client's demand. It will be used by UCLH allowing users to store data into database in EHR backend.
We use simple html, css and javascript. No library used so far. 
The file is only for prototypes.

-------------------------
Design Decisions & Issues
-------------------------
We decided to parse the system and do each part individually and integrated it.
The only issue so far is that back end is very unstable. We have contact the one who is responsible for the backend and will fix it later.

-----------------------
input examples
-----------------------
The template example is in the repository naming sample_template.xml

-----------------------
output examples
-----------------------
“<html>
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
</html>”
