'use strict';

const request = require('request');

const request_string = 'https://www.ligonier.org/podcasts/open-book/alexa.json';

request(request_string, function(error, response, body) {
    module.exports = JSON.parse(body);
});

