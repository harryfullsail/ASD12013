$(document).ready(function() {
	$.ajax({
		"url": "_view/books",
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, books){
				var lists = books.value.lists; 				
	    		var dateread = books.value.dateread;				
				var author = books.value.author;				
				var title =	 books.value.title;		
				var publicationDate = books.value.publicationDate;	
				var bookSeries	= books.value.bookSeries;		
				var genre =	books.value.genre;			
				var age = books.value.age;					
				var subject = books.value.subject;				
				var descriptionOfBook = books.value.descriptionOfBook;	
				var rate =	books.value.rate;				
				var comments = books.value.comments;
				$('#books').append(
					$('<li>').append(
						$('<a>').attr("href", '#')
							.text(title)
					)
				);
		 	});
		 	$('#books').listview('refresh');
		}
	});
});

$(document).ready(function() {
    $.ajax({
		"url": "_view/authors",
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, authors){
				var author = authors.value.author; 				
	    		var website = authors.value.website;				
				var books = authors.value.books;				
				var bookSeries =	 authors.value.bookSeries;		
				var biography = authors.value.biography;	
				var notes	= authors.value.notes;		
				;
				$('#authors').append(
					$('<li>').append(
						$('<a>').attr("href", '#')
							.text(author)
					)
				);
		 	});
		 	$('#authors').listview('refresh');
		}
	});
});