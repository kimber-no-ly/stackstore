/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Product = db.model('product');
var Promise = require('sequelize').Promise;


var data = {
	user: [{
		email: 'testing@fsa.com',
		password: 'password'
	}, {
		email: 'obama@gmail.com',
		password: 'potus'
	}],
	product: [{
		title: 'Decoy Detonator',
		description: "Need to create a diversion to sneak past some Ministry employees? Then here's just the thing! You can twist the key at the top to set it up. Rolling action is friction activated. You just pull it back, release and off it goes.",
		price: 34.99,
		quantity: 10,
		category: ['general'],
		photoUrl: 'http://i.imgur.com/1EoJoj2.jpg'
	},
	{
		title: 'Puking Pastilles',
		description: "Help skive off classes with our Puking Pastilles! They make the eater vomit within seconds of eating it. Part of our Skiving Snackbox line.",
		price: 34.99,
		quantity: 10,
		category: ['edibles'],
		photoUrl: 'http://i.imgur.com/WJMibuA.jpg'
	},
	{
		title: 'Fainting Fancies',
		description: "Need to skip a class? These large & round orange and lemon flavored gummies are just the thing you need! Part of our Skiving Snackbox line.",
		price: 7.99,
		quantity: 10,
		category: ['edibles'],
		photoUrl: 'http://i.imgur.com/R1T0RTX.jpg'
	},
	{
		title: 'Fever Fudge',
		description: "Fever Fudge is designed to make the one who eats it get a high fever within seconds of eating it. Some side effects may occur. Part of our Skiving Snackbox line.",
		price: 7.99,
		quantity: 10,
		category: ['edibles'],
		photoUrl: 'http://i.imgur.com/D9zauWb.jpg'
	},
	{
		title: 'Nosebleed Nougat',
		description: "The most popular of our Skiving Snackboxes! Make the eater's nose bleed heavily within seconds!",
		price: 7.99,
		quantity: 10,
		category: ['edibles'],
		photoUrl: 'http://i.imgur.com/FkwdJmJ.jpg'
	},
	{
		title: 'Extendable Ears',
		description: "You'll be surprised at what you hear....with your Weasley Wizard Wheezes extendable ear!",
		price: 39.99,
		quantity: 10,
		category: ['spy'],
		photoUrl: 'http://i.imgur.com/RKwSiZh.jpg'
	},
	{
		title: 'Cupid Crystals Love Potion',
		description: "Love Potion from our exclusive WonderWitch line!",
		price: 49.99,
		quantity: 10,
		category: ['edibles, wonderwitch'],
		photoUrl: 'http://i.imgur.com/94nKnik.jpg'
	},
	{
		title: 'Kissing Concoction Love Potion',
		description: "Love Potion from our exclusive WonderWitch line!",
		price: 49.99,
		quantity: 10,
		category: ['edibles, wonderwitch'],
		photoUrl: 'http://i.imgur.com/94nKnik.jpg'
	},
	{
		title: 'Beguiling Bubbles Love Potion',
		description: "Love Potion from our exclusive WonderWitch line!",
		price: 49.99,
		quantity: 10,
		category: ['edibles, wonderwitch'],
		photoUrl: 'http://i.imgur.com/94nKnik.jpg'
	},
	{
		title: 'Twilight Moonbeams Love Potion',
		description: "Love Potion from our exclusive WonderWitch line!",
		price: 49.99,
		quantity: 10,
		category: ['edibles, wonderwitch'],
		photoUrl: 'http://i.imgur.com/94nKnik.jpg'
	},
	{
		title: 'Whoopie Cushion',
		description: "Muggle novelty!",
		price: 7.99,
		quantity: 10,
		category: ['muggle'],
		photoUrl: 'http://i.imgur.com/Cqegul8.jpg'
	},
	{
		title: 'Deck of Cards',
		description: "Standard Muggle Deck of Cards. 52 Cards, 4 suits, hours of fun!",
		price: 14.99,
		quantity: 10,
		category: ['muggle'],
		photoUrl: 'http://i.imgur.com/vpKozb1.jpg'
	},
	{
		title: 'Glasses Disguise',
		description: "Authentic Muggle glasses and moustache disguise.",
		price: 12.99,
		quantity: 10,
		category: ['muggle'],
		photoUrl: 'http://i.imgur.com/sSsdTXe.jpg'
	}]
};

db.sync({ force: true })
	.then(function () {
		return Promise.map(Object.keys(data), function (name) {
			return Promise.map(data[name], function (item) {
				return db.model(name)
					.create(item);
			});
		});
	})
	.then(function () {
		console.log(chalk.green('Seed successful!'));
		process.kill(0);
	})
	.catch(function (err) {
		console.error(err);
		console.log('hello!');
		process.kill(1);
	});
