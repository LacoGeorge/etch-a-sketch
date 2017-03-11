var pixSize = 5;
var rows = 50;
var columns = 50;



canvasInit();


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
	columns = rows;

	canvasInit();

}

function canvasInit(){
	$(".wrapper").height(rows*pixSize);
	$(".wrapper").width(columns*pixSize);

	
	for (var i = 0; i<rows; i++)
	{

		for (var j= 0; j<columns; j++)
		{
			$(".wrapper").append('<div class="pixel pix' + i + 'x' + j + '"></div>');
		}
	}

	$(".pixel").height(pixSize);
	$(".pixel").width(pixSize);
}


$("body").on('mouseenter', '.pixel',function(){
			console.log("hovering");
			$(this).css("background-color","black");
});