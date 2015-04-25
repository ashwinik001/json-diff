'use strict';

var Comparator = (function() {

	var	COMP_ENGINE_CONST = require('./../const/comparator-engine-const'),
		cloneUtil = require('./../../../utils/clone-util'),
		compConfigValidator = require('./../validator/comp-config-validator'),
		calculateJsonDiff = require('./cal-diff/json-diff-calculator'),
		logger = require('./../../../utils/log-util');

	function comparatorClass(sampleCompConfig) {

		var configValidityInfo = compConfigValidator(sampleCompConfig);

		if(configValidityInfo !== true) {
			throw new TypeError("The configuration passed for sample comparison is not valid. The error probably is: "
			+ configValidityInfo);
		}

		this.sampleCompConfig = sampleCompConfig;

		return this;
	}

	comparatorClass.prototype.compare = function(sample1, sample2) {
		sample1 = cloneUtil(sample1);
		sample2 = cloneUtil(sample2);

		this.finalOutputDiffJson = Object.create(null);

		this.finalOutputDiffJson = calculateJsonDiff.call(this, sample1, sample2, this.sampleCompConfig, this.finalOutputDiffJson, "root", 0);

		return this.finalOutputDiffJson;
	};

	return comparatorClass;

})();

module.exports = Comparator;