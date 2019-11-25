// window.alert("Yep, my function is being called");

useBilling.onchange = function(){
	let home=$("#home");
	let billing = $("#billing");
	if (this.checked){
		home.val(billing[0].value);
		console.log(home)
		home.prop( "disabled", true )
	}
	else{
		// console.log(home)
		home.prop( "disabled", false )
		home.val("");

	}


}