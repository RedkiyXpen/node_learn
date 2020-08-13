const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/:userQuery', (req, res) => {
    res.render('index', {data : {userQuery : req.params.userQuery,
                                 searchResult : ['book1', 'book2', 'book3'],
                                 loggedIn : true,
                                 username : "potato"}});
});

app.post('/', (req, res) => {
    console.log(req.body);
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log(err);
            res.send('error was accured');
        }
        console.log(result);
        res.send('successfuly posted data');
    });
});

app.listen(3000);