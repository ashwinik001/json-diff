'use strict';

var item_sample2 = {
	"ScenarioOrder": "2",
	"QuesText": "Enter the column labels Product in cell A4 and Cost in cell B4.",
	"ScenarioPathwayList": [
		{
			"MethodOrder": 3,
			"bPathwayActive": true,
			"PathwayEnumName": "Keyboard2",
			"ScenarioActionList": [
				{
					"ActionOrder": "1",
					"ActionDesc": "Click cell A4, type Product, and press TAB."
				},
				{
					"ActionOrder": "2",
					"ActionDesc": "Type Cost in cell B4, and press TAB."
				}
			]
		},
		{
			"MethodOrder": 6,
			"bPathwayActive": true,
			"PathwayEnumName": "Ribbon",
			"ScenarioActionList": [
				{
					"ActionOrder": "1",
					"ActionDesc": "Type Product in cell A4, and then press ENTER (or TAB, or DOWN ARROW). Alternatively, click the Enter button on the Formula bar."
				},
				{
					"ActionOrder": "2",
					"ActionDesc": "Type Cost in cell B4, and then press ENTER (or TAB, or DOWN ARROW). Alternatively, click the Enter button on the Formula bar."
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

module.exports = item_sample2;