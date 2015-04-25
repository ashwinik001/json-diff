'use strict';

var $ = function() {
	console.info("from the inside of the constructor of $");
};

$.ajax = function(opts) {
	setTimeout(function() {
		if(opts && opts.success && typeof opts.success === "function" && Math.random() < 0.5) {
			opts.success("success data for " + opts.url);
		}
		else if(opts && opts.error && typeof opts.error === "function") {
			opts.error("error data for " + opts.url);
		}
		else {
			throw new TypeError("You don't even know how to invoke an AJAX :|" +
			", Learn 'link://to.AJAX.tutorial' if you want error less future ;)");
		}

		if(opts && opts.complete && typeof opts.complete === "function") {
			opts.complete("complete data for " + opts.url);
		}

	}, 1000);
};

var PromiseXHR = function(url) {
	this.url = url;
	return this;
};

PromiseXHR.prototype.then = function(onAsyncSuccess, onAsyncError, onAsyncComplete) {
	$.ajax({
		url: this.url,
		success: function(dataFromAjax) {
			//console.info("in the util success.", dataFromAjax);
			onAsyncSuccess(dataFromAjax);
		},
		error: function(dataFromAjax) {
			//console.info("in the util error.", dataFromAjax);
			onAsyncError(dataFromAjax);
		},
		complete: function(dataFromAjax) {
			//console.info("in the util complete.", dataFromAjax);
			onAsyncComplete(dataFromAjax);
		}
	});
};

function onSuccess() {
	console.info("in the client success.");
}

function onError() {
	console.info("in the client error.");
}

function onComplete() {
	console.info("in the client complete.");
}

// USAGE
//var myPromiseInstance = new PromiseXHR("http://www.dopeddude.com");
//myPromiseInstance.then(onSuccess, onError, onComplete);

console.info("file parsing done!!");
