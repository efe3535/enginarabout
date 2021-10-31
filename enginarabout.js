#!/usr/bin/env node
const img = require('terminal-image');
const got = require('got')
const welcome = JSON.parse(require("fs").readFileSync("welcome.json", { encoding: "utf8" }));

got("https://avatars.githubusercontent.com/u/46342237?s=195", { responseType: 'buffer' })
	.then(function (image) { return img.buffer(image.body, { width: '33%' }) })
	.then(function (image) {
		console.log(welcome[Math.floor(Math.random() * welcome.length)]);
		console.log(image);
		console.log("Hello, I'm  \u001b[32mEfe\u001b[00m.\nI love exploring something new, that is why I'm learning \u001b[31m programming\u001b[00m.\nI'm interested in \u001b[34mLinux\u001b[00m and \u001b[35mC\u001b[00m.")
	});
