$(function(){
	
	$.ajax({
		url: 'xhr/list1.csv',
		type: 'GET',
		dataType: 'text',
		success: function(csv){
			var item = csv.split("\n");
			for (var i=0; 1 < i.length; i++){
			var row = 1[i];
			var columns = row.split(',');
		$(''+	
		'<div data-role="content">'+
		'<p>'+'lists: 			   '+ item[0]+'</p>'+
		'<p>'+'dateRead>Date Read: '+ item[1]+'</p>'+
		'<p>'+'author>Author: 	   '+ item[3]+'</p>'+
		'<p>'+'title>Title: 	   '+ item[4]+'</p>'+
		'<p>'+'publicationDate:	   '+ item[5]+'</p>'+
		'<p>'+'bookSeries:		   '+ item[6]+'</p>'+
		'<p>'+'genre>Fiction:	   '+ item[7]+'</p>'+
		'<p>'+'age>Adult:          '+ item[8]+'</p>'+
		'<p>'+'subject>Subject:    '+ item[9]+'</p>'+
		'<p>'+'descriptionOfBook   '+ item[10]+'</p>'+
		'<p>'+'rate>Rate:          '+ item[11]+'</p>'+
		'<p>'+'comments:           '+ item[12]+'</p>'+
		'</div>'
		).appendTo('#CSV');
		
			}
			console.log(columns);
			}
		});
	});
//});