const express = require('express');
const router = express.Router();
const knex = require('../../db/knex.js');
const bcrypt = require('bcryptjs');
const saltRounds = 8; //change to 12 for production
const jwt = require('jsonwebtoken');

const Auth = require('../../services/auth_helpers');

// GET /api/auth/verify
router.get('/verify', (req, res) => {
	const token = req.headers.authorization.split(' ')[1];
	if (!token) {
		res.status(401).json({ status: 'No token provided.' });
	} else {
		jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
			if (err) {
		        res.status(401).json({ status: 'Invalid token' });
	      	} else {
		        res.status(200).json({ status: 'Token good!' });
			}	
		})
	}
});

// POST /api/auth/signup
router.post('/signup', (req, res) => {
	knex('users')
        .where({email: req.body.email}).first()
        .then(function(user) {
            if (user) { res.status(401).json({ status: 'User already exists!' }); }
            else {
                bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                    var newUser = {
                        email: req.body.email,
                        password: hash,
                        username: req.body.username
                    };
                    
                    knex('users')
                    	.insert(newUser)
                    	.then(newUser => { return Auth.createToken(newUser); })
                    	.then(token => { res.status(200).json({ status: 'Created user!', 
                    											token: token }); })
                });
            }
        })
        .catch(err => { res.status(500).json({status: 'Error :(', error: err }); });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
	knex('users')
        .where({email: req.body.email}).first()
        .then(function(user) {
            if (!user) { res.status(401).json({ status: 'User not found :/' }); }
            else {
                bcrypt.compare(req.body.password, user.password, function(err, result) {
                    if (result == true) {
                    	res.status(200).json({ status: 'Successfully logged in!',
                    						   token: Auth.createToken(user) });
                    }
                    else {
                        res.status(401).json({ status: 'Wrong password :(' });
                    }
                })
            }
        })
		.catch(err => { res.status(500).json({status: 'Error :(', error: err }); });
});

module.exports = router;
