$('#home').live("pageshow", function() {
	$.couch.db("asdcouchproject42013").view("plugin/books", {
		success: function(data) {
			//console.log(data);
			$('#books').empty();
			$.each(data.rows, function(index, value) {
				var item = (value.value || value.doc);
				$('#books').append(
					$('<li>').append(
						$('<a>')
						.attr("href", "book.html?book=" + item.author)
						.text(item.title)
					)		
				);	
			});
			$('#books').listview('refresh');	
		}
	});
});

var urlVars = function(urlData) {
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs) {
		var KeyValue = urlPairs[pair].split('=');
		var Key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(KeyValue[1]);
		urlValues[Key] = value;
	}
	retuen(urlValues);

};

$('#home2').live("pageshow", function() {
	var book = urlVars()["book"];
	console.log(book);
	//var urlData = $(this).data("url");
});