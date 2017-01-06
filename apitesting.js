var baseUrl = 'https://ehrscape.code4health.org/rest/v1';
var queryUrl = baseUrl + '/query';
// var authorization =  'dWNscGVhY2hfYzRoOlFXeFBwYnl3';
var ehrId = '626a6c9c-b24a-4efb-9674-1647e6e2a9e8';
var authorization = "Basic dWNscGVhY2hfYzRoOlFXeFBwYnl3";
var username = "uclpeach_c4h";
var password = "QWxPpbyw";  

$.ajax({
    url: baseUrl + "/view/" + ehrId + "/Body_temperature",
    type: 'GET',
    headers: {
        "Authorization": authorization
    },
    success: function (res) {
        $("#header").append("Body Temperatures");
        for (var i in res) {
            $("#result").append(res[i].time + ': ' + res[i].temperature  + res[i].unit + "<br>");
             console.log(res[i].temperature);
        }
    }
});