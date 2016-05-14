'use strict';

module.exports.attach = (app) => {
    app.route('/')
        .get(function homePage (req, res) {
            res.render('index', {title: 'Counter Strike DB | Home', message: 'Hello World', hideSearch: true});
        });
	
	app.route('/about')
		.get(function aboutPage (req, res) {
			res.render('about', {title: '', })
		});
	
    app.route('/strategy')
        .get(function detailPage (req, res) {
	        var dbReturned = require('./mocks/mock-strategy.json');
	        
	        res.render('strategies', dbReturned);
        })
};
