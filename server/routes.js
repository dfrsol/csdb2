'use strict';

module.exports.attach = (app) => {
    app.route('/')
        .get(function homePage (req, res) {
            res.render('index', {title: 'Counter Strike DB | Home', message: 'Hello World'});
        });

    app.route('/strategy')
        .get(function detailPAge (req, res) {
            res.render('strategies', {title: 'Example Strategy page'});
        })
};
