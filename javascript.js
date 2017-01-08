//validando forms
function validacao(){
	if (document.form.n1.value=="") {
		alert("Empty field");
		document.form.n1.focus();
		return false;}
	if (document.form.n2.value=="") {
		alert("Empty field");
		document.form.n2.focus();
		return false;}
}
//operation
function calcular(){
	var operation = document.getElementById('operation').value;

	var n1 = document.getElementById('n1').value;
	var n2 = document.getElementById('n2').value;

	n1 = parseFloat(n1);
	n2 = parseFloat(n2);

	var result = null;

	switch(operation){
		case '1':
		result = n1 + n2;
		break;

		case '2':
		result = n1 - n2;
		break;

		case '3':
		result = n1 * n2;
		break;

		case '4':
		result = n1 / n2;
		break;

		default:
		alert("Operation is invalid");
	}

	if ((n1 && n2 >= 0) || (n1 && n2 <= 0)) {
		alert("Result is: " + result);
	}
}