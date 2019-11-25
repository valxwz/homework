ch3form.onsubmit=function(){
if ($("input[name='fruit']:checked").length>0){
return true;
console.log($("input[name='fruit']:checked").length)}

else
{
	console.log("No fruit was chosen")
	alert("choose a fruit");
	return false;
}


}



