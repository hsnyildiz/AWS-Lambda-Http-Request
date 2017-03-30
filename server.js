'use strict';
	var rp = require('minimal-request-promise');

	exports.handler = (event, context, callback) => {    

        rp('https://jsonplaceholder.typicode.com/users').then(function (response) {
            callback(null, JSON.parse(response.body));
        })
        .catch(function (err) {
            console.log("err " + err); 
        }); 
        
	};