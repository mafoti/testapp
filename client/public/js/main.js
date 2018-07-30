$('#range').click(function() {
	$('#Events').empty();
	from = $('#from').val();
	console.log(from);
	var newDate=new Date(from+' GMT');
	fromTimeStamp = Math.round(newDate.getTime()/1000);
	if(fromTimeStamp>0){
		$.get('/get_blocks/'+fromTimeStamp+'/', '', function(data) {
			$('#Events').empty();
			$("<h2>").append(data.length + " BidRevealed Events found").appendTo('#Events');

			$("<div>", {class: "row"}).append(
				        $("<div>", {class: "col-sm-2"}).append(
				                'Block Number'
				        ), 
				        $("<div>", {class: "col-sm-5"}).append(
				                'Owner'
				        ),
				        $("<div>", {class: "col-sm-4"}).append(
				                'Value'
				        ),
				        $("<div>", {class: "col-sm-1"}).append(
				                'Status'
				        )
				    ).appendTo('#Events');

			$.each( data, function( index, eventValue ) {

				    $("<div>", {class: "row"}).append(
				        $("<div>", {class: "col-sm-2"}).append(
				                eventValue.blockNumber
				        ), 
				        $("<div>", {class: "col-sm-5"}).append(
				                eventValue.returnValues.owner
				        ),
				        $("<div>", {class: "col-sm-4"}).append(
				                eventValue.returnValues.value
				        ),
				        $("<div>", {class: "col-sm-1"}).append(
				                eventValue.returnValues.status
				        )
				    ).appendTo('#Events')
			});
			
		});
	}else{
		$('#Events').empty();
		$("<h2>").append("No Events").appendTo('#Events');
	}
	
});