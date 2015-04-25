'use strict';

var	COMP_ENGINE_CONST = require('./../const/comparator-engine-const'),
	logger = require('./../../../utils/log-util');

var VALUE_TYPE_STRING = COMP_ENGINE_CONST.IN_BUILT_DATA_TYPES[0],
	VALUE_COMPARATOR = COMP_ENGINE_CONST.COMP_ENGINE[0],
	TEXT_COMPARATOR = COMP_ENGINE_CONST.COMP_ENGINE[1];

function isSampleCompConfigValid(sampleCompConfig) {

	for(var key in sampleCompConfig) {
		if(sampleCompConfig.hasOwnProperty(key)) {

			var currAttrNode = sampleCompConfig[key].attr;

			if(currAttrNode) {
				if(Array.isArray(currAttrNode)) {
					for(var loopIndex = 0; loopIndex < currAttrNode.length; loopIndex++) {

						var currElement = currAttrNode[loopIndex];
						var currElementType = currElement.type;
						var currElementRef = currElement.ref;
						var currElementCompEngine = currElement.compEngine;

						if("type" in currElement) {

							var supportedDataTypesArray = COMP_ENGINE_CONST.IN_BUILT_DATA_TYPES;
							var supportedDataTypes = "";

							var isCurrElementTypeSupported = false;

							for(var typeItrIndex = 0; typeItrIndex < supportedDataTypesArray.length; typeItrIndex++) {
								supportedDataTypes += "#" + supportedDataTypesArray[typeItrIndex] + "#";
								if(supportedDataTypesArray[typeItrIndex] === currElementType) {
									isCurrElementTypeSupported = true;
									break;
								}
							}

							if(!isCurrElementTypeSupported) {
								return "The '" + key + ".attr[" + loopIndex + "].type' can not be '"
									+ currElementType + "' It should be one of '" + supportedDataTypes + "'.";
							}
						}
						else {
							return "The '" + key + ".attr[" + loopIndex + "].type' is not defined.";
						}

						if("ref" in currElement) {
							if(currElementRef !== null) {
								// If ref is not null then the type can not be a String
								if(currElementType === VALUE_TYPE_STRING) {
									return "The '" + key + ".attr[" + loopIndex + "].ref' is not null " +
										"but the '" + key + ".attr[" + loopIndex + "].type' is a String.";
								}
								// if ref is not null then it should be an existing node on the sample config
								if(!currElementRef in sampleCompConfig) {
									return "The '" + key + ".attr[" + loopIndex + "].ref' is not null " +
										"but the '" + currElementRef + "' attribute does not exist on the sample config.";
								}
							}
						}
						else {
							return "The '" + key + ".attr[" + loopIndex + "].ref' is not defined.";
						}
						if("compEngine" in currElement) {
							var supportedCompEngineArray = COMP_ENGINE_CONST.COMP_ENGINE;
							var supportedCompEngines = "";

							var isCurrElementCompEngineSupported = false;

							for(var compEngineItrIndex = 0; compEngineItrIndex < supportedCompEngineArray.length; compEngineItrIndex++) {
								supportedCompEngines += "#" + supportedCompEngineArray[compEngineItrIndex] + "#";
								if(supportedCompEngineArray[compEngineItrIndex] === currElementCompEngine) {
									isCurrElementCompEngineSupported = true;
									break;
								}
							}

							if(!isCurrElementCompEngineSupported) {
								return "The '" + key + ".attr[" + loopIndex + "].compEngine' can not be '"
									+ currElementCompEngine + "' It should be one of '" + supportedCompEngines + "'.";
							}
						}
						else {
							return "The '" + key + ".attr[" + loopIndex + "].compEngine' is not defined.";
						}

						// TODO some more validation

					}

				}
				else {
					return "The '" + key + ".attr' is not an array.";
				}
			}
			else {
				return "The '" + key + "' has no 'attr' defined on this.";
			}
		}
	}
	return true;
}

module.exports = isSampleCompConfigValid;