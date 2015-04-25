'use strict';

var	COMP_ENGINE_CONST = require('./../../const/comparator-engine-const'),
	diffMatchPatch = require('../../../../../../lib/diff_match_patch_uncompressed'),
	logger = require('../../../../utils/log-util');

var VALUE_TYPE_STRING = COMP_ENGINE_CONST.IN_BUILT_DATA_TYPES[0],
	VALUE_TYPE_ARRAY = COMP_ENGINE_CONST.IN_BUILT_DATA_TYPES[1],
	VALUE_TYPE_OBJECT = COMP_ENGINE_CONST.IN_BUILT_DATA_TYPES[2],
	VALUE_COMPARATOR = COMP_ENGINE_CONST.COMP_ENGINE[0],
	TEXT_COMPARATOR = COMP_ENGINE_CONST.COMP_ENGINE[1],
	PRIMARY_ATTR_AS_INDEX = COMP_ENGINE_CONST.PRIMARY_ATTR_ARRAY[0];

function calculateDiffNode(obj1, obj2, sampleCompConfig, outputNode, currNode) {

	var sampleCompConfigCurrNode = sampleCompConfig[currNode];
	var currDiffDistance = 0;

	for(var mainLoopIndex = 0; mainLoopIndex < sampleCompConfigCurrNode.attr.length; mainLoopIndex++) {

		var currElement = sampleCompConfigCurrNode.attr[mainLoopIndex];

		var currAttrKey = currElement.key;
		var currAttrRef = currElement.ref;
		var currAttrType = currElement.type;
		var currAttrCompEngine = currElement.compEngine;
		var currAttrDiffPropagate = currElement.diffPropagation;

		var tempDiffChangeObj;

		if(!obj1[currAttrKey]) {
			obj1[currAttrKey] = eval("new " + currAttrType+ "()");
		}
		if(!obj2[currAttrKey]) {
			obj2[currAttrKey] = eval("new " + currAttrType+ "()");
		}

		if(!currAttrRef) {
			if(currAttrType === VALUE_TYPE_STRING) {

				tempDiffChangeObj = {
					"changeSet": [],
					"diffDistance": 0
				};

				var sample1AsString = obj1[currAttrKey].toString().replace(/<[^>]*>/g, "");
				var sample2AsString = obj2[currAttrKey].toString().replace(/<[^>]*>/g, "");

				if(currAttrCompEngine === VALUE_COMPARATOR) {

					//Case of both being empty string
					if(!sample1AsString && !sample2AsString) {
						tempDiffChangeObj.changeSet.push([0, ""]);
					}
					else if(!sample1AsString) {
						tempDiffChangeObj.changeSet.push([1, sample2AsString]);
						//tempDiffChangeObj.diffDistance = sample2AsString.length;
					}
					else if(!sample2AsString) {
						tempDiffChangeObj.changeSet.push([-1, sample1AsString]);
						//tempDiffChangeObj.diffDistance = sample1AsString.length;
					}
					else if(sample1AsString !== sample2AsString) {
						tempDiffChangeObj.changeSet.push([-1, sample1AsString], [1, sample2AsString]);
						//tempDiffChangeObj.diffDistance = sample1AsString.length > sample2AsString.length
						//	? sample1AsString.length : sample2AsString.length;
					}
					else {
						tempDiffChangeObj.changeSet.push([0, sample1AsString]);
					}

					var valSemanticDiff = diffMatchPatch.diff_main(sample1AsString, sample2AsString);
					diffMatchPatch.diff_cleanupSemantic(valSemanticDiff);

					tempDiffChangeObj.diffDistance = diffMatchPatch.diff_levenshtein(valSemanticDiff);

				}
				else if(currAttrCompEngine === TEXT_COMPARATOR) {

					var textSemanticDiff = diffMatchPatch.diff_main(sample1AsString, sample2AsString);
					diffMatchPatch.diff_cleanupSemantic(textSemanticDiff);

					tempDiffChangeObj.changeSet = textSemanticDiff;
					tempDiffChangeObj.diffDistance = diffMatchPatch.diff_levenshtein(textSemanticDiff);
				}

				if(currAttrDiffPropagate)
					currDiffDistance += tempDiffChangeObj.diffDistance;

			}
			else if(currAttrType === VALUE_TYPE_ARRAY) {

				// TODO
				// ref is null and the type of current element is an array
				// index based default matching
				// not applicable to the current scenario

			}
			else if(currAttrType === VALUE_TYPE_OBJECT) {

				// TODO
				// ref is null and the type of current element is an Object
				// attribute based default matching
				// not applicable to the current scenario

			}
		}
		else if(currAttrRef) {

			if(currAttrType === VALUE_TYPE_STRING) {

				console.info("This console never comes!!");
				// Not a valid scenario
				// mostly this if block never outputs it's destined machine code
				// if already handled during the sampleCompConfig sanity check

			}
			else if(currAttrType === VALUE_TYPE_ARRAY) {

				if(!Array.isArray(obj1[currAttrKey])) {
					console.info("Some error in the sampleCompConfig or sample jsons!!");
					// TODO throw some error for the same
				}
				if(!Array.isArray(obj2[currAttrKey])) {
					console.info("Some error in the sampleCompConfig or sample jsons!!");
					// TODO throw some error for the same
				}

				if(sampleCompConfig[currAttrRef].primaryAttr !== PRIMARY_ATTR_AS_INDEX) {
					// TODO not applicable for now
					console.info("This console should not come for the item configuration as of now...");
				}
				else if(sampleCompConfig[currAttrRef].primaryAttr === PRIMARY_ATTR_AS_INDEX) {

					var obj1CurrentArray = obj1[currAttrKey];
					var obj2CurrentArray = obj2[currAttrKey];

					var obj1Length = obj1CurrentArray.length;
					var obj2Length = obj2CurrentArray.length;

					var lengthToIterate = obj1Length > obj2Length ? obj1Length : obj2Length;

					tempDiffChangeObj = [];

					for(var loopIndex = 0; loopIndex < lengthToIterate; loopIndex++) {

						if(loopIndex > obj1Length-1 || loopIndex > obj2Length-1) {
							var tempFillUP = {};

							for(var subLoopIndex = 0; subLoopIndex < sampleCompConfig[currAttrRef].attr.length; subLoopIndex++) {

								var subCurrElement = sampleCompConfig[currAttrRef].attr[subLoopIndex];

								if (currElement.type === VALUE_TYPE_STRING) {
									tempFillUP[currElement.key] = "";
								}
								else if (currElement.type === VALUE_TYPE_ARRAY) {
									tempFillUP[currElement.key] = [];
								}
								else if (currElement.type === VALUE_TYPE_OBJECT) {
									tempFillUP[currElement.key] = {};
								}
							}

							(loopIndex > obj1Length - 1) ? obj1CurrentArray.push(tempFillUP) : obj2CurrentArray.push(tempFillUP);
						}

						var tempOutput = Object.create(null);
						var tempNestedOutput = calculateDiffNode.call(this, obj1CurrentArray[loopIndex], obj2CurrentArray[loopIndex], sampleCompConfig, tempOutput, currAttrRef);
						currDiffDistance += tempNestedOutput.diffDistance;
						tempDiffChangeObj.push(tempNestedOutput);

					}

				}

			}
			else if(currAttrType === VALUE_TYPE_OBJECT) {

				// TODO
				// ref is not null and the type of current element is an Object
				// go to the referenced object and loop through the attributes in that node
				// not applicable to the current scenario

			}

		}

		outputNode[currAttrKey] = tempDiffChangeObj;

	}

	outputNode["diffDistance"] = currDiffDistance;

	return outputNode;
}

module.exports = calculateDiffNode;