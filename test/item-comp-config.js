'use strict';

var	COMP_ENGINE_CONST = require('./../../compare/src/engine/const/comparator-engine-const');

var VALUE_TYPE_STRING = COMP_ENGINE_CONST.IN_BUILT_DATA_TYPES[0],
	VALUE_TYPE_ARRAY = COMP_ENGINE_CONST.IN_BUILT_DATA_TYPES[1],
	//VALUE_TYPE_OBJECT = COMP_ENGINE_CONST.IN_BUILT_DATA_TYPES[2],
	VALUE_COMPARATOR = COMP_ENGINE_CONST.COMP_ENGINE[0],
	TEXT_COMPARATOR = COMP_ENGINE_CONST.COMP_ENGINE[1],
	PRIMARY_ATTR_AS_INDEX = COMP_ENGINE_CONST.PRIMARY_ATTR_ARRAY[0];

var itemCompConfig = {
	"root": {
		"nodeType": "item",
		"primaryAttr": PRIMARY_ATTR_AS_INDEX,
		"attr": [
			{"key": "ScenarioOrder", "type": VALUE_TYPE_STRING, "ref": null, "compEngine": VALUE_COMPARATOR},
			{"key": "QuesText", "type": VALUE_TYPE_STRING, "ref": null, "compEngine": TEXT_COMPARATOR, "diffPropagation": true},
			{"key": "ScenarioPathwayList", "type": VALUE_TYPE_ARRAY, "ref": "ScenarioPathwayList", "compEngine": VALUE_COMPARATOR}
		]
	},
	"ScenarioPathwayList": {
		"nodeType": "method",
		"primaryAttr": PRIMARY_ATTR_AS_INDEX,
		"attr": [
			{"key": "MethodOrder", "type": VALUE_TYPE_STRING, "ref": null, "compEngine": VALUE_COMPARATOR},
			{"key": "PathwayEnumName", "type": VALUE_TYPE_STRING, "ref": null, "compEngine": VALUE_COMPARATOR, "diffPropagation": true},
			{"key": "ScenarioActionList", "type": VALUE_TYPE_ARRAY, "ref": "ScenarioActionList", "compEngine": VALUE_COMPARATOR}
		]
	},
	"ScenarioActionList": {
		"nodeType": "action",
		"primaryAttr": PRIMARY_ATTR_AS_INDEX,
		"attr": [
			{"key": "ActionOrder", "type": VALUE_TYPE_STRING, "ref": null, "compEngine": VALUE_COMPARATOR},
			{"key": "ActionDesc", "type": VALUE_TYPE_STRING, "ref": null, "compEngine": TEXT_COMPARATOR, "diffPropagation": true}
		]
	}
};

module.exports = itemCompConfig;