window.onload = toDayIs;

function toDayIs(){
var d = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

var datestring = d.getDate()  + "-" + monthNames[d.getMonth()] + "-" + d.getFullYear();
// document.getElementById("fName").value = datestring;
document.getElementById("demo").innerHTML = datestring;
}
