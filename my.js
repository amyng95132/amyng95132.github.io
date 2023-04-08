window.onload = toDayIs;

function toDayIs(){
	var d = new Date();
	const monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"];

	var datestring = d.getDate()  + "-" + monthNames[d.getMonth()] + "-" + d.getFullYear();
	// document.getElementById("myInput").value = datestring;
	document.getElementById("demo").innerHTML = datestring;
}

function myScore(){
		var ele = document.getElementsByName('q1');
		var ele2 = document.getElementsByName('q2');
		var ele3 = document.getElementsByName('q3');
		var total = 0;
		for(i = 0; i < ele.length; i++) {
			if(ele[i].checked){
				if (i === 1) {
					document.getElementById("result1").innerHTML
							= "Your answer: "+ ele[1].value + ";" +
							  " Great job!";
							  total++;
				}else{
					document.getElementById("result1").innerHTML
							= "Your answer: "+ ele[i].value + ";" +
							  " Correct answer: Germany";
				}
			}
		}	
		
		for(j = 0; j < ele2.length; j++) {
			if(ele2[j].checked){
				if (j === 1) {
					document.getElementById("result2").innerHTML
							= "Your answer: "+ ele2[1].value + ";" +
							  " Great job!";
							  total++;
				}else{
					document.getElementById("result2").innerHTML
							= "Your answer: "+ ele2[j].value + ";" +
							  " Correct answer: Mendelsohn";
				}
			}
		}
		
		for(k = 0; k < ele3.length; k++) {
			if(ele3[k].checked){
				if (k === 1) {
					document.getElementById("result3").innerHTML
							= "Your answer: "+ ele3[1].value + ";" +
							  " Great job!";
							  total++;
				}else{
					document.getElementById("result3").innerHTML
							= "Your answer: "+ ele3[k].value + ";" +
							  " Correct answer: B flat , A, C, B natural";
				}
			}
		}

		document.getElementById("yourScore").innerHTML = "Your score " + total; 
}
