#!/usr/bin/env node
const img = require( 'terminal-image' );
const got = require( 'got' )
got("https://avatars.githubusercontent.com/u/46342237?s=195", {responseType:'buffer'})
.then(function (image) { return img.buffer(image.body, {width: '16%'}) })
.then(function (image) {
	console.log("\u001b[33m\u001b[00m A wild \u001b[36mEfe\u001b[00m appeared!")
	console.log(image);
	console.log("Hello, I'm  \u001b[32mEfe\u001b[00m.\nI love exploring something new, that is why I'm learning \u001b[31m programming\u001b[00m.\nI'm interested in \u001b[34mLinux\u001b[00m and \u001b[35mC\u001b[00m.")
});