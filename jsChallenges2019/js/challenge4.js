ch4form.onsubmit = function() {
    var name = $("#fullname")
    var address = $("#streetaddr")
    console.log(name)

    var validInput = true;

    if (name.val().length==0){
        $("#nameerrormsg").css("display","block"); 
        validInput = false;
    }
    else {
        $("#nameerrormsg").css("display","none"); 
    }

    if (address.val().length==0){
        $("#addrerrormsg").css("display", "block"); 
        validInput = false;
    }
    else {
        $("#addrerrormsg").css("display", "none"); 
    }

    return validInput;

}















