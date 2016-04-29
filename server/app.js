'use strict';

const express = require('express');
const path    = require('path');
const port    = process.env.PORT || 3000;
const routes  = require('./routes.js');
const hbs     = require('express-handlebars').create({
        layoutsDir    : 'server/views/layouts/',
        defaultLayout : 'default',
        extname       : '.hbs',
        partialsDir   : [
            'server/views/partials'
        ]
    });

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.static('./client'));

routes.attach(app);

const server = app.listen(port, function (){
    console.log('\n Application started and listening on http://localhost:' + port);
});
