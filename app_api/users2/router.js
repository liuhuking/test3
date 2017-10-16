var config = require('./../../config.json');
var express = require('express');
var router = express.Router();
var userService = require('./user.service');
var randomstring = require('randomstring');
var jwt = require('express-jwt');
var jwt_decode = require('jwt-decode');

router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/:_id', get);
router.put('/:_id', update);
router.delete('/:_id', _delete);
router.get('/resetpassword/:_id', resetPassword);

module.exports = router;

//this is how you get user ID from the request
// var token = req.headers.authorization.split(' ')[1];
// var decoded = jwt_decode(token).sub;

function authenticate(req, res) {
    userService.authenticate(req.body.email, req.body.password)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.status(400).send('Username or password incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function register(req, res) {
    userService.create(req.body)
        .then(function () {
            res.status(200).json({});
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    userService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function get(req, res) {
    userService.getById(req.params._id)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    userService.update(req.params._id, req.body)
        .then(function () {
            res.status(200).json({});
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    userService.delete(req.params._id)
        .then(function () {
            res.status(200).json({});
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function resetPassword(req, res){
    var app = require('express')(),
    mailer = require('express-mailer');
    app.set('view engine', 'jade');

    mailer.extend(app, {
        from : 'Task Management',
        host: 'smtp.gmail.com',
        secureConnection: true,
        port: 465,
        transportMethod: 'SMTP',
        auth: {
            user: 'uts.aip.2017@gmail.com',
            pass: 'dkTlqkfrhkwpwhwrkxek',
            otherProperty: 'other prperty'
        }
    });

    userService.getById(req.params._id)
        .then(function (user) {
            if (user) {
                user.password = randomstring.generate(7);
                userService.update(req.params._id, user);
                sendMail(user, user.password);
                return;
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });

    function sendMail(user, password){
        app.mailer.send('email', {
            to: user.email,
            subject: 'Password Reset',
            password: password
        }, function (err, message){
            if(err){
                res.send(err.name + ': ' + err.message);
                return;
            }
            res.send('Email sent');
        });
    }
}