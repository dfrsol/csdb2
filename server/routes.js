'use strict';

module.exports.attach = (app) => {
    app.route('/')
        .get(function homePage (req, res) {
            res.render('index', {title: 'Counter Strike DB | Home', message: 'Hello World'});
        });
};
