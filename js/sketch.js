
var rows = 50;

var canvasSize = 500;
var pixSize = canvasSize / rows;
var softMode = true;

canvasInit();


$("body").on('mouseenter', '.pixel',function(){

	if(softMode)
	{
		console.log("soft hovering");
		$(this).css("opacity","+=0.1");
	}
	else
	{
		console.log("hard hovering");
		$(this).css("opacity","1");
	}

});


function clearCanvas(){
	$(".pixel").remove();
	$(".wrapper").height(0);
	$(".wrapper").width(0);

	console.log("Canvas cleared!");
	var newrows = prompt("How many rows and columns should the new canvas have? (10-150)");

	if (isNaN(newrows) || newrows < 10 || newrows > 150)
	{
		alert("Invalid answer!");
		newrows = 0;
	}

	rows = newrows;


	canvasInit();

}

function canvasInit(){
	$(".wrapper").height(canvasSize);
	$(".wrapper").width(canvasSize);
	pixSize = canvasSize / rows;
	for (var i = 0; i<rows; i++)
	{

		for (var j= 0; j<rows; j++)
		{
			$(".wrapper").append('<div class="pixel pix' + i + 'x' + j + '"></div>');
		}
	}

	$(".pixel").height(pixSize);
	$(".pixel").width(pixSize);
}

function softModeToggle(){
	if (softMode){
		softMode = false;
		$(".softModeButton").text("Soft Mode is OFF");
	}
	else
	{
		softMode = true;
		$(".softModeButton").text("Soft Mode is ON");

	}
	console.log("Value of softMode: " + softMode);
}

