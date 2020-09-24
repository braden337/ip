#!/usr/bin/env node

let address = require("address");
let chalk = require("chalk");

let ipv4 = address.ip();
let port = 1234;

let url = `http://${ipv4}:${port}`;

console.log(chalk.bold("Server running at", chalk.cyan(url)));
