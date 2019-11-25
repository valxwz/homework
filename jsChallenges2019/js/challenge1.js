// subscribe.onchange = function (){
// 	let thing=document.getElementById("emailField")
// 	if (this.checked){
// 		console.log("selected");
// 		thing.style.display = "block";
// 	}
// 	else{
// 		thing.style.display= "none";
// 	}
// 	console.log(thing);
// 	// thing.style=="block"?
// 	// thing.style.dispay="none",
// 	// thing.style.display="block";
// }




$(document).ready(function(){
	$("#subscribe").click(function(){
		console.log($("#subscribe"))
		if ($("#subscribe").prop("checked")){
		$("#emailField").css("display", "block");
	}else{
	$("#emailField").css("display", "none");}
    
  });
})