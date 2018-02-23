'use strict';

const request = require('request');

const request_string = 'https://fiveqstaging.ligonier.org/podcasts/5-minutes-church-history/alexa.json';

request(request_string, function(error, response, body) {
    module.exports = JSON.parse(body);
});

