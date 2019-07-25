/*
Creator: Jake White
Date created: 07/23/2019
Date last modified: 07/24/2019
*/

function clearErrors() {
	for (var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter++) {
		if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			document.forms["contactForm"].elements[loopCounter].parentElement.className = "col";
			if (document.forms["contactForm"].elements[loopCounter].type == "radio" || document.forms["contactForm"].elements[loopCounter].type == "checkbox") {
				document.forms["contactForm"].elements[loopCounter].parentElement.className = "form-check form-check-inline col-xs-1";
			}
		}
	}
}

function validateItems() {
	clearErrors();
	var okayMessage = 0;
	var cusName = document.forms["contactForm"]["name"].value;
	var cusEmail = document.forms["contactForm"]["email"].value;
	var cusPhone = document.forms["contactForm"]["phone"].value;
	var cusAdd = document.forms["contactForm"]["information"].value;
	
	if (cusName == "" || document.getElementById('name').validity.patternMismatch) {
		document.getElementById("invalidName").style.display = "inline";
		document.forms["contactForm"]["name"].parentElement.className = "col has-error";
		okayMessage++;
	} else{
		document.getElementById("invalidName").style.display = "none";}
	
	if (cusEmail == "" || document.getElementById('email').validity.patternMismatch) {
		document.getElementById("invalidEmail").style.display = "inline";
		document.forms["contactForm"]["email"].parentElement.className = "col has-error";
		okayMessage++;
	} else{
		document.getElementById("invalidEmail").style.display = "none";}
	
	if (cusPhone == "" || document.getElementById('phone').validity.patternMismatch) {
		document.getElementById("invalidPhone").style.display = "inline";
		document.forms["contactForm"]["phone"].parentElement.className = "col has-error";
		okayMessage++;
	} else{
		document.getElementById("invalidPhone").style.display = "none";}
	
	if (cusAdd == "") {
		document.getElementById("invalidInformation").style.display = "inline";
		document.forms["contactForm"]["information"].parentElement.className = "col has-error";
		okayMessage++;
	} else{
		document.getElementById("invalidInformation").style.display = "none";}
	
	if (document.getElementById("option1").checked == false && document.getElementById("option2").checked == false) {
		document.getElementById("invalidOptions").style.display = "inline";
		document.forms["contactForm"]["option1"].parentElement.className = "form-check form-check-inline col-xs-1 has-error";
		document.forms["contactForm"]["option2"].parentElement.className = "form-check form-check-inline col-xs-1 has-error";
		okayMessage++
	} else{
		document.getElementById("invalidOptions").style.display = "none";}
	
	if (document.getElementById("m").checked == false
		&& document.getElementById("t").checked == false
		&& document.getElementById("w").checked == false
		&& document.getElementById("th").checked == false
		&& document.getElementById("f").checked == false) {
		document.getElementById("invalidDays").style.display = "inline";
		document.forms["contactForm"]["m"].parentElement.className = "form-check form-check-inline col-xs-1 has-error";
		document.forms["contactForm"]["t"].parentElement.className = "form-check form-check-inline col-xs-1 has-error";
		document.forms["contactForm"]["w"].parentElement.className = "form-check form-check-inline col-xs-1 has-error";
		document.forms["contactForm"]["th"].parentElement.className = "form-check form-check-inline col-xs-1 has-error";
		document.forms["contactForm"]["f"].parentElement.className = "form-check form-check-inline col-xs-1 has-error";
		okayMessage++
	} else{
		document.getElementById("invalidDays").style.display = "none";}
	
	if (okayMessage === 0) {
		document.getElementById("confirm-validation").style.display = "block";
		return true;
	} else{document.getElementById("confirm-validation").style.display = "none";
	return false;}
}