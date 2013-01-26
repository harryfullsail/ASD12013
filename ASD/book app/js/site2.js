$(function(){
    
    $.ajax({
        url: 'xhr/list.xml',
        type: 'GET',
        dataType: 'xml',
        success: function (xml){
            function parseXML (xml){
            books.find("book").each(function(){
                var books = $(this).attr('books');
                var lists               = $(this).find('lists').text();
                var dateRead            = $(this).find('dateRead').text();
                var author              = $(this).find('author').text();
                var title               = $(this).find('title').text();
                var publicationDate     = $(this).find('publicationDate').text();
                var bookSeries          = $(this).find('bookSeries').text();
                var genre               = $(this).find('genre').text();
                var age                 = $(this).find('age').text();
                var subject             = $(this).find('subject').text();
                var descriptionOfBook   = $(this).find('descriptionOfBook').text();
                var rate                = $(this).find('rate').text();
                var comments            = $(this).find('comments').text();
                $(''+
                '<div data-role="content">'+
                    '<p>'+book.lists +'</p>'+
                    '<p>'+ book.dateRead +'</p>'+
                    '<h1>'+ book.author +'</h1>'+
                    '<h2>'+ book.title +'</h2>'+
                    '<p>'+ book.publicationDate +'</p>'+
                    '<p>'+ book.bookSeries +'</p>'+
                    '<p>'+ book.genre +'</p>'+
                    '<p>'+ book.age +'</p>'+
                    '<p>'+ book.subject +'</p>'+
                    '<p>'+ book.descriptionOfBook +'</p>'+
                    '<p>'+ book.rate +'</p>'+
                    '<p>'+ book.comments +'</p>'+
                    '</div>'
            ).appendTo('#xml');

        });
        console.log(xml);    
        }
       }
    });

});