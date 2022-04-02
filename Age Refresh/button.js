window.onload = PickAge

function YesButton()
{
	window.location.href = "TY.html";
}

function NoButton()
{
	location.reload();
}

function PickAge()
{
	console.log("New Age is: ");
	var MaxBound = 120;
	document.getElementById("age").innerHTML = Math.floor(Math.random() * MaxBound);
}