'use strict';

var sample_diff = {
	"diffDistance": 10,
	"ScenarioOrder": {"changeSet": [[-1, '1'], [1, '2']], "diffDistance": 2},
	"QuesText": {"changeSet":[ [ 0, 'Enter the ' ], [ -1, 'title Office Systems Pricing Information'], [ 1, 'column labels Product in cell A4 and Cost' ], [ 0, ' in cell ' ], [ -1, 'A1' ], [ 1, 'B4' ], [ 0, '.' ] ] },
	"ScenarioPathwayList": [
		{
			"diffDistance": 6,
			"MethodOrder": 1,
			"bPathwayActive": true,
			"PathwayEnumName": {"changeSet": [[-1, 'Keyboard'], [1, 'Ribbon']], "diffDistance": 2},
			"ScenarioActionList": [
				{
					"diffDistance": 6,
					"ActionOrder": "1",
					"ActionDesc": {"changeSet":[ [ 0, 'Type OK Office Systems Pricing Information in cell ' ], [ -1, 'A1'], [ 1, 'B1' ], [ 0, ' , and then press ENTER.' ] ]}
				}
			]
		},
		{
			"MethodOrder": 2,
			"bPathwayActive": true,
			"PathwayEnumName": "Keyboard (2)",
			"ScenarioActionList": [
				{
					"ActionOrder": {"changeSet": [[-1, '6'], [1, '4']]},
					"ActionDesc": {"changeSet":[ [ 0, 'Type "OK Office Systems Pricing Information" in cell ' ], [ -1, 'A1'], [ 1, 'B1' ], [ 0, ' , and then close the document.' ] ]}
				}
			]
		},
		{
			"MethodOrder": 3,
			"bPathwayActive": true,
			"PathwayEnumName": "Keyboard (2)",
			"ScenarioActionList": [
				{
					"ActionOrder": {"changeSet": [[-1, ''], [1, '4']]},
					"ActionDesc": {"changeSet":[ [ -1, ''], [ 1, 'close the document.' ] ]}
				}
			]
		},
		{
			"MethodOrder": 4,
			"bPathwayActive": true,
			"PathwayEnumName": "Keyboard (2)",
			"ScenarioActionList": [
				{
					"ActionOrder": {"changeSet": [[-1, '5'], [1, '4']]},
					"ActionDesc": {"changeSet":[ [ -1, 'save it.'], [ 1, 'close the document.' ] ]}
				},
				{
					"ActionOrder": {"changeSet": [[-1, '6'], [1, '']]},
					"ActionDesc": {"changeSet":[ [ -1, 'close the document.'], [ 1, '' ] ]}
				}
			]
		},
		{
			"MethodOrder": {"changeSet": [[-1, ''], [1, '4']]},
			"bPathwayActive": true,
			"PathwayEnumName": {"changeSet": [[-1, ''], [1, 'Other']]},
			"ScenarioActionList": [
				{
					"ActionOrder": {"changeSet": [[-1, ''], [1, '1']]},
					"ActionDesc": {"changeSet": [[-1, ''], [1, 'Click on the file, go to save as, enter the file name in the prompt and save the document.']]}
				}
			]
		},
		{
			"MethodOrder": {"changeSet": [[-1, '6'], [1, '']]},
			"bPathwayActive": true,
			"PathwayEnumName": {"changeSet": [[-1, 'Ribbon(2)'], [1, '']]},
			"ScenarioActionList": [
				{
					"ActionOrder": {"changeSet": [[-1, '1'], [1, '']]},
					"ActionDesc": {"changeSet": [[-1, 'Click on the file, go to save as, enter the file name in the prompt and save the document.'], [1, '']]}
				}
			]
		}
	]
};