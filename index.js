"use strict";

const assert = require(`assert`);
const util = require(`util`);
const fs = require(`fs`);

const IsString = require(`is-string`);

const {fnNames} = require(`./config.js`);

assert(fnNames instanceof Array);
fnNames.forEach((name) => assert(IsString(name)));
assert(fnNames.length === (new Set(fnNames)).size);

fnNames.forEach((name) => exports[name] = util.promisify(fs[name]));