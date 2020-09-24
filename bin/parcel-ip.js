#!/usr/bin/env node

let address = require("address");

let ipv4 = address.ip();
let port = 1234;

console.log(`http://${ipv4}:${port}`);
