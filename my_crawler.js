var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

  urls = ['https://www.apple.com', 'https://www.apple.com/mac/', 'https://www.apple.com/ipad/', 'https://www.apple.com/iphone/', 'https://www.apple.com/watch/'];

  urls.forEach(function(url) {
	  request(url, function(error, response, html){
	    if(!error){
	      var $ = cheerio.load(html);
	      var count = 0

			$('*:contains("apple")').filter(function(i){
		        $(this).each(function(i, el){
			       	const element_text_str = $(this).text()
			       	const element_text_array = element_text_str.split(' ')

					element_text_array.forEach(function(e) {
			       		if (e.toLowerCase() == "apple" ) {
		   		        	count += 1; 
			       		}			
			       });
		        }) 
		  	})
	    }
	    if (count > 0) {
	    	console.log(pages_with_word)
	    	pages_with_word += 1
	    } 

		console.log(url + ' has the word apple in it ' + count + ' times')
	  })  	
	})

  	var results = 'Searched ' + urls.length
  	res.send(results)		
	console.log(results)
})

app.listen('8300')
exports = module.exports = app;