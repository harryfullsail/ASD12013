function (doc) {
	if (doc._id.substr(0, 7) === "author:") {
		emit(doc._id.substr(18), {
			"author": doc.author,
			"website": doc.website,
			"books": doc.books,
			"bookSeries": doc.bookSeries,
			"biography": doc.biography,
			"notes": doc.notes
		});
	}
};