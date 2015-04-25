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

//var finalOutput1 = itemComparator.compare(itemSample1, itemSample1);

//console.info("hey 00");
//console.info(util.inspect(finalOutput1, { "showHidden": false, "depth": null, "colors": true}));
//console.info("hey 11");


/*console.info("hey 000");
console.info(finalOutput == finalOutput1);
console.info(finalOutput === finalOutput1);
console.info(JSON.stringify(finalOutput) == JSON.stringify(finalOutput1));
console.info(JSON.stringify(finalOutput) === JSON.stringify(finalOutput1));
console.info("hey 111");*/



