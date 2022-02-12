#!/usr/bin/env node
const img = require('terminal-image');
const got = require('got');
const efe = "\u001b[36mEfe\u001b[00m"
const texts = [
    `A wild ${efe} appeared!`,
    `Welcome, ${efe}. We hope you brought pizza.`,
    `Good to see you, ${efe}.`,
    `${efe} just showed up!`,
    `${efe} joined the party.`,
    `Glad you're here, ${efe}.`,
    `Yay you made it, ${efe}.`,
    `${efe} just slid into the your console.`,
    `${efe} just landed.`,
    `${efe} is here.`,
    `Welcome ${efe}.`,
    `Everyone welcome ${efe}`,
    `${efe} hopped into the your console.`,
    `Welcome ${efe}. Say hi!`
];

got("https://avatars.githubusercontent.com/u/46342237?s=195", { responseType: 'buffer' })
    .then(image => img.buffer(image.body, { width: 33 }))
    .then(image => {
        console.log("\u001b[33m\u001b[00m", texts[Math.floor(Math.random() * texts.length)]);
        console.log(image);
        console.log("Hello, I'm \u001b[32mEfe\u001b[00m.\nI love exploring something new, that is why I'm learning \u001b[31mprogramming\u001b[00m.\nI'm interested in \u001b[34mLinux\u001b[00m and \u001b[35mC\u001b[00m.");
    });
