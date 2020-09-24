#!/usr/bin/env node

let address = require("address");
let chalk = require("chalk");
let qrcode = require("qrcode-terminal");

let ipv4 = address.ip();
let port = 1234;

let url = `http://${ipv4}:${port}`;

qrcode.generate(url, { small: true }, function (qrcode) {
  console.log(qrcode + chalk.bold("Server running at", chalk.cyan(url)));
});
