'use strict';

var logUtil = require('./log-util');

function A() {
	console.info("A");
}

var a = new A();

logUtil("cp0", a.__proto__ === A.prototype);
logUtil("cp0", a.__proto__);
logUtil("cp1", Object.getPrototypeOf(a));
logUtil("cp1", Object.getPrototypeOf(A));
return;
logUtil("cp2", a.prototype);
logUtil("cp3", a.__proto__);
logUtil("cp4", a.constructor);
logUtil("cp5", a.__proto__.constructor);
logUtil("cp6", A.__proto__);
logUtil("cp7", A.__proto__.constructor);

return;

var myArray = (function() {

	var _loopIndex = null; //initial value and whosoever uses it does also initialise it.

	var __setProperty = function(obj, prop) {

		//var _isPropANumber = (String(+prop) === String(prop));

		Object.defineProperty(obj, prop, {
			enumerable: true,
			configurable: false,
			get: function() {
				return _length;
			},
			set: function(l) {
				var _lInt = parseInt(l);
				if(isNaN(_lInt)) {throw new TypeError("The length property can only be an integer");}
				for(_loopIndex = _lInt; _loopIndex < _length; _loopIndex++) {
					delete this[_loopIndex];
				}
				_length = _lInt;
			}
		});

	};

	var __Array = function() {
		var _length = 0;

		Object.defineProperty(this, 'length', {
			enumerable: true,
			configurable: false,
			get: function() {
				return _length;
			},
			set: function(l) {
				var _lInt = parseInt(l);
				if(isNaN(_lInt)) {throw new TypeError("The length property can only be an integer");}
				for(_loopIndex = _lInt; _loopIndex < _length; _loopIndex++) {
					delete this[_loopIndex];
				}
				_length = _lInt;
			}
		});

		_length = (1 === arguments.length && typeof arguments[0] === 'number') ?
			arguments[0] : arguments.length;

		if(_length === arguments[0]) {
			for(_loopIndex = 0; _loopIndex < _length; _loopIndex++) {

			}
		}

	};

	__Array.prototype.push = function(v) {
		return this[++this.length] = v;
	};

	__Array.prototype.pop = function() {
		return this[this.length--];
	};

	__Array.prototype.sort = function(fn, algoName) {

		// TODO

	};

	logUtil("cp0", __Array);

	return __Array;

})();

var test = new Ray();
logUtil("tes ", test);

/*if(!Function.prototype.myBind) {
	Function.prototype.myBind = function(context) {
		var localCaller = this;
		var initialArgs = Array.prototype.slice.call(arguments, 1);
		return function() {
			Array.prototype.forEach.call(arguments, function(elem) {
				initialArgs.push(elem);
			});
			localCaller.apply(context, initialArgs);
		}
	}
}

function nice(place){
	console.info(this.name + " is in " + place);
}

var boundNice = nice.myBind({name: "Ashwini"}, "Patna");

boundNice("Delhi");*/


/*
// Using CharCodeAt
var myParseInt = function(str, radix) {
	radix = radix || 10;
    if(radix > 36) throw new TypeError("Radix Argument can not be more than 36");
	var numPart = "";
	for(var i = 0; i < str.length; i++) {
		if((str.charCodeAt(i) > 47 && str.charCodeAt(i) < 47+radix+1)
			|| (radix > 10 && str.charCodeAt(i) > 64 && str.charCodeAt(i) < 64+(radix-10)+1)) {
			numPart += str.charAt(i);
		}
		else {
			break;
		}
	}
	console.info("numPart: ", numPart);
	if(numPart !== "") {
		var op = 0;
		for(var j = numPart.length- 1, pow = 0; j > -1; j--, pow++) {
			var currNumPart = numPart[j];
			var currCharCode = currNumPart.charCodeAt(0);
			op += (currCharCode > 64 ? (currCharCode - 55) : +currNumPart) * Math.pow(radix, pow);
		}
		return op;
	}
	else {
		return NaN;
	}
};*/


/*
(function() {
	'use strict';

	var i,
	// We could also build the array of methods with the following, but the
	//   getOwnPropertyNames() method is non-shimable:
	// Object.getOwnPropertyNames(Array).filter(function(methodName) {
	//   return typeof Array[methodName] === 'function'
	// });
		methods = [
			'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
			'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
			'forEach', 'map', 'reduce', 'reduceRight', 'filter',
			'some', 'every'
		],
		methodCount = methods.length,
		assignArrayGeneric = function(methodName) {
			if (!Array[methodName]) {
				var method = Array.prototype[methodName];
				if (typeof method === 'function') {
					Array[methodName] = function() {
						return method.call.apply(method, arguments);
					};
				}
			}
		};

	for (i = 0; i < methodCount; i++) {
		assignArrayGeneric(methods[i]);
	}
}());*/


/*var customConvert = function(sampleArray) {

 //sampleArray = ["A", "A/a", "A/b", "A/a/1", "A/a/2", "B", "B/a"];
 //var revisedSampleArray = []; // should be ["A/b", "A/a/1", "A/a/2", "B/a"] for the above input
 var finalOutput = [],
 i = 0, j = 0, k = 0,
 l = sampleArray.length, fl = 0,
 matchFound = false,
 toBeAdded = "", toBeAddedTo = null;

 var populateFinalOutput = function(toBeAdded, toBeAddedTo) {

 };

 for(; i < l; i++) {
 var currentApiElementToArray = sampleArray[i].split('/');
 fl = finalOutput.length;

 matchFound = false;

 for(; j < fl; j++) {
 if(finalOutput[j].name === currentApiElementToArray[0]) {
 var al = currentApiElementToArray.length;
 var currentChildNode = null;
 for(; k < al; k++) {

 }
 matchFound = true;
 break;
 }
 }
 if(!matchFound) {
 finalOutput.push({name: "", parent: "", administrator: "", children: []});
 populateFinalOutput(sampleArray[i], finalOutput[finalOutput.length - 1]);
 }
 }

 i = 0;

 };*/
