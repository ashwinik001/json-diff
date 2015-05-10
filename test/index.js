'use strict';

var compFactory = require('./../../compare'),
	itemCompConfig = require('./item-comp-config'),
	itemSample1 = require('./sample/item-sample1'),
	itemSample2 = require('./sample/item-sample2'),
	util = require('util');

var itemComparator = new compFactory(itemCompConfig);

var finalOutput = itemComparator.compare(itemSample1, itemSample2);

console.info("--hey 0--");
console.info(util.inspect(finalOutput, { "showHidden": false, "depth": null, "colors": true}));
console.info("hey 1");
