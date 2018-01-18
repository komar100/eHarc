var express = require('express');
var router = express.Router();


module.exports = function(app, passport) {



	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/scoutsList',
		failureRedirect : '/',
		failureFlash : true
	}));



	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};


function isLoggedIn(req, res, next) {

	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}
