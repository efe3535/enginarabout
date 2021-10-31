#!/usr/bin/env node
const img = require('terminal-image');
const got = require('got')
const texts = [
    "\u001b[33m\u001b[00m A wild \u001b[36mEfe\u001b[00m appeared!",
    "\u001b[33m\u001b[00m Welcome, \u001b[36mEfe\u001b[00m. We hope you brought pizza.",
    "\u001b[33m\u001b[00m Good to see you, \u001b[36mEfe\u001b[00m.",
    "\u001b[33m\u001b[00m \u001b[36mEfe\u001b[00m just showed up!",
    "\u001b[33m\u001b[00m \u001b[36mEfe\u001b[00m joined the party.",
    "\u001b[33m\u001b[00m Glad you're here, \u001b[36mEfe\u001b[00m.",
    "\u001b[33m\u001b[00m Yay you made it, \u001b[36mEfe\u001b[00m.",
    "\u001b[33m\u001b[00m \u001b[36mEfe\u001b[00m just slid into the your console.",
    "\u001b[33m\u001b[00m \u001b[36mEfe\u001b[00m just landed.",
    "\u001b[33m\u001b[00m \u001b[36mEfe\u001b[00m is here.",
    "\u001b[33m\u001b[00m Wellcome \u001b[36mEfe\u001b[00m.",
    "\u001b[33m\u001b[00m Everyone wellcome \u001b[36mEfe\u001b[00m",
    "\u001b[33m\u001b[00m \u001b[36mEfe\u001b[00m hopped into the your console.",
    "\u001b[33m\u001b[00m Wellcome \u001b[36mEfe\u001b[00m. Say hi!"
]

got("https://avatars.githubusercontent.com/u/46342237?s=195", { responseType: 'buffer' })
	.then(function (image) { return img.buffer(image.body, { width: '33%' }) })
	.then(function (image) {
		console.log(texts[Math.floor(Math.random() * texts.length)]);
		console.log(image);
		console.log("Hello, I'm  \u001b[32mEfe\u001b[00m.\nI love exploring something new, that is why I'm learning \u001b[31m programming\u001b[00m.\nI'm interested in \u001b[34mLinux\u001b[00m and \u001b[35mC\u001b[00m.")
	});
