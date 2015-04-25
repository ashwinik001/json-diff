'use strict';

var item_sample1 = {
	"ScenarioOrder": "1",
	"QuesText": "Enter the title Office Systems Pricing Information in cell A1.",
	"ScenarioPathwayList": [
		{
			"MethodOrder": 1,
			"bPathwayActive": true,
			"PathwayEnumName": "Keyboard",
			"ScenarioActionList": [
				{
					"ActionOrder": "1",
					"ActionDesc": "Type OK Office Systems Pricing Information in cell A1, and then press ENTER."
				}
			]
		},
		{
			"MethodOrder": 2,
			"bPathwayActive": true,
			"PathwayEnumName": "Keyboard (2)",
			"ScenarioActionList": [
				{
					"ActionOrder": "1",
					"ActionDesc": "Type OK Office Systems Pricing Information in cell A1, and then press ENTER (or TAB, or DOWN ARROW). Alternatively, click the Enter button on the Formula bar."
				}
			]
		},
		{
			"MethodOrder": 3,
			"bPathwayActive": true,
			"PathwayEnumName": "Other",
			"ScenarioActionList": [
				{
					"ActionOrder": "1",
					"ActionDesc": "With cell A1 selected, click in the Formula bar and type OK Office Systems Pricing Information. Click the Enter button on the Formula bar (or press ENTER)."
				}
			]
		},
		{
			"MethodOrder": 4,
			"bPathwayActive": true,
			"PathwayEnumName": "Other",
			"ScenarioActionList": [
				{
					"ActionOrder": "1",
					"ActionDesc": "Select cell A4, click in the Formula bar and type Product. Click the Enter button on the Formula bar (or press ENTER)."
				},
				{
					"ActionOrder": "2",
					"ActionDesc": "Select cell B4, click in the Formula bar and type Cost. Click the Enter button on the Formula bar (or press ENTER)."
				}
			]
		}
	]
};

module.exports = item_sample1;